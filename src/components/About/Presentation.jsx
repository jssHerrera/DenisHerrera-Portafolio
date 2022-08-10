const Presentation = () => {
  return (
    <div className="about__content">
      <p className="about__text">
        Hola, mi nombre es Denis Herrera, soy un desarrollador web apasionado
        del frontend. Busco una oportunidad laboral seria y de largo recorrido
        para poder crecer juntos, con un equipo que me permita seguir
        aprendiendo hasta poder ser yo el que ayude a otros.
      </p>
      <a
        href="/documents/cv.pdf"
        download
        className="btn btn-primary"
        title="Dowload CV"
        rel="noopener noreferrer"
      >
        Dowload CV
      </a>
    </div>
  );
};

export default Presentation;
