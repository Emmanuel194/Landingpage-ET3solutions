import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

const stats = [
  { label: "Projetos Entregues", value: 150, suffix: "+" },
  { label: "Satisfação do Cliente", value: 95, suffix: "%" },
  { label: "Suporte Técnico", value: 24, suffix: "/7" },
  { label: "Anos de Experiência", value: 5, suffix: "+" },
];

const AboutSection = () => {
  const sectionRef = useRef();
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countersRef.current.forEach((counterEl, index) => {
            let start = 0;
            const end = stats[index].value;
            const increment = Math.ceil(end / 50);
            const suffix = stats[index].suffix;
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              counterEl.innerText = `${start}${suffix}`;
            }, 20);
          });
          observer.disconnect();
        }
      });
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>Sobre a ET3 Solutions</h2>
            <p>
              Somos uma empresa especializada em desenvolvimento de soluções
              tecnológicas inovadoras. Nossa missão é transformar ideias em
              realidade digital, criando produtos que fazem a diferença no
              mercado.
            </p>
            <p>
              Com foco em qualidade, inovação e resultados, desenvolvemos desde
              sites institucionais até sistemas complexos, sempre utilizando as
              melhores práticas e tecnologias mais atuais do mercado.
            </p>
          </div>
          <div className="stats fade-in">
            {stats.map((stat, index) => (
              <div className="stat" key={index}>
                <span
                  className="stat-number"
                  ref={(el) => (countersRef.current[index] = el)}
                >
                  0{stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
