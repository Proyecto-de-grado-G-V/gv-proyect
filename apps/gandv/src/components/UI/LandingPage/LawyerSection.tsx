import React from 'react';
import '../../styles/lawyerSection.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const LawyerSection: React.FC = () => {
  return (
    <section className="lawyer-section">
      <h2 className="section-title">Nuestro abogado</h2>
      <div className="icon-separator">⚖️</div>
      <div className="lawyer-cards">
        <div className="card">
          <img src="https://metropolitanhost.com/themes/templatemoster/html/powar/lawzy/assets/img/home-1/270x270.jpg" alt="Tim Abell" className="lawyer-image" />
          <h3 className="lawyer-name">Tim Abell</h3>
          <p className="lawyer-role">Fundador</p>
          <p className="lawyer-description">
            Los litigios comerciales siempre han sido lo que nuestros competidores utilizaban para reprimirnos, 
            pero tan pronto como contratamos esta ley.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div className="card">
          <img src="https://metropolitanhost.com/themes/templatemoster/html/powar/lawzy/assets/img/home-1/270x270-0.jpg" alt="María Henry" className="lawyer-image" />
          <h3 className="lawyer-name">María Henry</h3>
          <p className="lawyer-role">Gerente</p>
          <p className="lawyer-description">
            Utilizar los servicios legales de Lawzy fue extremadamente fácil. Hace algún tiempo nuestra empresa pasó por.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerSection;
