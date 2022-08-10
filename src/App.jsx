import About from "./components/About/About"
import Contac from "./components/Contact/Contac"
import Footer from "./components/Footer/Footer"
import HardSkills from "./components/HardSkills/HardSkills"
import Header from "./components/Header/Header"
import SoftSkills from "./components/SoftSkills/SoftSkills"
import Work from "./components/Work/Work"

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <About/>
      {/* <SoftSkills/> */}
      <Work/>
      <HardSkills/>
      <Contac/>
      <Footer/>
    </div>
  )
}

export default App
