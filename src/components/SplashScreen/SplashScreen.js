import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Bg from "../../assets/images/bg.png";
import MeEmoji from "../../assets/images/Image.png";

const SplashScreen = () => {
  return (
    <SplashScreenContainer>
      <Logo src={MeEmoji} alt="Logo" />
    </SplashScreenContainer>
  );
};

const circleCollapse = keyframes`
  0% {
    clip-path: circle(150% at 50% 50%);
  }
  100% {
    clip-path: circle(0% at 50% 50%);
  }
`;

const SplashScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Bg});
  animation: ${circleCollapse} 2s ease-in-out forwards;
  z-index: 9999;
`;
const Logo = styled.img`
  width: auto;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 20rem;
  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0px 0px 25px 10px #aff3e4;
  box-shadow: 0px 0px 25px 10px #0008;
`;

export default SplashScreen;
