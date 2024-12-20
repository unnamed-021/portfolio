import styled, { keyframes } from "styled-components";

const scaleIn = keyframes`
  from {
    scale:0;
  }
  to {
    scale:1;
  }
`;

const scaleOut = keyframes`
  from {
    scale:1;
  }
  to {
    scale:0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;

  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;

  }
  to {
    opacity: 0;

  }
`;

export const ModalBackground = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

export const ModalContainer = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentFade = styled.div`
  position: relative;
  border-radius: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${(props) => (props.$open ? scaleIn : scaleOut)} 0.3s ease-in-out;
`;
