import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import interactionPlugin from "@fullcalendar/interaction"; 
import "../../../styles/schedule.css";

const Schedule = () => {
  const [events, setEvents] = useState<EventType[]>([
    {
      title: "Respuesta a la Audiencia Judicial",
      start: "2025-04-12T10:00:00",
      end: "2025-04-14T12:00:00",
      description: "Descripción del evento",
      backgroundColor: "#c49b63",
      borderColor: "#c49b63",
      textColor: "white",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
    color: "#c49b63",
  });

  const handleDateClick = (arg: any) => {
    setEventDetails({
      ...eventDetails,
      start: arg.dateStr,
      end: arg.dateStr,
    });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveEvent = () => {
    if (!eventDetails.title.trim()) {
      alert("El título del evento es obligatorio.");
      return; 
    }

    setEvents([
      ...events,
      {
        title: eventDetails.title,
        start: eventDetails.start,
        end: eventDetails.end,
        description: eventDetails.description,
        backgroundColor: eventDetails.color,
        borderColor: eventDetails.color,
        textColor: "white",
      },
    ]);
    setModalVisible(false); 
  };

  return (
    <div>
      <h2>Calendario de Audiencias</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
        editable={true}
        selectable={true}
        eventContent={renderEventContent}
      />

      {modalVisible && (
        <div className="custom-modal">
          <div className="modal-content">
            <h2>Agregar Evento</h2>
            <label>Título</label>
            <input
              type="text"
              value={eventDetails.title}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, title: e.target.value })
              }
              placeholder="Título del evento"
            />
            <br />
            <label>Descripción</label>
            <textarea
              value={eventDetails.description}
              onChange={(e) =>
                setEventDetails({
                  ...eventDetails,
                  description: e.target.value,
                })
              }
              placeholder="Descripción del evento"
            />
            <br />
            <label>Fecha de inicio</label>
            <input
              type="datetime-local"
              value={eventDetails.start}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, start: e.target.value })
              }
            />
            <br />
            <label>Fecha de fin</label>
            <input
              type="datetime-local"
              value={eventDetails.end}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, end: e.target.value })
              }
            />
            <br />
            <label>Color</label>
            <input
              type="color"
              value={eventDetails.color}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, color: e.target.value })
              }
            />
            <br />
            <div className="button-container">
              <button type="button" onClick={handleCloseModal}>
                Cancelar
              </button>
              <button type="button" onClick={handleSaveEvent}>
                Guardar Evento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      <p>{eventInfo.event.extendedProps.description}</p>
    </>
  );
}

export default Schedule;

interface EventType {
  title: string;
  start: string;
  end: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}
