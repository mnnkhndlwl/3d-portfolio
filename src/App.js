import styled from "styled-components";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Github from "./components/Github";
import Particle from "./components/utils/particle";


// const Container = styled.div`
//   scroll-snap-type: y mandatory;
//   scroll-behavior: smooth;
//   scrollbar-width: none;
//   color: white;
//   background-color: #130f40;
//   background-image: linear-gradient(315deg, #130f40 0%, #000000 74%);
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x:hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const App = () => {
  return <>
   <Container>
   <Hero />
        <Github />
        <Tech />
    <Projects />
    <Contact />
    <Footer />
    <Particle />
  </Container>
  </>
};

export default App;

