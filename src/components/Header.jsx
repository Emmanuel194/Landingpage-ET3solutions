import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo-wrapper">
  <img src="/logo.svg" alt="Logo ET3" className="logo-image" />
</div>

        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
