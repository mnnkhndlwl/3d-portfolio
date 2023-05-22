import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 30px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-size: 24px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
font-size: 16px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background: #FD01FD;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./logo512.png" />
          <List>
          <a href="#">
            <ListItem>Home</ListItem>
          </a>
          <a href="#projects"> 
            <ListItem>Projects</ListItem>
          </a>
          <a href="#tech">
            <ListItem>Technologies</ListItem>
          </a>
          <a href="#contact">
            <ListItem>Contact</ListItem>
          </a>
          </List>
        </Links>
        <Icons>
        <a href="https://drive.google.com/file/d/1D1bqBkMNQFrxPFwt8BQjkT6fJVnZftyy/view?usp=sharing">
          <Button>Resume</Button>
        </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;