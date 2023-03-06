import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <div className='relative z-0 bg-primary'>
      <Experience />
        <Tech />
        <Projects />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
