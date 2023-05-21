import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { projects } from "./constants/constants";
import StarWrapper from "./utils/SectionWrapper";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  background-color: #130f40;
  background-image: linear-gradient(315deg, #130f40 0%, #000000 74%);
  @media only screen and (max-width: 768px) {
    height: 100vh;
    width:80vw;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 80vw;
  }
`;

const Carousal = styled.div`
  width: 85vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only Screen and (max-width: 40em) {
    width: 90vw;
    height: 80vh;
    margin-bottom: 20px;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: white;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: white;
    margin-top: 10px;
    font-size: 1rem;
    @media only Screen and (max-width: 40em) {
      
    }
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

function Projects() {
  const settings = {
    pauseOnHover: true,
    // className: "center",
    dots: true,
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 4000,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Section>
      <Container>
        <div className="container mb-5 px-6 mx-auto">
          <section className="mb-5 text-white text-center">
            <h2 className="text-5xl sm:text-xl md:text-5xl font-bold mb-12 italic">
              My {" "}
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-fuchsia-600">
                Projects
              </span>
            </h2>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 lg:gap-xl-10"> */}
            <Carousal>
              <Slider {...settings}>
                {projects.map((project) => {
                  return (
                    <>
                      <div class="mx-5 mt-20 items-center bg-black border border-gray-200 rounded-lg shadow ">
                        
                          <img
                            class="rounded-t-lg object-cover h-64"
                            src={project.image}
                            alt=""
                          />
                      
                        <div class="p-5">
                          
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                              {project.name}
                            </h5>
                          
                          <p class="mb-3 text-justify font-normal text-white">
                            {project.description}
                          </p>
                          <a
                            href={project.source_code_link}
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                          >
                            Project Link
                            <svg
                              aria-hidden="true"
                              class="w-4 h-4 ml-2 -mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </Carousal>
          </section>
        </div>
      </Container>
    </Section>
  );
}

export default StarWrapper(Projects,"projects");
