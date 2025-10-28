import React from "react";
import "./HeroSection.css";
import Logo from "../../assets/Logo.jpg";
import HeroImage from "../../assets/HeroImage.jpg";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-image-container">
          <img src={HeroImage} alt="Imagem Hero" className="hero-image" />
        </div>{" "}
      </div>

      <div className="hero-right">
        <div className="hero-content">
          <h1 className="hero-title">
            Doe livros, <br />
            compartilhe conhecimento.
          </h1>
          <p className="hero-text">
            Junte-se a nós e ajude a transformar vidas por meio da leitura.
            <br />
            Cada doação é uma nova história sendo escrita.
          </p>
          <div className="hero-buttons">
            <button className="hero-button primary">Fazer doação</button>
            <button className="hero-button outline">Assista vídeo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
