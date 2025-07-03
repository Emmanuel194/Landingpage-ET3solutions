import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <h2 className="fade-in">Pronto para Transformar sua Ideia?</h2>
        <p className="fade-in">
          Vamos conversar sobre seu projeto e descobrir como podemos ajudar sua empresa a crescer no mundo digital.
        </p>
        <div className="cta-buttons fade-in">
          <a href="mailto:contato@et3solutions.com" className="btn-primary">
            Fale Conosco
          </a>
          <a href="tel:+5581999999999" className="btn-secondary">
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
