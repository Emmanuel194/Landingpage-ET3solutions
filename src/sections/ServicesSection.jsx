import React from "react";
import "./ServicesSection.css";

const services = [
  {
    icon: "💻",
    title: "Desenvolvimento Web",
    description:
      "Sites modernos, responsivos e otimizados para conversão. Utilizamos as mais recentes tecnologias para criar experiências digitais únicas.",
  },
  {
    icon: "📱",
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e híbridos para iOS e Android. Soluções mobile que conectam sua empresa aos clientes de forma eficiente.",
  },
  {
    icon: "⚙️",
    title: "Sistemas Personalizados",
    description:
      "Desenvolvimento de sistemas sob medida para atender as necessidades específicas do seu negócio com máxima eficiência.",
  },
  {
    icon: "🤖",
    title: "Automações",
    description:
      "Automatize processos repetitivos e ganhe produtividade. Integrações inteligentes que otimizam sua operação.",
  },
  {
    icon: "🌐",
    title: "Hospedagem & Cloud",
    description:
      "Soluções de hospedagem confiáveis e escaláveis. Mantenha seus projetos no ar com alta performance e segurança.",
  },
  {
    icon: "📈",
    title: "Consultoria Tech",
    description:
      "Orientação estratégica para transformação digital. Ajudamos você a escolher as melhores tecnologias para seu negócio.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title fade-in">Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card fade-in" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
