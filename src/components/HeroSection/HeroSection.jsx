import React from "react";
import "./HeroSection.css";
import HeroImage from "../../assets/HeroImage.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Lado esquerdo: imagem */}
      <div className="hero-left">
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={HeroImage} alt="Imagem Hero" className="hero-image" />
        </motion.div>
      </div>

      {/* Lado direito: texto e botões */}
      <div className="hero-right">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
