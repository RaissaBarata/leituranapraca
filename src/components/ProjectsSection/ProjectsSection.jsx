import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectsSection.css";

import photo1 from "../../assets/photoSJ1.jpg";
import photo2 from "../../assets/photoSJ2.jpg";
import photo3 from "../../assets/photoSJ3.jpg";
import photo4 from "../../assets/photoSJ4.jpg";
import photo5 from "../../assets/photoSJ5.jpg";
import photo6 from "../../assets/photoSV1.jpg";
import photo7 from "../../assets/photoSV2.jpg";
import photo8 from "../../assets/photoSV3.jpg";
import photo9 from "../../assets/photoCA1.jpg";
import photo10 from "../../assets/photoCA2.jpg";
import photo11 from "../../assets/photoCA3.jpg";

export default function ProjectsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const projects = [
    {
      title: "Semana da Juventude",
      text: "Evento realizado em parceria com escolas e coletivos locais, promovendo rodas de leitura, oficinas e apresentações culturais.",
      photos: [photo1, photo2, photo3, photo4, photo5],
      className: "project-a",
    },
    {
      title: "1ª Feira de Livros São Vicente",
      text: "Atividade voltada à integração comunitária e incentivo à leitura.",
      photos: [photo6, photo7, photo8],
      className: "project-b",
    },
    {
      title: "1º Leitura na Concha Acústica",
      text: "Rodas de conversa e oficinas artísticas voltadas aos jovens da região.",
      photos: [photo9, photo10, photo11],
      className: "project-c",
    },
  ];

  return (
    <section className="projects">
      <div className="projects__header">
        <span className="projects__tag">Nossos projetos</span>
        <h2 className="projects__title">Projetos</h2>
        <p className="projects__subtitle">
          Acompanhe algumas das ações e eventos que já realizamos.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((proj, index) => (
          <div key={index} className={`project-card ${proj.className}`}>
            <div className="project-card__slider">
              <Slider {...settings}>
                {proj.photos.map((photo, i) => (
                  <div key={i} className="slide-item">
                    <img src={photo} alt={`${proj.title} ${i + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="project-card__info">
              <h3 className="project-card__title">{proj.title}</h3>
              <p className="project-card__text">{proj.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
