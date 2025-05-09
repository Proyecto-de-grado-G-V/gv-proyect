import React from 'react';
import '../../styles/starsSection.css';

const StatsSection = () => {
  const stats = [
    { number: '150+', label: 'Clientes' },
    { number: '25+', label: 'Años de experiencia práctica' },
    { number: '150+', label: 'Casos Ganados' },
  ];

  return (
    <section className="stats-section">
      <div className="stats-overlay">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
