// import { useState } from 'react'
import Title from '../Title/Title'
// import FilterWork from './FilterWork'
import './Work.css'
import CardWork from './CardWork'
import data from './data'

const Work = () => {
  // const [cards, setCarts] = useState(data)
  // const [active, setActive] = useState('All')

  // const handleClick = (item) => {
  //   setActive(item)

  //   if (item === 'All') {
  //     setCarts(data)
  //     return
  //   }
  //   const filtro = data.filter((elem) => {
  //     return elem.tecnologi === item
  //   })

  //   setCarts(filtro)
  // }

  return (
    <section className='proyectos container app__flex'>
      <Title first='Mis' second='Proyectos' />
      <p className='proyecto__texto'> Aquí hay algunos proyectos que he realizado </p>
      {/* <FilterWork handleClick={handleClick} active={active} /> */}
      <div className='proyecto__container'>
        {data.map((project) => (
          <CardWork key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Work
