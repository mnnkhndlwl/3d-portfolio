import React, { useEffect, useState } from "react";
import { technologies } from "./constants/constants";
import SectionWrapper from "./utils/SectionWrapper";

const Tech = () => {
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
    <>
     <section className="  w-full h-screen mx-auto">
      <div className="relative w-full h-screen justify-center flex ">
        <h2 className="tracking-normal text-2xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
          Technologies
        </h2>

        <div className="absolute grid grid-flow-col h-screen grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-2">
          <div
            className="relative items-center justify-center h-screen"
            style={{ width: "25%" }}
          >
          {
            !isMobile ? 
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_ba013t74.json"
              mode="bounce"
              background="rgba(0, 0, 0, 0)"
              speed="2"
              style={{ width: "600px", height: "600px" }}
              loop
              autoplay
            ></lottie-player>
            :
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_ba013t74.json"
              mode="bounce"
              background="rgba(0, 0, 0, 0)"
              speed="2"
              style={{ width: "410px", height: "410px" }}
              loop
              autoplay
            ></lottie-player>
          }
            
          </div>
          <div
            className=" justify-center items-center"
            style={{ width: "55%" }}
          >
            <div className="m:50"></div>
            <div className="flex-1 absolute mt-20 ml-5 flex gap-5 flex-wrap space-x-5 space-y-10">
              {technologies.map((technology) => (
                <div className="mt-10 ">
                  <div
                    key={technology.name}
                    className="w-20 h-20 rounded-full bg-white"
                  >
                    <img src={technology.icon} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
