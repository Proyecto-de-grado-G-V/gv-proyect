import '../../styles/dashboard.css'
import Image from 'next/image'
import { FiHome, FiSearch, FiBarChart, FiCalendar, FiUser } from 'react-icons/fi' // Añadir los íconos
import logo from '@/assets/image/logo.png' 

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <Image src={logo} alt="Logo V&A" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">
                <FiHome size={20} /> 
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <FiSearch size={20} /> 
                Búsqueda
              </a>
            </li>
            <li>
              <a href="#">
                <FiBarChart size={20} /> 
                Reporte
              </a>
            </li>
            <li>
              <a href="#">
                <FiCalendar size={20} /> 
                Calendario
              </a>
            </li>
            <li>
              <a href="#">
                <FiUser size={20} /> 
                Cuenta
              </a>
            </li>
          </ul>
        </nav>
        <div className="user">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" />
          <span>Alfred</span>
        </div>
      </div>

      <div className="main-content">
        <div className="welcome">
          <h1>¡Estamos emocionados de tenerte aquí!</h1>
          <p>Si deseas agregar un nuevo documento, solo tienes que hacer clic en el botón de “Crear expediente”</p>
          <button className="cta-btn">Crear expediente</button>
        </div>
      </div>
    </div>
  )
}
