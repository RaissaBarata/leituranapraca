import React from "react";
import "./AboutSection.css";
import AboutImage from "../../assets/AboutImage.jpg"; // sua imagem
import WashiTape from "../../assets/washitape.svg"; // sua fita adesiva

export default function AboutSection() {
  return (
    <section className="about">
      <div className="page-card">
        <span className="about-tag">SOBRE NÓS</span>
        <h2 className="about-title">Nossa História e Propósito</h2>

        <p className="about-text">
          O projeto Leitura na Praça surgiu, inicialmente, no Dia da Consciência
          Negra, em 20 de novembro de 2019, em uma feira de livros na cidade de
          Santos/SP. Ao entrar em contato com amigos professores, e comentar
          sobre a ideia de uma ação voluntária nas redes sociais, envolvendo
          doações de livros, o resultado foi positivo e imediato. A começar com
          o apoio de mais de 80 livros que estavam paradas em casa, tirando a
          oportunidades de leitura de muitos leitores.
        </p>
        <p className="about-text">
          O principal objetivo do Projeto Leitura na Praça sempre foi fazer os
          livros circularem por muitas mãos, tirando-os das estantes
          (abandonadas), oportunizando o acesso à leitura, principalmente a quem
          não tem condições de comprar livros. É um projeto totalmente gratuito
          e sem discriminação, com livros frutos de doações. Todas as ações
          contaram com a participação de voluntários, artistas, estudantes e
          escritores da região, incentivando a leitura e a escrita, difundindo
          literatura e educação.
        </p>

        <div className="about-image-container">
          <img src={AboutImage} alt="About us" className="about-image" />
        </div>

        {/* Fitas nos cantos */}
        <img src={WashiTape} alt="Tape" className="tape-top-left" />
        <img src={WashiTape} alt="Tape" className="tape-top-right" />
        <img src={WashiTape} alt="Tape" className="tape-bottom-left" />
        <img src={WashiTape} alt="Tape" className="tape-bottom-right" />
      </div>
    </section>
  );
}
