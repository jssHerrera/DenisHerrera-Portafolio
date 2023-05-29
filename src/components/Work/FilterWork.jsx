const FilterWork = ({ handleClick, active }) => {
  return (
    <div className='app__work'>
      {['All', 'Web design', 'Web App', 'React JS', 'Angular JS'].map(
        (item, index) => (
          <div
            key={index}
            className={`app__work-item app__flex ${
              active === item ? 'active' : ''
            } `}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        )
      )}
    </div>
  )
}

export default FilterWork
