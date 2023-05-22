import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  color: white;
  padding: 2px;
  background-color: black;
  @media only screen and (max-width: 768px) {
    margin-top: 450px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  z-index: 40;
`;

function Footer() {
  return (
    <Section>
      <Container>
        <footer class=" bg-black rounded-lg shadow m-4">
          <div class=" w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
            <span class="">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                mnnkhndlwl
              </a>
            </span>
            <ul class="z-50 flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#tech" class="mr-4 hover:underline md:mr-6">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" class="mr-4 hover:underline md:mr-6">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </Section>
  );
}

export default Footer;
