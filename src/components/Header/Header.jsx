import React from "react";
import { FiMenu, FiX, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./Header.css";

function Header({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">Leitura na Praça</div>

      <nav className="nav-desktop">
        <a href="#">Home</a>
        <a href="#">Quem Somos</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </nav>

      <div className="socials">
        <a href="#" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href="#" aria-label="Facebook">
          <FiFacebook />
        </a>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Ícone para abrir o menu mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </header>
  );
}

export default Header;
