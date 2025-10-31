import React from "react";
import "./EventsSection.css";

export default function EventsSection() {
  const events = [
    {
      date: "10 NOV",
      title: "Leitura na Praça - Edição Primavera",
      description:
        "Um encontro para celebrar a leitura ao ar livre, com troca de livros e microfone aberto para leitura de textos autorais.",
      location: "Praça Central - 15h",
    },
    {
      date: "25 NOV",
      title: "Oficina Criativa de Cartas",
      description:
        "Atividade que propõe a escrita afetiva como forma de expressão e conexão entre participantes.",
      location: "Biblioteca Municipal - 14h",
    },
    {
      date: "12 DEZ",
      title: "Roda de Conversa: Juventude e Cultura",
      description:
        "Encontro para discutir o papel da arte e da literatura na formação cultural dos jovens.",
      location: "Centro Cultural - 18h",
    },
  ];

  return (
    <section className="events">
      <div className="events__header">
        <span className="events__tag">Agenda</span>
        <h2 className="events__title">Próximos Eventos</h2>
        <p className="events__subtitle">
          Acompanhe as próximas ações e atividades abertas ao público.
        </p>
      </div>

      <div className="events__grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-card__date">{event.date}</div>
            <div className="event-card__info">
              <h3 className="event-card__title">{event.title}</h3>
              <p className="event-card__desc">{event.description}</p>
              <p className="event-card__location">{event.location}</p>
              <button className="event-card__btn">Saiba Mais</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
