import React from "react";
import styled from "styled-components";
import background from "../assets/background copy.png";

export default function BackgroundImage() {
  return (
    <Container>
      <OverlayText>Finally you are here!</OverlayText>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100vh;
  background: url(${background}) no-repeat center center/cover;
  position: relative;
  display: flex;
  align-items: flex-start; /* Adjust this if needed */
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const OverlayText = styled.h1`
  font-family: "Press Start 2P", cursive;
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  white-space: normal;
  padding-top: 30px; /* Adjust this value */
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 2rem;
    padding-top: 150px;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    padding-top: 150px;
  }

  @media (max-width: 768px) {
    padding-top: 120px; /* Adjust this value for mobile */
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
