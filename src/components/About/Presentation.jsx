const Presentation = () => {
  return (
    <div className='about__content'>
      <p className='about__text'>
        Hola, mi nombre es Denis Herrera Espiritu y soy desarrollador Front-End junior apasionado por la creación de experiencias web. Actualmente, estoy enfocado en aprender Java Spring Boot, para poder crecer y desarrollar mis habilidades en esta tecnología.
      </p>
      <a
        href='/documents/cv.pdf'
        download
        className='btn btn-primary'
        title='Dowload CV'
        rel='noopener noreferrer'
      >
        Dowload CV
      </a>
    </div>
  )
}

export default Presentation
