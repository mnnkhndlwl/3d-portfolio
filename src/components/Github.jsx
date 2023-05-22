import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 50vh;
  color: white;
  background-color: black;
  ${
    "" /* background-image: linear-gradient(315deg, #130f40 0%, #000000 74%); */
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 100px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    padding: 120px;
  }
`;

function Github() {
  return (
    <Section>
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="text-fuchsia-600">Code</strong>
          </h1>
          <GitHubCalendar
            username="mnnkhndlwl"
            blockSize={15}
            blockMargin={5}
            color="#fd01fd"
            fontSize={16}
          />
        </Row>
      </Container>
    </Section>
  );
}

export default Github;
