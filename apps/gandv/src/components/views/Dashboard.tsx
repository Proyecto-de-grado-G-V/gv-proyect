import { useState } from 'react'
import SidebarDashboard from '@/components/views/SidebarDashboard'
import CrearExpedienteModal from '@/components/views/CrearExpedienteModal'
import ExpedienteDetalle from '@/components/views/ExpedienteDetalle'
import BuscarExpedientes from '@/components/views/BuscarExpedientes'
import CuentaUsuario from '@/components/views/CuentaUsuario'
import '../../styles/dashboard.css'
import Calendario from '../UI/Calendario'
import Reporte from '../UI/Reporte'

export default function Dashboard() {
  const [modalVisible, setModalVisible] = useState(false)
  const [currentTab, setCurrentTab] = useState('home')
  const [expediente, setExpediente] = useState<any | null>(null)

  const handleCreateExpediente = (nuevo: any) => {
    setExpediente({ ...nuevo, fecha: new Date().toLocaleDateString() })
    setCurrentTab('expedienteDetalle')
  }

  return (
    <div className="dashboard-container">
      <SidebarDashboard onTabChange={setCurrentTab} currentTab={currentTab} />

      <div className="main-content">
        {currentTab === 'home' && (
          <div className="welcome">
            <h1>¡Estamos emocionados de tenerte aquí!</h1>
            <p>Si deseas agregar un nuevo documento, solo tienes que hacer clic en el botón de “Crear expediente”</p>
            <button className="cta-btn" onClick={() => setModalVisible(true)}>Crear expediente</button>
          </div>
        )}

        {currentTab === 'expedienteDetalle' && expediente && (
          <ExpedienteDetalle expediente={expediente} />
        )}

        {currentTab === 'buscar' && <BuscarExpedientes />}
        {currentTab === 'cuenta' && <CuentaUsuario />}
        {currentTab === 'calendario' && <Calendario />} 
        {currentTab === 'reporte' && <Reporte />} 

        {modalVisible && (
          <CrearExpedienteModal
            onClose={() => setModalVisible(false)}
            onCreate={handleCreateExpediente}
          />
        )}
      </div>
    </div>
  )
}
