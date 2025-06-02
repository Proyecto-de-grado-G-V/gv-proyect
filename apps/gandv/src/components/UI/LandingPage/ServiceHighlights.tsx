import React from "react";
import "../../../styles/serviceHighlights.css";
import { FaCheckCircle, FaUserTie, FaThumbsUp, FaHandshake } from "react-icons/fa";

interface ServiceHighlightsProps {
  id?: string;
}

const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ id }) => {
  return (
    <section id={id} className="highlights-container">
      <div className="highlight-box">
        <FaCheckCircle className="highlight-icon" />
        <h3>Orientado al cliente</h3>
        <p>Servimos a nuestro cliente de la mejor manera posible.</p>
      </div>
      <div className="highlight-box">
        <FaUserTie className="highlight-icon" />
        <h3>Abogados expertos</h3>
        <p>Años de experiencia</p>
      </div>
      <div className="highlight-box">
        <FaThumbsUp className="highlight-icon" />
        <h3>Buena tasa de éxito</h3>
        <p>Más del 90% de clientes satisfechos</p>
      </div>
      <div className="highlight-box">
        <FaHandshake className="highlight-icon" />
        <h3>Atención al cliente</h3>
        <p>Soporte rápido 24*7</p>
      </div>
    </section>
  );
};

export default ServiceHighlights;
