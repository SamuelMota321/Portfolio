import { Header } from './Components/Header/index'
import { Banner } from './Components/Banner/index'
import { AboutMe } from './Components/AboutMe/index'
import { Techs } from './Components/Techs/index'
import { Projects } from './Components/Projects'
import { Footer } from './Components/Footer'
import './styles/index.scss'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Techs />
      <Projects />
      <Footer />
    </>
  )
}

export default App
