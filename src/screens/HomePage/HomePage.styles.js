import { css, keyframes, styled } from "styled-components";
import Bg from "../../assets/images/bg.png";
import { ReactComponent as Chevron } from "../../assets/icons/chevron.svg";
import { ReactComponent as Images } from "../../assets/icons/images.svg";
import { ReactComponent as Info } from "../../assets/icons/info-icon.svg";

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
    opacity: 1;
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

const iconOut = keyframes`
  from {
    opacity: 1;
    transform: rotate(0deg);
  }
  to {
    opacity: 0;
    transform: rotate(-180deg);
  }
`;

const iconIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(180deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

const bounce = keyframes`
  0% {
  }
  35% {
    scale: 1;
    filter: drop-shadow(0px 0px 5px transparent);
  }
  50% {
    scale: 1.15;
    filter: drop-shadow(0px 0px 5px #aff3e4);
  }
  65% {
    scale: 1;
    filter: drop-shadow(0px 0px 5px transparent);
  }
  100% {
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

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 3.2rem;
  height: 3.2rem;
  outline: 1px solid #8a4b5e15;
  border-radius: ${(props) =>
    props.$right ? "0px 20px 20px 0px" : "20px 0px 0px 20px"};
  transition: all 0.3s ease-in-out;
  opacity: 0.5;
  z-index: 10;
  &:hover {
    background-color: rgba(255, 255, 255, 0.65);
    opacity: 1;
  }
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15), 0px 2.5px 5px rgba(0, 0, 0, 0.2);
`;

export const ChevronDown = styled(Chevron)`
  transform: ${(props) => (props.$up ? "rotate(90deg)" : "rotate(-90deg)")};
  width: 2rem;
  height: auto;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  path {
    fill: #aff3e4;
  }
`;

export const ImagesIcon = styled(Images)`
  cursor: pointer;
  width: 2.6rem;
  height: auto;
  transition: all 0.2s ease-in-out;
  animation: ${(props) => (props.$active ? iconIn : iconOut)} 0.2s ease-in-out;
`;

export const InfoIcon = styled(Info)`
  cursor: pointer;
  width: 2.6rem;
  height: auto;
  transition: all 0.2s ease-in-out;
  animation: ${(props) => (!props.$active ? iconIn : iconOut)} 0.2s ease-in-out,
    ${bounce} 5s ease-in-out infinite;

  path {
    fill: #aff3e4;
  }
`;
export const ChevronLeft = styled(Chevron)`
  transform: scale(-1);
  width: 2rem;
  height: auto;
  path {
    fill: #aff3e4;
  }
`;
export const ChevronRight = styled(Chevron)`
  width: 2rem;
  height: auto;
  path {
    fill: #aff3e4;
  }
`;
export const RelativeIconContainer = styled.div`
  width: 100%;
`;
export const RelativeIcon = styled.div`
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
  z-index: 1;
`;

export const Project = styled.div`
  /* align-items: center; */
  /* justify-content: center; */
  display: flex;
  width: 100%;
  gap: 2rem;
  width: 91rem;

  flex-direction: column;
  animation: ${(props) => (props.$show ? fadeIn : fadeIn)} 0.6s ease-in-out;
  height: 59rem;
  margin-bottom: 10rem;
  @media (max-width: 950px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    height: 100%;
  }
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
  animation: ${(props) => (props.$show ? fadeIn : fadeOut)} 0.3s ease-in-out;

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
  user-select: none;
  opacity: 0.75;
  pointer-events: none;

  @media (max-width: 800px) {
    scale: 0.8;
    margin-bottom: -5rem;
    /* display: none; */
  }
  @media (max-width: 400px) {
    scale: 0.5;
    margin-bottom: -5rem;
    /* display: none; */
  }
`;
export const Relative = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;
  /* overflow: hidden; */
`;

export const Title = styled.div`
  font-size: 6rem;
  font-family: "Poppins-Bold";
  user-select: none;
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

export const Link = styled.h3`
  font-size: 1.6rem;
  text-shadow: 0px 0px 5px black;
  margin-top: -1rem;
  user-select: none;
  font-family: "Poppins-Medium";
  color: #aff3e4;
  cursor: pointer;
  max-width: ${(props) => (props.$big ? "75rem" : "55rem")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  @media (max-width: 550px) {
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

export const Description = styled.h3`
  font-size: 1.6rem;
  text-shadow: 0px 0px 5px black;
  /* user-select: none; */
  font-family: "Poppins-Medium";
  color: white;
  max-width: ${(props) => (props.$big ? "75rem" : "55rem")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  @media (max-width: 550px) {
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

export const ProjectDescription = styled.h3`
  font-size: 1.6rem;
  text-shadow: 0px 0px 5px black;
  user-select: none;
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
    margin-top: ${(props) => (props.$margin ? "-1rem" : "0rem")};
  }
`;
export const StyledTitleWhite = styled.h3`
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
  width: 100%;

  animation: ${(props) =>
    props.$show
      ? css`
          ${fadeIn} 0.5s forwards
        `
      : css`
          ${fadeOut} 0.5s forwards
        `};
  margin: 2rem 0rem;
`;
export const Progress = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.div`
  width: 4rem;
  height: 0.4rem;
  background-color: ${({ $active }) =>
    $active ? "#aff3e4" : "rgba(255,255,255,.25)"};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
`;

export const Dot = styled.div`
  min-width: 12px;
  max-width: 12px;
  cursor: pointer;
  min-height: 12px;
  max-height: 12px;
  background-color: ${({ $active }) =>
    $active ? "#aff3e4" : "rgba(255,255,255,.25)"};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
  border-radius: 50%;
`;
export const Dots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: 0;
`;
export const Dot2 = styled.div`
  margin-left: -4.5px;
  width: 12px;
  height: 12px;
  background-color: ${(props) =>
    props.$active ? "#aff3e4" : "rgba(255,255,255,0.25)"};

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
  pointer-events: none;
  user-select: none;
  box-shadow: inset 0px 0px 10px 5px rgba(56, 224, 187, 1),
    inset 0px 0px 25px 10px #aff3e4, 0px 0px 25px 10px #0008;
  @media (max-width: 950px) {
    display: none;
  }
`;
export const StyledImageDiv = styled(ImageDiv)`
  display: none;

  @media (max-width: 950px) {
    display: flex;
    margin-right: 0;
  }
  @media (max-width: 550px) {
    min-width: 20rem;
    max-width: 20rem;
    min-height: 20rem;
    max-height: 20rem;
  }
  @media (max-width: 400px) {
    margin-top: -5rem;
  }
`;

export const StyledImage = styled(Image)`
  display: none;

  @media (max-width: 950px) {
    display: flex;
  }
  @media (max-width: 550px) {
    width: 25rem;
    height: 25rem;
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
  max-width: 91rem;
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
  @media (max-width: 450px) {
    gap: 3rem;
    justify-content: space-around;
  }
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
export const Animation = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;
export const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 1rem;

  flex-wrap: wrap;
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
  flex-wrap: wrap;
`;
export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const BrushImg = styled.img`
  user-select: none;
  width: 5rem;
  @media (max-width: 450px) {
    display: none;
  }
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
  max-width: ${(props) => (props.$center ? "100%" : "91rem")};
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

export const Wrapper = styled.div`
  width: 22rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    width: 52rem;
  }
`;

export const PhoneImg = styled.img`
  width: 26rem;
  user-select: none;
  z-index: 9;
  transition: transform 0.6s ease-in-out, width 0.6s ease-in-out;
  cursor: pointer;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65));
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 800px) {
    width: 20rem !important;
  }

  @media (max-width: 400px) {
    width: 18rem !important;
  }
`;

export const LeftPhoneImg = styled(PhoneImg)`
  z-index: ${(props) => (props.$hover ? 10 : 8)};
  width: ${(props) => (props.$hover ? "26rem" : "22rem")};
  transform: ${(props) =>
    props.$hover
      ? "translateX(-50%) rotate(0deg)"
      : "translateX(-100%) rotate(-12deg)"};
  filter: ${(props) =>
    props.$hover
      ? "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65))"
      : "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65)) blur(1px)"};
`;

export const RightPhoneImg = styled(PhoneImg)`
  width: ${(props) => (props.$hover ? "26rem" : "22rem")};
  z-index: ${(props) => (props.$hover ? 10 : 8)};
  transform: ${(props) =>
    props.$hover
      ? "translateX(-50%) rotate(0deg)"
      : "translateX(0%) rotate(12deg)"};
  filter: ${(props) =>
    props.$hover
      ? "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65))"
      : "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65)) blur(1px)"};
`;

export const WebImg = styled.img`
  width: 54rem;
  user-select: none;
  z-index: 9;
  transition: transform 0.6s ease-in-out, width 0.6s ease-in-out;
  cursor: pointer;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65));
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1070px) {
    width: 40rem;
  }
`;

export const RightWebImg = styled(WebImg)`
  width: ${(props) => (props.$hover ? "54rem" : "40rem")};
  z-index: ${(props) => (props.$hover ? 10 : 8)};
  transform: ${(props) =>
    props.$hover
      ? "translateX(-50%) rotate(0deg)"
      : "translateX(0%) rotate(12deg)"};
  filter: ${(props) =>
    props.$hover
      ? "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65))"
      : "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65)) blur(1px)"};

  @media (max-width: 1070px) {
    width: ${(props) => (props.$hover ? "40rem" : "34rem")};
  }

  @media (max-width: 780px) {
    transform: ${(props) =>
      props.$hover
        ? "translateX(-50%) rotate(0deg)"
        : "translateX(-50%) translateY(-35%) rotate(0deg)"};
  }
`;

export const LeftWebImg = styled(WebImg)`
  width: ${(props) => (props.$hover ? "54rem" : "40rem")};
  z-index: ${(props) => (props.$hover ? 10 : 8)};
  transform: ${(props) =>
    props.$hover
      ? "translateX(-50%) rotate(0deg)"
      : "translateX(-100%) rotate(-12deg)"};
  filter: ${(props) =>
    props.$hover
      ? "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65))"
      : "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65)) blur(1px)"};

  @media (max-width: 1070px) {
    width: ${(props) => (props.$hover ? "40rem" : "34rem")};
  }
  @media (max-width: 780px) {
    transform: ${(props) =>
      props.$hover
        ? "translateX(-50%) rotate(0deg)"
        : "translateX(-50%) translateY(35%) rotate(0deg)"};
  }
`;

export const PhonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50rem;
  z-index: 9;
  position: relative;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const WebContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50rem;
  z-index: 9;
  position: relative;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ProjectTitle = styled.span`
  font-family: "Poppins-SemiBold";
  font-size: 4rem;
  letter-spacing: -0.2px;
  color: white;

  user-select: none;
  text-shadow: 0px 0px 5px black;

  @media (max-width: 550px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 100%;
  position: relative;
  align-items: center;
`;

export const GoToTop = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50rem;

  align-items: center;
  justify-content: center;
  background-color: rgba(56, 224, 187, 0.5);
  position: fixed;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  bottom: 4rem;
  cursor: pointer;
  right: 4rem;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease-in-out;
  display: flex;
  animation: ${({ $show }) => ($show ? jumpFadeIn : jumpFadeOut)} 0.5s forwards;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: rgba(56, 224, 187, 1);
    border: 1.5px solid rgba(255, 255, 255, 1);
  }
`;

export const MediaSliderContainer = styled.div`
  display: none;
  min-height: 50rem;

  @media (max-width: 800px) {
    display: flex;
  }
`;
