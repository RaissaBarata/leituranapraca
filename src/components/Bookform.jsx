import React, { useState } from "react";

function BookForm() {
  const [form, setForm] = useState({ name: "", email: "", book: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Obrigado, ${form.name}! Sua doação do livro "${form.book}" foi registrada.`
    );
    setForm({ name: "", email: "", book: "" });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Doar um Livro</h2>
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Seu email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="book"
        placeholder="Livro que deseja doar"
        value={form.book}
        onChange={handleChange}
        required
      />
      <button type="submit">Doar</button>
    </form>
  );
}

export default BookForm;
