import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
    <Navbar />
    <Routes>
      <Route path='/'>
      <Route index element={<Hero />} />
      <Route path='projects' element={<Projects />} />
      <Route path='tech' element={<Tech />} />
      <Route path='Experiences' element={<Experience />} />
      <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    </div>
      {/* <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='bg-cover container h-full relative z-0'>
        <Projects />
        </div>
        <div className='h-full mt-10 relative z-0'>
        <Tech />
        </div>
        <div className='h-full relative z-0'>
        <Experience />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;