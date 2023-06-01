import { BrowserRouter } from "react-router-dom"
import About from "./components/About"
import Contact from "./Components/Contact"
import Hero from './Components/Hero'
import Feedbacks from './Components/Feedbacks'
import Loader from './Components/Loader'
import Tech from './Components/Tech'
import Works from './Components/Works'
import Experience from './Components/Experience'
import Navbar from './Components/Navbar'
import { StarsCanvas } from "./components/Canvas"




function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary pt-20 pb-[-10]">
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
       </div>
       <About />
       <Experience/>
       <Tech />
       <Works/>
       <Feedbacks/>
       <div className="relative z-0">
        <Contact/>
        <StarsCanvas />
       </div>
      </div>
   </BrowserRouter>
  )
}
export default App
