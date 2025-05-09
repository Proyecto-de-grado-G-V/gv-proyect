import "../../styles/faqBanner.css";
import { useState } from "react";
import faq from "../../../data/preguntas.json"; 

interface FAQ {
  question: string;
  answer: string;
}

export default function FaqBanner() {
  const [active, setActive] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-banner">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <p className="faq-description">
        Aquí encontrarás las respuestas a las dudas más comunes sobre nuestros
        servicios legales. Si tienes alguna pregunta adicional, no dudes en
        contactarnos. ¡Estamos aquí para ayudarte!
      </p>
      <div className="faq-list">
        {faq.map((faqItem, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{faqItem.question}</span>
              <span className="faq-toggle">{active === index ? "+" : "+"}</span>
            </div>
            {active === index && <div className="faq-answer">{faqItem.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
