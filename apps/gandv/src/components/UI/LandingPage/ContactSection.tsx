import React from 'react';
import '../../../styles/contactSection.css';

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <section id={id} className="contact-section">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.95919250772425!2d-66.15274952912961!3d-17.39512341792289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373f98d89d9b3%3A0x843f605390655716!2sPlotter%20UltraPlot!5e0!3m2!1ses!2sbo!4v1748448747639!5m2!1ses!2sbohttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.95919250772425!2d-66.15274952912961!3d-17.39512341792289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373f9f00c853f%3A0x3ade81fd20bcc0ca!2sC.%20Lanza%20101%2C%20Cochabamba!5e0!3m2!1ses!2sbo!4v1748448843882!5m2!1ses!2sbo"
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
