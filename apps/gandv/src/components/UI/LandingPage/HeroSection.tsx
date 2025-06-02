import React from 'react';
import '../../../styles/heroSection.css';
import { FaBalanceScale } from 'react-icons/fa';

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="hero-section">
      <div className="icon-wrapper">
        <FaBalanceScale className="hero-icon" />
      </div>
      <h1 className="hero-title">
        Usted proporciona <span className="highlight">la visión</span>, nosotros proporcionamos la solución.
      </h1>
      <p className="hero-subtitle">
        Brindamos consultoría a bancos, industrias y empresas, tanto en nuevos emprendimientos en empresas existentes.
      </p>
    </section>
  );
};

export default HeroSection;
