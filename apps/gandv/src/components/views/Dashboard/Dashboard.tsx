import { useState } from 'react'
import SidebarDashboard from '@/components/UI/Dashboard/SidebarDashboard'
import CrearExpedienteModal from '@/components/UI/Dashboard/CreateModalFile'
import ExpedienteDetalle from '@/components/views/Dashboard/FileDetails'
import BuscarExpedientes from '@/components/UI/Dashboard/SearchFiles'
import CuentaUsuario from '@/components/UI/Dashboard/UserAccount'
import '../../styles/dashboard.css'
import Schedule from '../../UI/Dashboard/Schedule'
import Reporte from '../../UI/Dashboard/Report'

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
        {currentTab === 'calendario' && <Schedule />} 
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
