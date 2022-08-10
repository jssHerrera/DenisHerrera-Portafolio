import './Title.css'

const Title = ({first, second}) => {
  return (
    <h2 className='title'>
      {first}
     <span className="title__span">{second}</span>
    </h2>
  )
}

export default Title
