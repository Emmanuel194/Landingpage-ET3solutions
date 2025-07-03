// src/sections/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // ou CSS Modules
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

const HeroSection = () => {
  useFadeInOnScroll(); // 👈 ativa a animação

  return (
    <section className="hero fade-in" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Desenvolvendo o Futuro Digital</h1>
          <p>
            Transformamos ideias em soluções tecnológicas inovadoras...
          </p>
          <a href="#contact" className="cta-button">Começar Projeto</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;