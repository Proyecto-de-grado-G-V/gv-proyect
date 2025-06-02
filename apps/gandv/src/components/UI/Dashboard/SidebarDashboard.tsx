import Image from 'next/image';
import { FiHome, FiSearch, FiBarChart, FiCalendar, FiUser } from 'react-icons/fi';
import logo from '@/assets/image/logo.png';
import '../../../styles/dashboard.css';

type Props = {
  onTabChange: (tab: string) => void;
  currentTab: string; 
};

export default function SidebarDashboard({ onTabChange, currentTab }: Props) {
  return (
    <div className="sidebar">
      <div className="logo">
        <Image src={logo} alt="Logo V&A" />
      </div>
      <nav className="nav">
        <ul>
          <li className={currentTab === 'home' ? 'active' : ''}>
            <a onClick={() => onTabChange('home')}>
              <FiHome size={20} /> Home
            </a>
          </li>
          <li className={currentTab === 'buscar' ? 'active' : ''}>
            <a onClick={() => onTabChange('buscar')}>
              <FiSearch size={20} /> Búsqueda
            </a>
          </li>
          <li className={currentTab === 'reporte' ? 'active' : ''}>
            <a onClick={() => onTabChange('reporte')}>
              <FiBarChart size={20} /> Reporte
            </a>
          </li>
          <li className={currentTab === 'calendario' ? 'active' : ''}>
            <a onClick={() => onTabChange('calendario')}>
              <FiCalendar size={20} /> Calendario
            </a>
          </li>
          <li className={currentTab === 'cuenta' ? 'active' : ''}>
            <a onClick={() => onTabChange('cuenta')}>
              <FiUser size={20} /> Cuenta
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
