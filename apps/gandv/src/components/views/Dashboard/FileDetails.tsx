import "../../../styles/fileDetails.css";
import { FiFileText } from "react-icons/fi";
import ScanNotificationsButton from "./ScanNotificationsButton";
import processFlowData from "../../../data/processFlow.json";
import ProcessFlow from "./ProcessFlow";
import Comments from "./Comments";
import AddNotes from "@/components/UI/Dashboard/AddNotes";

type Props = {
  expediente: {
    nombre: string;
    edad: string;
    ci: string;
    tipo: string;
    fecha: string;
  };
};

export default function FileDetails({ expediente }: Props) {
  const handleScanNotifications = () => {
    alert("Escaneando notificaciones para el expediente...");
  };

  return (
    <div className="expediente-detalle">
      <div className="encabezado">
        <FiFileText size={28} />
        <h2>
          {expediente.nombre} - {expediente.tipo}
        </h2>
        <span className="fecha">{expediente.fecha}</span>
      </div>
      <div className="info">
        <p>
          <strong>Nombre:</strong> {expediente.nombre}
        </p>
        <p>
          <strong>Edad:</strong> {expediente.edad}
        </p>
        <p>
          <strong>C.I.:</strong> {expediente.ci}
        </p>
        <p>
          <strong>Materia:</strong> {expediente.tipo}
        </p>
      </div>
      <div className="process-flow">
        <h3>Flujo del Proceso</h3>
        <ProcessFlow processes={processFlowData} />
      </div>
      <div className="notas-comentarios">
        <div className="notas">
          <AddNotes />
        </div>
        <div className="comentarios">
          <Comments />
        </div>
      </div>
      <div className="acciones">
        <ScanNotificationsButton onScan={handleScanNotifications} />
      </div>
    </div>
  );
}
