// components/AboutUs.tsx
import React from "react";
import "../../styles/aboutUs.css"; // Asegúrate de tener el archivo de estilos

const AboutUs: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-image">
        <img
          src="https://metropolitanhost.com/themes/templatemoster/html/powar/lawzy/assets/img/home-1/445x530.jpg"
          alt="Balanza de justicia"
        />
        <div className="experience-box">
          <h2>25<span>+</span></h2>
          <p>Años de experiencia</p>
        </div>
      </div>

      <div className="about-text">
        <p className="about-subtitle">Sobre nosotros</p>
        <h1>Reputación legal.<br />Respeto. Resultado.</h1>
        <p className="about-description">
          Un abogado o procurador es una persona que ejerce la abogacía, como defensor, procurador, abogado, abogado-en-derecho, canonista, abogado canónico, notario de derecho civil, consejero, asesor, procurador, ejecutivo legal o servidor público.
        </p>

        <div className="about-services">
          <div className="service">
            <span className="check">✓</span>
            <div>
              <h3>Derecho mercantil</h3>
              <p>La firma de abogados necesitan una sólida base legislativa para funcionar bien.</p>
            </div>
          </div>

          <div className="service">
            <span className="check">✓</span>
            <div>
              <h3>Litigios civiles</h3>
              <p>Abogamos por nuestros clientes, buscando una resolución justa.</p>
            </div>
          </div>
        </div>

        <button className="info-button">MÁS INFORMACIÓN</button>
      </div>
    </section>
  );
};

export default AboutUs;
