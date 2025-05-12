import React from 'react';
import '../../styles/contactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="form-container">
        <p className="section-subtitle">Llamada a la acción</p>
        <h2 className="section-title">Hacer una solicitud</h2>
        <form className="contact-form">
          <input type="text" placeholder="Ingrese el nombre completo" />
          <input type="email" placeholder="Dirección de correo electrónico" />
          <textarea placeholder="Introducir mensaje" rows={5} />
          <button type="submit">ENVIAR SOLICITUD</button>
        </form>
      </div>
      <div className="map-container">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991451228447!2d2.292292615674863!3d48.85837307928701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb0c8dfbb%3A0x89b0c0a1f6b473bd!2sTour%20Eiffel!5e0!3m2!1ses!2sfr!4v1712935721075!5m2!1ses!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
