'use client';

import React, { useState } from 'react';
import '../../styles/galeria.css';

const images = [
  'https://metropolitanhost.com/themes/templatemoster/html/powar/lawzy/assets/img/home-1/540x600.jpg',
  'https://metropolitanhost.com/themes/templatemoster/html/powar/lawzy/assets/img/home-1/540x285.jpg',
  'https://metropolitanhost.com/themes/templatemoster/html/powar/lawzy/assets/img/home-1/540x285-0.jpg',
];

const Galeria: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev! + 1) % images.length);
  const prevImage = () => setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);

  return (
    <section className="galeria">
      <h2>Nuestra galería</h2>
      <div className="divider-icon"><i className="fas fa-balance-scale"></i></div>

      <div className="galeria-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Galería ${index}`}
            className="galeria-thumb"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <button className="modal-btn prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ‹
          </button>
          <img
            src={images[selectedIndex]}
            alt="Vista ampliada"
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="modal-btn next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ›
          </button>
          <button className="modal-close" onClick={(e) => { e.stopPropagation(); closeModal(); }}>
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Galeria;
