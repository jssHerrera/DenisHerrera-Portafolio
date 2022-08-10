import React from "react";

const ContactForm = () => {
  return (
    <form  className="contact__form">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        autoComplete="off"
        required
        className="contact__form-item"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
        required
        className="contact__form-item"
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Mensage"
        required
        className="contact__form-item"
      ></textarea>
      <input type="submit" className="contact_from-btn btn--filled" value="Enviar" />
    </form>
  );
};

export default ContactForm;
