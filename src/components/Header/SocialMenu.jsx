const SocialMenu = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/jssHerrera"
        title="github"
        className="header__social header__social1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-github"></i>
      </a>
      <a
        href="https://pe.linkedin.com/in/denis-herrera-espiritu"
        title="linkedin"
        className="header__social header__social2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-linkedin-square"></i>
      </a>
      <a
        href="https://codepen.io/jssHerrera"
        title="codepen"
        className="header__social header__social3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-codepen"></i>
      </a>
    </div>
  );
};

export default SocialMenu;
