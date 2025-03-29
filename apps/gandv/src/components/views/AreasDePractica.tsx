import React from "react";
import "../../styles/areasDePractica.css";
import areas from "../../data/areasDePractica.json";

interface Area {
  titulo: string;
  descripcion: string;
  icono: string;
  imagen: string;
}

const AreasDePractica: React.FC = () => {
  return (
    <section className="areas-de-practica">
      <h2>Áreas de práctica</h2>
      <div className="divider" />
      <div className="cards-container">
        {areas.map((area, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={area.imagen} alt={area.titulo} />
              <div className="card-icon">
                <i className={`fas ${area.icono}`}></i> 
              </div>
            </div>
            <h3>{area.titulo}</h3>
            <p>{area.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreasDePractica;
