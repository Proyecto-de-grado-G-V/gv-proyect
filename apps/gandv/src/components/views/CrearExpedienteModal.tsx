import React, { useState } from 'react'
import '../../styles/crearExpedienteModal.css'

type Props = {
  onClose: () => void
  onCreate: (expediente: {
    nombre: string
    edad: string
    ci: string
    tipo: string
  }) => void
}

export default function CrearExpedienteModal({ onClose, onCreate }: Props) {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [ci, setCI] = useState('')
  const [tipo, setTipo] = useState('Familiar')

  const handleSubmit = () => {
    if (nombre && edad && ci) {
      onCreate({ nombre, edad, ci, tipo })
      onClose()
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Crear Expediente</h2>
        <p>Necesitamos tus datos básicos para continuar:</p>
        <input type="text" placeholder="Nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input type="number" placeholder="Edad" value={edad} onChange={e => setEdad(e.target.value)} />
        <input type="text" placeholder="Carnet de identidad" value={ci} onChange={e => setCI(e.target.value)} />
        <select value={tipo} onChange={e => setTipo(e.target.value)}>
          <option value="Familiar">Familiar</option>
          <option value="Penal">Penal</option>
          <option value="Civil">Civil</option>
        </select>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Crear</button>
          <button onClick={onClose} className="cancel">Cancelar</button>
        </div>
      </div>
    </div>
  )
}
