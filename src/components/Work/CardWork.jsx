import React from "react";

const CardWork = ({ project }) => {
  const { images, title, tecnologi, desc, links } = project;
  return (
    <div className="project__card app__flex">
      <div className="project__images">
        <img src={images} alt={title} loading="lazy"/>
        <div className="project__card-hover app__flex">
          <a href={links.web} title="live demo" target="_blank" rel="noopener noreferrer">
            <div className="project__card-show app__flex">
              <i className="bx bx-show"></i>
            </div>
          </a>
          <a
            href="https://github.com/jssHerrera"
            title="live github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project__card-show app__flex">
              <i className="bx bxl-github"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="project__content app__flex">
        <h2 className="project__content-title">{title}</h2>
        <p className="project__content-dec p__text">{desc}</p>
        <div className="project__content-tag app__flex">
          <p className="p__text">{tecnologi}</p>
        </div>
        <div className="project__content-link">
          <a href="#" target="_blank" title="live demo" rel="noopener noreferrer">
            <i className="bx bx-show"></i>
          </a>
          <a
            href="https://github.com/jssHerrera"
            title="live github"
            target="_blank"
            // className="header__social header__social1"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
