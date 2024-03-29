import React from 'react';
import '../../styles/stats.css';

const StatsSection = () => {
  const stats = [
    { number: '1340+', label: 'Clients' },
    { number: '100+', label: 'Years Practical Experience' },
    { number: '11200+', label: 'Cases Won' },
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
