import React from "react";
import { technologies } from "./constants/constants";
import SectionWrapper from "./utils/SectionWrapper";

const Tech = () => {
  return (
    <>
      <div className="relative w-full h-screen justify-center flex ">
        <h2 className="tracking-normal text-2xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
          Technologies
        </h2>
        <div className="absolute grid grid-flow-col h-screen grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-2">
          <div className="relative items-center justify-center h-screen" style={{ width: "25%" }}>
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_ba013t74.json"
              mode="bounce"
              background="rgba(0, 0, 0, 0)"
              speed="2"
              style={{ width: "600px", height: "600px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="justify-center items-center" style={{ width: "75%" }}>
          <div className="m:20"></div>
            <div className="absolute mt-20 flex flex-wrap space-x-5 space-y-10">
              {technologies.map((technology) => (
                <div
                  key={technology.name}
                  className="relative w-20 h-20 rounded-full bg-white justify-center items-center"
                >
                  <img className="absolute p:20" src={technology.icon}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
