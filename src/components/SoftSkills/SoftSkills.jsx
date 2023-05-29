import SoftCard from './SoftCard'
import Title from '../Title/Title'
import data from './Data'
import './SoftSkills.css'

const SoftSkills = () => {
  return (
    <section className='softskill'>
      <Title first='Soft' second='Skills' />
      <div className='skill__box container'>
        <div className='skills__container'>
          {data.map((elem) => (
            <SoftCard key={elem.id} elem={elem} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
