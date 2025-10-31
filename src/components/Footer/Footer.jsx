import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h3 className="footer__title">Leitura na Praça</h3>
          <p className="footer__text">
            Incentivando a leitura, a troca de saberes e o acesso à cultura — de
            forma livre, inclusiva e colaborativa.
          </p>
        </div>

        <div className="footer__social">
          <h4 className="footer__subtitle">Conecte-se</h4>
          <div className="footer__icons">
            <a
              href="https://instagram.com"
              className="footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              className="footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="mailto:contato@leituranapraca.org"
              className="footer__icon"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4 className="footer__subtitle">Navegação</h4>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#events">Agenda</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__credits">
        <p>
          Desenvolvido por <span className="footer__name">Raíssa Barata</span>
        </p>
        <p className="footer__year">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
