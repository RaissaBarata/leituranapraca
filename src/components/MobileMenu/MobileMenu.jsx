import React from "react";
import { FiX, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./MobileMenu.css";

export default function MobileMenu({ open, closeMenu }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={closeMenu}>
        <FiX />
      </button>

      <a href="#" onClick={closeMenu}>
        Home
      </a>
      <a href="#" onClick={closeMenu}>
        Quem Somos
      </a>
      <a href="#" onClick={closeMenu}>
        Projetos
      </a>
      <a href="#" onClick={closeMenu}>
        Contato
      </a>

      <div className="mobile-socials">
        <a href="#">
          <FiInstagram />
        </a>
        <a href="#">
          <FiFacebook />
        </a>
        <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
