import React from "react";

const SocialContac = () => {
  return (
    <div className="contact__option">
      {/* -------------------- */}
      <article className="contact__option-target">
        <a
          href="mailto:jsherr.6@gmail.com"
          title="gmail"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__option-icon"
        >
          <i className="bx bx-envelope"></i>
          <span>jsherr.6@gmail.com</span>
        </a>
      </article>
      {/* -------------------- */}
      <article className="contact__option-target">
        <a
          href="https://pe.linkedin.com/in/denis-herrera-espiritu"
          title="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__option-icon"
        >
          <i className="bx bxl-linkedin-square"></i>
          <span>Linkedin</span>
        </a>
      </article>
      {/* -------------------- */}
      <article className="contact__option-target">
        <a
          href="https://api.whatsapp.com/send?phone=925860616"
          title="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__option-icon"
        >
          <i className="bx bxl-whatsapp"></i>
          <span>+51925860616</span>
        </a>
      </article>
    </div>
  );
};

export default SocialContac;
