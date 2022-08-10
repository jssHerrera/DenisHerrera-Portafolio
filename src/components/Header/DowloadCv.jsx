const DowloadedCv = () => {
  return (
    <div className="header__cv">
      <a
        href="/documents/cv.pdf"
        title="dowload CV"
        download
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dowload CV
      </a>
      <a
        href="#contact"
        title="contactame"
        className="btn btn-primary"
        rel="noopener noreferrer"
      >
        Contactame
      </a>
    </div>
  );
};

export default DowloadedCv;
