import styled, { keyframes } from "styled-components";

const scaleIn = keyframes`
  from {
    width: auto;
    height: 0%;
  }
  to {
    width: auto;
    height: 80%;
  }
`;

const scaleOut = keyframes`
  from {
    width: auto;
    height: 80%;
  }
  to {
    width: auto;
    height: 0%;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: flex-end;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

export const ModalContainer = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  transition: right 0.3s ease-in-out;
  padding: ${(props) => (props.$center ? "0px" : "24px")};
  display: flex;

  justify-content: ${(props) => (props.$center ? "center" : "flex-end")};
  align-items: center;
`;

export const ModalContentFade = styled.div`
  position: relative;

  border-radius: 1rem;
  display: flex;
  width: auto;
  height: 80%;

  flex-direction: column;
  justify-content: space-between;
  animation: ${(props) => (props.$open ? scaleIn : scaleOut)} 0.3s ease-in-out;

  flex-shrink: 0;
`;
