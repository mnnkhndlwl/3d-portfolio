import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import ComputersCanvas from "./canvas/computers";
import "./hero.css";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
 background-color: #130f40;
background-image: linear-gradient(315deg, #130f40 0%, #000000 74%);

  @media only screen and (max-width: 768px) {
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    flex:1;
  }
`;

const Title = styled.p`
  font-size: 64px;
  color: #fd01fd;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h1`
  font-size: 20px;
`;

const Desc = styled.p`
  font-size: 16px;
  text-align: justify;
  color: white;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: justify;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
    flex: 0;
  }
`;

const Img = styled.iframe`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <Left>
            <WhatWeDo>
              <Subtitle>👋 Hi There ! I am </Subtitle>
            </WhatWeDo>
            <Title>Manan Khandelwal</Title>
            <Desc>
              I am a highly motivated Full Stack Developer and Computer Science
              Engineering student with a strong passion for software development
              and a keen interest in problem-solving. I possess a diverse skill
              set that encompasses various technologies and frameworks,
              including MERN (MongoDB, Express.js, React.js, Node.js), Flutter,
              Firebase, and SQL.
            </Desc>
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/dev4.07/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/mnnkhndlwl">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mnnkhndlwl/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </Left>
          <Right>
            <Img src="https://embed.lottiefiles.com/animation/99065"></Img>
            {/* <ComputersCanvas /> */}
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
