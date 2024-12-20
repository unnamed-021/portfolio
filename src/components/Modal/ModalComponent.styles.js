import { keyframes, styled } from "styled-components";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as IconX } from "../../assets/icons/close.svg";

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

export const CloseIcon = styled(IconX)`
  cursor: pointer;
  &:hover {
    path {
      stroke: #a00;
    }
  }
`;

export const XIcon = styled(Close)`
  cursor: pointer;
  &:hover {
    path {
      stroke: #a00;
    }
  }
`;

export const Relative = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
`;
export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ButtonModalCancel = styled.button`
  border-radius: 16px;
  border: 1px solid #a00;
  display: flex;
  width: 160px;
  padding: 16px 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: white;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  color: #1e1e1e;
  text-align: justify;
  font-size: 16px;
  font-family: "Poppins-Medium";

  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;

  &:active {
    transition: all 0.2s ease-in-out;
    scale: ${(props) => (props.$disabled ? 1 : 0.95)};
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.span`
  color: #000;

  text-align: justify;
  font-family: Playfair Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 39px; /* 162.5% */
`;
export const ModalTitleSmall = styled.span`
  color: #000;
  text-align: justify;
  font-family: Playfair Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-height: 920px) {
    //overflow: auto;
    padding-right: 5px;
    max-height: 528px;
  }
`;

export const ButtonModal = styled(ButtonModalCancel)`
  background: #f1e4df;
  border: none;
`;
export const ButtonText = styled.span`
  user-select: none;
  font-size: 16px;
  font-family: "Poppins-Medium";

  letter-spacing: -0.408px;
  color: ${(props) => (props.$black ? "white" : "black")};
`;
export const Subtitle = styled.span`
  font-family: "Poppins-Medium";
  font-size: 16px;
  margin-bottom: 24px;
  display: flex;
  letter-spacing: -0.408px;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 12px;
  border: ${(props) => (props.$black ? "1px solid black" : "1px solid #a00")};
  background-color: ${(props) => (props.$black ? "black" : "white")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  outline: none;

  height: 54px;
  width: 160px;
  &:active {
    scale: ${(props) => (props.$disabled ? 1 : 0.98)};
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 500px) {
    width: 48%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
`;

export const ButtonContainerGap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Message = styled.span`
  font-family: "Poppins-SemiBold";

  user-select: none;
  font-size: 1.8rem;
  letter-spacing: -0.177777px;
  text-align: center;
`;

export const PageButton = styled.button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  font-family: "Poppins-Medium";

  font-size: 11px;
  user-select: none;

  cursor: pointer;
  &:active {
    opacity: 0.6;
  }
`;

export const PageCountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
`;

export const StyledTdCenter = styled.td`
  text-align: center;

  font-size: 1.4rem;
  border-bottom: 1px solid #f4f4f4;
  user-select: none;
  padding: 0.8rem 0rem;
  font-family: "Poppins-Medium";
`;
export const StyledTd = styled.td`
  text-align: ${(props) => (props.$right ? "right" : "left")};

  font-size: 1.4rem;
  border-bottom: 1px solid #f4f4f4;
  user-select: none;
  padding: 0.8rem 0rem;
  font-family: "Poppins-Medium";
`;

export const StyledTable = styled.table`
  min-width: 100%;
  @media (max-width: 700px) {
    min-width: 700px;
  }
`;
export const StyledThCenter = styled.th`
  text-align: center;
  user-select: none;

  opacity: 0.5;
  font-family: "Poppins-Regular";

  font-size: 14px;
  letter-spacing: -0.462px;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 0.8rem;
`;
export const StyledTh = styled.th`
  text-align: ${(props) => (props.$right ? "right" : "left")};
  user-select: none;
  font-family: "Poppins-Regular";

  opacity: 0.5;

  font-size: 14px;
  letter-spacing: -0.462px;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 0.8rem;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const TdText = styled.span`
  color: #aaaeb1;
  font-family: "Poppins-Regular";

  user-select: none;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  letter-spacing: -0.429px;
`;

export const Loader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
`;
export const ModalTitleInput = styled.input`
  color: #000;
  text-align: justify;
  font-family: Playfair Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  border: none;
  background-color: #fff;
  outline: none;
  width: fit-content;
  border-bottom: ${(props) =>
    props.$edit ? "1px solid white" : "1px solid black"};
  &::placeholder {
    color: #000;
  }
`;

export const SmallModalContainer = styled.div`
  background: white;
  width: fit-content;
  height: fit-content;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;

  bottom: 0;
  background-color: ${(props) =>
    props.$bg ? "transparent" : "rgba(0, 0, 0, 0.2)"};
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  width: 100%;
  border-radius: ${(props) => (props.$bg ? "0px 0px 10px 10px" : "10px")};
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  border-radius: 10px;

  justify-content: center;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  position: absolute;
  top: 15px;
  right: 15px;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
`;

export const StyledIconContainer = styled.div`
  display: flex;
  z-index: 20;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  min-width: 4rem;
  max-width: 4rem;
  min-height: 4rem;
  max-height: 4rem;
  outline: 1px solid #aff3e415;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.$edit ? "default" : "pointer")};
  border-radius: 50%;
  background: ${(props) =>
    props.$edit ? "transparent" : "rgba(0, 0, 0, 0.1)"};
  width: 40px;
  height: 40px;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
`;

export const CloseSvg = styled(Close)`
  width: 24px;
  height: 24px;

  path {
    stroke: white;
  }
  &:hover {
    path {
      stroke: rgba(56, 224, 187, 1);
    }
  }
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const ChevronContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 15px;
  height: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 15px;
`;

export const Image = styled.img`
  height: 80%;
  user-select: none;
  pointer-events: none;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65));

  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: ${(props) => (props.$isTransitioning ? 0 : 1)};

  transform: ${(props) =>
    props.$isTransitioning
      ? props.$direction === "left"
        ? "translateX(-150%)"
        : "translateX(150%)"
      : "translateX(0)"};

  @media (max-width: 1500px) {
    height: 63%;
  }
  @media (max-width: 800px) {
    height: ${(props) => (props.$phone ? "50%" : "100%")};
  }
`;

export const Video = styled.video`
  width: 100%;
  border-radius: 1rem;
  object-fit: contain;
  height: 100%;
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  align-self: center;
`;

export const Dot = styled.div`
  transition: all 0.3s ease-in-out;
  width: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "rgba(56, 224, 187, 1)" : "black"};
  outline: ${(props) =>
    props.$active ? "1px solid black" : "1px solid rgba(56, 224, 187, 1)"};
  height: 1.2rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
  cursor: pointer;
`;
