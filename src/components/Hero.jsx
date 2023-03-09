import React,{useState,useEffect} from "react";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/computers";
import '../index.css';
import { motion } from "framer-motion";

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className="absolute grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
        <div className="mt-20 flex items-center justify-center">
          <main className="max-w-screen-xl px-4 lg:px-16">
            <div className="text-left">
              <h2
                className={`text-4xl tracking-tight leading-10 font-extrabold ${styles.heroHeadText} text-white sm:text-5xl sm:leading-none md:text-6xl`}
              >
                Hi, I'm
                <br />
                <span className="text-violet-700 writer-text">Manan</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I am a Full stack Developer and a Problem-Solving enthusiast
                pursuing Computer Science Engineering. I have a passion for
                software development with diverse skillsets ranging from MERN,
                Flutter, Firebase, and SQL to a stronghold on data structures
                and algorithms.
              </p>
            </div>
          </main>
        </div>
        <div className="w-full lg:w-full md:h-screen flex justify-self-center ">
          <ComputersCanvas />
        </div>
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        {
          isMobile || 
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        }
        </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;
