import React from "react";
import "../../styles/heroBanner.css";
import Image from "next/image";
import bannerImg from "../../assets/image/banner.jpg"; // Importe correcto de la imagen

const Banner: React.FC = () => {
  return (
    <section className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <p className="banner-topline">
            Decisión &nbsp; | &nbsp; Liderazgo &nbsp; | &nbsp; Resultado
          </p>
          <h1 className="banner-title">
            Luchamos por <span className="highlight">el</span> derecho
          </h1>
          <p className="banner-subtitle">
            <strong>El mejor despacho en la que puede confiar.</strong>
          </p>

          <div className="banner-form">
            <input
              type="email"
              placeholder="Introduzca su dirección de correo electrónico"
              className="banner-input"
            />
            <button className="banner-button">OBTENGA UNA COTIZACIÓN GRATIS</button>
          </div>
        </div>

        <div className="banner-image">
          <Image src={bannerImg} alt="Libros de derecho y balanza" layout="responsive" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
