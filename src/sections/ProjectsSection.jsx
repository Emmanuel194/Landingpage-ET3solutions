import React from "react";
import "./ProjectsSection.css";

const projects = [
  {
    icon: "E1",
    title: "Sistema de Gestão Empresarial",
    description:
      "Desenvolvimento completo de ERP para empresa do setor logístico, incluindo controle de estoque, financeiro e vendas.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    icon: "E2",
    title: "App de Delivery",
    description:
      "Aplicativo móvel para rede de restaurantes com sistema de pedidos, pagamentos e entrega em tempo real.",
    tags: ["React Native", "Firebase", "Stripe"],
  },
  {
    icon: "E3",
    title: "Portal Educacional",
    description:
      "Plataforma de ensino online com videoaulas, exercícios interativos e sistema de avaliação automatizada.",
    tags: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    icon: "E4",
    title: "Automação Industrial",
    description:
      "Sistema de monitoramento e controle de produção industrial com dashboards em tempo real e alertas automáticos.",
    tags: ["Python", "IoT", "InfluxDB"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title fade-in">Projetos Realizados</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card fade-in" key={index}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
