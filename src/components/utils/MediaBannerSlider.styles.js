import styled from "styled-components";
import { ReactComponent as Chevron } from "../../assets/icons/chevron.svg";
import { ReactComponent as Open } from "../../assets/icons/open.svg";

export const MediaSliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  max-width: 1280px;
  overflow: hidden;
  height: fit-content;
  user-select: none;
`;

export const MediaSliderContainer = styled.div`
  padding: 0px 40px;
  position: relative;
  display: none;
  justify-content: center;
  margin-top: 6rem;
  user-select: none;
  z-index: 2;
  cursor: grab; /* Ruka za grab */

  &:active {
    cursor: grabbing; /* Kada klikne */
  }

  padding: 0rem;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Image = styled.img`
  user-select: none;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  width: 100%;
  height: auto;
`;

export const OpenIcon = styled(Open)`
  width: 2rem;
  height: auto;
  transition: all 0.3s ease-in-out;
  path {
    fill: #fff;
  }
  &:hover {
    path {
      fill: #aff3e4;
    }
  }
`;

export const LeftIcon = styled(Chevron)`
  width: 2rem;
  height: auto;
  transform: scale(-1);
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.25));
  path {
    fill: #aff3e4;
  }
`;

export const RightIcon = styled(Chevron)`
  width: 2rem;
  height: auto;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.25));
  path {
    fill: #aff3e4;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  width: 3.2rem;
  height: 3.2rem;
  outline: 1px solid #aff3e415;
  border-radius: ${(props) =>
    props.$right ? "0px 20px 20px 0px" : "20px 0px 0px 20px"};
  transition: all 0.3s ease-in-out;

  z-index: 10;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const OpenIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 3rem;
  height: 3rem;
  outline: 1px solid #aff3e415;
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  position: absolute;
  z-index: 501;
  align-items: center;
  bottom: 2.5rem;
  right: 7rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15), 0px 2.5px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 560px) {
    right: 6rem;
    display: none;
  }
  @media (max-width: 450px) {
    right: 5rem;
    bottom: 2rem;
  }
  @media (max-width: 330px) {
    right: 4rem;
    bottom: 1.5rem;
  }
`;

export const Line = styled.span`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15), 0px 2.5px 5px rgba(0, 0, 0, 0.2);
  width: 4.8rem;
  height: ${(props) => (props.$active ? "0.3rem" : "0.1rem")};
  background: ${(props) => (props.$active ? "#aff3e4" : "#aff3e450")};

  position: relative;
`;

export const LinesContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  bottom: -1rem;
  position: absolute;
  align-items: center;
  height: 0.3rem;
  gap: 0.5rem;
  z-index: 500;
`;

export const FillLine = styled.div`
  height: 0.3rem;
  background: #aff3e4;
  position: absolute;
  top: -0.1rem;
  z-index: 20;
  left: 0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15), 0px 2.5px 5px rgba(0, 0, 0, 0.2);
`;
