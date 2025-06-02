import { LuScanText } from "react-icons/lu";

type Props = {
  onScan: () => void
}

export default function ScanNotificationsButton({ onScan }: Props) {
  return (
    <div className="scan-notifications-container">
      <button className="scan-notifications-button" onClick={onScan}>
        <LuScanText size={24} />
      </button>
      <span className="tooltip">Escanear Notificaciones</span>
    </div>
  )
}