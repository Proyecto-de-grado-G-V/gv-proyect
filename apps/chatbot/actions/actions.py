from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet, UserUtteranceReverted
from rasa_sdk.executor import CollectingDispatcher
import requests
import os
from dotenv import load_dotenv

load_dotenv()

class ActionProcesarInformacionPersonal(Action):
    def name(self) -> Text:
        return "action_procesar_informacion_personal"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        nombre = tracker.get_slot('nombre')
        carnet_identidad = tracker.get_slot('carnet_identidad')
        edad = tracker.get_slot('edad')
        proceso = tracker.get_slot('tipo_proceso')
        precio = 1000
        materia = "Desconocida"
        procesos = []

        print(f"Nombre: {nombre}, CI: {carnet_identidad}, Edad: {edad}, Proceso: {proceso}")

        url = f"http://localhost:5196/api/Cotizacion/{proceso}"
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            precio = data.get("cotizacion", precio)
            materia = data.get("materia", materia)
            procesos = data.get("procesos", [])

            print(f"Precio: {precio}, Materia: {materia}")
            print("Procesos:", procesos)
        else:
            print(f"Error {response.status_code}: {response.text}")
            dispatcher.utter_message("Hubo un error al obtener la cotización.")
            return []

        formatted_processes = "\n".join([f"- {p}" for p in procesos]) if procesos else "No disponible."

        mensaje = (
            f"✅ ¡Tu perfil ha sido creado con éxito! 🎉\n\n"
            f"🔹 Nombre: {nombre}\n"
            f"🔹 Edad: {edad} años\n"
            f"🔹 CI: {carnet_identidad}\n\n"
            f"📌 Detalles del proceso:\n"
            f"🗂 Materia: {materia}\n"
            f"⚖ Tipo de proceso: {proceso}\n"
            f"💰 Costo estimado: {precio} Bs.\n\n"
            f"📝 Pasos a seguir:\n{formatted_processes}"
        )

        dispatcher.utter_message(text=mensaje)

        return [
            SlotSet("materia", materia),
            SlotSet("procesos", procesos),
            SlotSet("precio", precio)
        ]


class ActionDefaultFallback(Action):
    def name(self):
        return "action_default_fallback"

    def run(self, dispatcher, tracker, domain):
        dispatcher.utter_message(text="Este chatbot solo brinda información sobre divorcio y herencia. ¿Puedo ayudarte con algo relacionado?")
        return [UserUtteranceReverted()]


class ActionLLMResponse(Action):
    def name(self) -> str:
        return "action_llm_response"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: dict) -> list:

        user_message = tracker.latest_message.get('text')
        api_key = os.getenv("GEMINI_API_KEY")

        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
        headers = {"Content-Type": "application/json"}
        payload = {
            "contents": [{
                "parts": [{"text": f"Eres un asistente legal en Bolivia. El usuario dice: {user_message}"}]
            }]
        }

        try:
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            text_response = response.json()["candidates"][0]["content"]["parts"][0]["text"]
        except Exception as e:
            print("Error con Gemini API:", e)
            text_response = "No pude responder esa pregunta en este momento. Intenta con otra consulta legal, por favor."

        dispatcher.utter_message(text=text_response)
        return [UserUtteranceReverted()]
