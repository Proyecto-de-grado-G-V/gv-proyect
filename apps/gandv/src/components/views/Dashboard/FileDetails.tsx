import '../../styles/fileDetails.css'
import { FiFileText } from 'react-icons/fi'

type Props = {
  expediente: {
    nombre: string
    edad: string
    ci: string
    tipo: string
    fecha: string
  }
}

export default function FileDetails({ expediente }: Props) {
  return (
    <div className="expediente-detalle">
      <div className="encabezado">
        <FiFileText size={28} />
        <h2>{expediente.nombre} - {expediente.tipo}</h2>
        <span className="fecha">{expediente.fecha}</span>
      </div>
      <div className="info">
        <p><strong>Nombre:</strong> {expediente.nombre}</p>
        <p><strong>Edad:</strong> {expediente.edad}</p>
        <p><strong>C.I.:</strong> {expediente.ci}</p>
        <p><strong>Materia:</strong> {expediente.tipo}</p>
      </div>
    </div>
  )
}
