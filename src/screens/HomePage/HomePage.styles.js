import { css, keyframes, styled } from "styled-components";
import Bg from "../../assets/images/bg.png";

const jumpFadeIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-10%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: .5;
  }
`;

const jumpFadeOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-10%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
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
export const Project = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  gap: 2rem;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  background-color: #181819;
  background-image: url(${Bg});
  background-size: stretch;
  background-position: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  padding: 1rem 2.4rem 10rem 2.4rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10rem;
  max-width: 144rem;
  height: 100%;
  align-items: center;

  animation: ${(props) => (props.$show ? fadeIn : fadeOut)} 1s ease-in-out;
  @media (max-width: 800px) {
    gap: 6rem;
  }
`;

export const Shape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  overflow: hidden;
  position: relative;
`;

export const Memoji = styled.img`
  position: absolute;
  top: -91px;
  width: 20rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const TitleGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Glow = styled.img`
  position: absolute;
  z-index: 0;
  opacity: 0.75;
  pointer-events: none;

  @media (max-width: 800px) {
    scale: 0.8;
  }
`;
export const Relative = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* overflow: hidden; */
`;

export const Title = styled.div`
  font-size: 6rem;
  font-family: "Poppins-Bold";
  user-select: none;

  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  color: transparent;
  margin-top: ${(props) => (props.$margin ? "-3rem" : "0rem")};
  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

export const Description = styled.h3`
  font-size: 1.6rem;
  text-shadow: 0px 0px 5px black;
  z-index: 2;
  font-family: "Poppins-Medium";
  color: white;
  max-width: ${(props) => (props.$big ? "75rem" : "55rem")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;
export const TitleWhite = styled.h3`
  user-select: none;
  font-size: 6rem;
  position: relative;
  font-family: "Poppins-Bold";
  color: white;
  margin-top: ${(props) => (props.$margin ? "-3rem" : "0rem")};
  @media (max-width: 550px) {
    font-size: 3rem;
    margin-top: ${(props) => (props.$margin ? "-2rem" : "0rem")};
  }
`;

export const Gif = styled.img`
  max-width: 75rem;
  user-select: none;
  align-self: center;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

export const ProgressContainer = styled.div`
  animation: ${(props) =>
    props.show
      ? css`
          ${fadeIn} 0.5s forwards
        `
      : css`
          ${fadeOut} 0.5s forwards
        `};

  position: fixed;
  left: 5rem;
  top: 50%;

  transform: translateY(-50%);
  width: 3px;
  height: 100%;
  z-index: 999;
  @media (max-width: 630px) {
    display: none;
  }
`;
export const Progress = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Line = styled.div`
  width: 100%;
  height: 4rem;

  background-color: ${({ active }) =>
    active ? "#aff3e4" : "rgba(255,255,255,.25)"};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
`;

export const Dot = styled.div`
  margin-left: -4.5px;
  width: 12px;
  height: 12px;
  background-color: ${({ active }) =>
    active ? "#aff3e4" : "rgba(255,255,255,.25)"};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
  border-radius: 50%;
`;
export const Image = styled.img`
  width: 30rem;
  height: 30rem;
`;
export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 25rem;
  max-width: 25rem;
  min-height: 25rem;
  max-height: 25rem;
  margin-right: 5rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0px 0px 10px 5px rgba(56, 224, 187, 1),
    inset 0px 0px 25px 10px #aff3e4, 0px 0px 25px 10px #0008;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const StyledImage = styled.img`
  display: none;
  align-items: center;
  justify-content: center;
  max-width: 35rem;
  max-height: 35rem;

  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0px 0px 25px 10px #aff3e4;
  box-shadow: 0px 0px 25px 10px #0008;
  @media (max-width: 950px) {
    display: flex;
    max-width: 25rem;
    margin-bottom: 5rem;
    max-height: 25rem;
  }
  @media (max-width: 550px) {
    max-width: 20rem;
    max-height: 20rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 420px) {
    max-width: 15rem;
    margin-bottom: 2rem;
    max-height: 15rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 30rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => (props.$big ? "75rem" : "55rem")};
  width: 100%;
  max-width: 75rem;
  margin-top: ${(props) => (props.$margin ? "15rem" : "0rem")};
  align-items: ${(props) => (props.$center ? "center" : "flex-start")};
`;
export const StyledTitleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  align-items: flex-start;
  width: ${(props) => (props.$big ? "75rem" : "55rem")};
  width: 100%;
  width: 91rem;
  margin-top: ${(props) => (props.$margin ? "15rem" : "0rem")};
  align-items: ${(props) => (props.$center ? "center" : "flex-start")};
  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
  width: 100%;
`;
export const Skills = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;

  gap: 5rem;
  margin: 2.5rem 0rem;
`;

export const SkillText = styled.span`
  font-size: 1.4rem;
  font-family: "Poppins-Medium";
  letter-spacing: -0.2px;
  color: white;
  text-align: center;
  user-select: none;
`;
export const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  /* cursor: pointer; */
  border-radius: 1rem;
  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const Icon = styled.a`
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  cursor: pointer;
  border-radius: 50%;
  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;
export const ClickContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.$show ? 1 : 0)};
`;
export const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  z-index: 2;
  gap: 1rem;
  &:hover {
    scale: ${(props) => (props.$offHover ? 1 : 1.025)};
  }
  transition: scale 0.3s ease-in-out;
  /* margin-left: ${(props) => (props.$small ? "-6rem" : "0rem")}; */
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 91rem;
  margin-top: 10rem;
  align-items: center;
  @media (max-width: 950px) {
    width: 75rem;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    align-items: center;
    margin-top: 5rem;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-left: ${(props) => (props.$small ? "-6rem" : "0rem")};
`;
export const BrushImg = styled.img`
  width: 5rem;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
export const StoreImg = styled.img`
  cursor: pointer;
  max-width: 20rem;
  user-select: none;
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: ${(props) => (props.$center ? "100%" : "75rem")};
  align-items: center;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  height: 100%;
  padding-top: ${(props) => (props.$padding ? "5rem" : "0rem")};
  @media (max-width: 1500px) {
    min-height: 100%;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 9rem;
  width: 9rem;
  transition: transform 1s ease-in-out;
  &:hover {
    text-shadow: 0px 0px 5px white;
    div {
      transform: rotateY(180deg);
    }
  }
`;
export const PhoneImg = styled.img`
  user-select: none;
  width: 26rem;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65));
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 22rem !important;
  }
  @media (max-width: 400px) {
    width: 20rem !important;
  }
`;
export const Wrapper = styled.div`
  width: 22rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    width: 52rem;
  }
`;
export const StyledPhoneImg = styled(PhoneImg)`
  user-select: none;
  width: 22rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65));
  transition: all 0.5s ease-in-out;
  margin-right: ${(props) => (props.$right ? "-10rem" : "0rem")};
  margin-left: ${(props) => (props.$left ? "-10rem" : "0rem")};
  transform: ${(props) => (props.$right ? "rotate(-12deg)" : "rotate(12deg)")};

  &:hover {
    transform: rotate(0deg) !important;
    width: 26rem !important;
    margin-right: ${(props) => (!props.$right ? "34rem !important" : "0rem")};
    margin-left: ${(props) => (!props.$left ? "34rem !important" : "0rem")};
  }

  @media (max-width: 800px) {
    &:hover {
      transform: rotate(0deg) !important;
      width: 22rem !important;
      margin-right: ${(props) => (!props.$right ? "28rem !important" : "0rem")};
      margin-left: ${(props) => (!props.$left ? "28rem !important" : "0rem")};
    }
    width: 20rem !important;
    margin-right: ${(props) => (props.$right ? "-14rem" : "0rem")};
    margin-left: ${(props) => (props.$left ? "-14rem" : "0rem")};
    transform: ${(props) =>
      props.$right ? "rotate(-12deg)" : "rotate(12deg)"};
  }
  @media (max-width: 400px) {
    &:hover {
      transform: rotate(0deg) !important;
      width: 20rem !important;
      margin-right: ${(props) => (!props.$right ? "26rem !important" : "0rem")};
      margin-left: ${(props) => (!props.$left ? "26rem !important" : "0rem")};
    }
    width: 18rem !important;
    margin-right: ${(props) => (props.$right ? "-12rem" : "0rem")};
    margin-left: ${(props) => (props.$left ? "-12rem" : "0rem")};
    transform: ${(props) =>
      props.$right ? "rotate(-12deg)" : "rotate(12deg)"};
  }
`;
export const WebImg = styled.img`
  user-select: none;
  width: 54rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65));
  transition: all 0.3s ease-in-out;

  @media (max-width: 800px) {
    width: 34rem !important;
  }
`;

export const StyledWebImg = styled(WebImg)`
  user-select: none;
  width: 34rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65));
  transition: all 0.5s ease-in-out;
  margin-right: ${(props) => (props.$right ? "-22rem" : "0rem")};
  margin-left: ${(props) => (props.$left ? "-22rem" : "0rem")};
  transform: ${(props) => (props.$right ? "rotate(-12deg)" : "rotate(12deg)")};

  &:hover {
    transform: rotate(0deg) !important;
    width: 54rem !important;
    margin-right: ${(props) => (!props.$right ? "46rem !important" : "0rem")};
    margin-left: ${(props) => (!props.$left ? "46rem !important" : "0rem")};
  }
  @media (max-width: 800px) {
    &:hover {
      transform: rotate(0deg) !important;
      width: 34rem !important;
      margin-right: ${(props) => (!props.$right ? "40rem !important" : "0rem")};
      margin-left: ${(props) => (!props.$left ? "40rem !important" : "0rem")};
    }
    width: 24rem !important;
    margin-right: ${(props) => (props.$right ? "-18rem" : "0rem")};
    margin-left: ${(props) => (props.$left ? "-18rem" : "0rem")};
    transform: ${(props) =>
      props.$right ? "rotate(-12deg)" : "rotate(12deg)"};
  }

  @media (max-width: 480px) {
    transform: rotate(0deg);
    margin-left: 0rem !important;
    margin-right: 0rem !important;
    margin-top: ${(props) => (!props.$right ? "-5rem" : "0rem")};
    margin-bottom: ${(props) => (!props.$left ? "-5rem" : "0rem")};
  }
`;

export const PhonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 651px;
  z-index: 9;
  @media (max-width: 800px) {
    margin: 5rem 0rem;
    min-height: 100%;
  }
`;
export const WebContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 9;

  margin: 5rem 0rem;
  min-height: 353px;

  @media (max-width: 800px) {
    min-height: 100%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ProjectTitle = styled.span`
  font-family: "Poppins-SemiBold";
  font-size: 4rem;
  letter-spacing: -0.2px;
  color: white;

  user-select: none;
  text-shadow: 0px 0px 5px black;
  text-align: center;
  cursor: ${(props) => (props.$offHover ? "default" : "pointer")};

  &:hover {
    background: ${(props) =>
      props.$offHover
        ? "white"
        : "linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: unset;
  }
  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  margin-top: 10rem;
  width: 100%;
  align-items: center;
`;

export const GoToTop = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 15;
  align-items: center;
  justify-content: center;
  background-color: rgba(56, 224, 187, 1);
  position: fixed;
  bottom: 40px;
  cursor: pointer;
  right: 40px;
  border: 1.5px solid #fff;
  transition: all 0.3s ease-in-out;
  opacity: 0.5;
  display: flex;
  animation: ${({ show }) => (show ? jumpFadeIn : jumpFadeOut)} 0.5s forwards;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    opacity: 1 !important;
  }
`;
