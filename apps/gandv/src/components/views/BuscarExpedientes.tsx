import { useState, useEffect } from 'react'
import { FiFolder, FiSearch, FiFilter } from 'react-icons/fi'
import '../../styles/buscarExpedientes.css'
import { fetchLegalCaseFiles } from '@/app/services/LegalCaseFile'

const BuscarExpedientes = () => {
  const [search, setSearch] = useState('')
  const [expedientes, setExpedientes] = useState<Expediente[]>([])
  const [selectedFilter, setSelectedFilter] = useState('nombre')
  const [filterVisible, setFilterVisible] = useState(false) 
  const [selectedMateria, setSelectedMateria] = useState('') 
  const [selectedOrden, setSelectedOrden] = useState<'asc' | 'desc'>('desc') 
  const [selectedCI, setSelectedCI] = useState('') 

  useEffect(() => {
    const loadProducts = async () => {
      const result = await fetchLegalCaseFiles();
      setExpedientes(result);
    };
    loadProducts();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value)
  }

  const handleMateriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMateria(e.target.value)
  }

  const handleOrdenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrden(e.target.value as 'asc' | 'desc')
  }

  const handleCIChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCI(e.target.value)
  }

  const filtrados = expedientes.filter(e =>
    (selectedMateria === '' || e.matter.toLowerCase() === selectedMateria.toLowerCase()) && 
    (selectedCI === '' || e.ci.includes(selectedCI)) && 
    (selectedFilter === 'nombre' ? e.clientFullName.toLowerCase().includes(search.toLowerCase()) :
    selectedFilter === 'materia' ? e.matter.toLowerCase().includes(search.toLowerCase()) :
    selectedFilter === 'ci' ? e.ci.includes(search) :
    e.createdAt.includes(search) || false)
  )

  const expedientesOrdenados = filtrados.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    
    return selectedOrden === 'desc' ? dateB - dateA : dateA - dateB
  })

  return (
    <div className="buscar-expedientes">
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder={`Buscar por ${selectedFilter}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
          <FiSearch size={20} className="search-icon" />
        </div>
        <div className="filter-icon" onClick={() => setFilterVisible(!filterVisible)}>
          <FiFilter size={24} />
        </div>
      </div>

      {filterVisible && (
        <div className="filter-container">
          <h4>Filtrar por:</h4>
          
          <div className="filter-option">
            <label>Materia</label>
            <div className="filter-buttons">
              <button 
                className={selectedMateria === '' ? 'active' : ''} 
                onClick={() => setSelectedMateria('')}>Todos</button>
              <button 
                className={selectedMateria === 'Penal' ? 'active' : ''} 
                onClick={() => setSelectedMateria('Penal')}>Penal</button>
              <button 
                className={selectedMateria === 'Familiar' ? 'active' : ''} 
                onClick={() => setSelectedMateria('Familiar')}>Familiar</button>
              <button 
                className={selectedMateria === 'Civil' ? 'active' : ''} 
                onClick={() => setSelectedMateria('Civil')}>Civil</button>
            </div>
          </div>

          <div className="filter-option">
            <label>Ordenar por</label>
            <div className="filter-buttons">
              <button 
                className={selectedOrden === 'desc' ? 'active' : ''} 
                onClick={() => setSelectedOrden('desc')}>Descendente</button>
              <button 
                className={selectedOrden === 'asc' ? 'active' : ''} 
                onClick={() => setSelectedOrden('asc')}>Ascendente</button>
            </div>
          </div>

          <div className="filter-option">
            <label>CI</label>
            <input 
              type="text" 
              placeholder="Introducir CI del cliente" 
              value={selectedCI} 
              onChange={handleCIChange} 
            />
          </div>

          <button className="apply-filter-btn">Aplicar filtro</button>
        </div>
      )}

      <ul className="expediente-lista">
        {expedientesOrdenados.map(exp => (
          <li key={exp.id} className="expediente-item">
            <FiFolder size={20} className="expediente-icon" />
            <span><strong>{exp.clientFullName}</strong> - {exp.matter} - {exp.ci}</span>
            <span className="fecha">{new Date(exp.createdAt).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BuscarExpedientes
