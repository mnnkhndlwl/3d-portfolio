import { technologies } from "./constants/constants";
import StarWrapper from "./utils/SectionWrapper";
import styled from "styled-components";

const Section = styled.div`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  background-color: #130f40;
  background-image: linear-gradient(315deg, #130f40 0%, #000000 74%);
  @media only screen and (max-width: 768px) {
    scroll-snap-align: start;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: start;
  width: 1400px;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Tech = () => {
  return (
    <Section>
      <Container>
        <div class="container py-10 px-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-4xl font-bold title-font mb-4 text-white">
              Technologies
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              I possess extensive knowledge and expertise in a wide range of
              cutting-edge technologies, ranging from full-stack development to
              cloud computing and DevOps methodologies.
            </p>
          </div>
          {/* <div class="flex flex-wrap m-3"> */}
          <div class="grid grid-cols-2 gap-10 mt-8 xl:mt-16 md:grid-cols-1 xl:grid-cols-5 xl:gap-10">
            {technologies.map((tech) => {
              return (
                <div class="p-2 lg:w-1/4 md:w-1/4">
                  <div class="h-full flex flex-col items-center">
                    <img
                      alt="team"
                      class="flex rounded-lg w-full h-20 object-contain mb-4"
                      src={tech.icon}
                    />
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-white text-center">
                        {tech.name}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StarWrapper(Tech, "tech");
