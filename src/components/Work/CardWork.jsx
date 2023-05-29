import React from 'react'

const CardWork = ({ project }) => {
  const { images, title, desc, links } = project
  return (
    <div className='project__card'>
      <div className='project__card-img'>
        <img src={images} alt={title} loading='lazy' />
        {/* <p className='project__content-tecnologi'>{tecnologi}</p> */}
      </div>
      <div className='project__content'>
        <h2 className='project__content-title'>{title}</h2>

        <p className='project__content-dec'>{desc}</p>
        <div className='project__content-link'>
          <a
            href={links?.github}
            title='live github'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-github' />
          </a>
          <a
            href={links?.web}
            target='_blank'
            title='live demo'
            rel='noopener noreferrer'
          >
            <i className='bx bx-show' />
          </a>

        </div>
      </div>
    </div>
  )
}

export default CardWork
