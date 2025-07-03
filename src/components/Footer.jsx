import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ET3 Solutions</h3>
            <p>
              Desenvolvendo soluções tecnológicas inovadoras para impulsionar seu negócio no mundo digital.
            </p>
          </div>
          <div className="footer-section">
            <h3>Serviços</h3>
            <p><a href="#services">Desenvolvimento Web</a></p>
            <p><a href="#services">Aplicativos Mobile</a></p>
            <p><a href="#services">Sistemas Personalizados</a></p>
            <p><a href="#services">Automações</a></p>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p>📧 contato@et3solutions.com</p>
            <p>📱 (81) 99999-9999</p>
            <p>📍 Caruaru, PE - Brasil</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ET3 Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
