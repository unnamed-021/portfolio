import { styled } from "styled-components";
import Bg from "../../assets/images/bg.png";

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

export const ContactContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6rem;
  max-width: 50rem;
  height: 100%;
  flex: 1;

  @media (max-width: 1600px) {
    max-width: 75rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: "Poppins-Bold";
  user-select: none;
  letter-spacing: -0.2px;
  color: white;
`;

export const Label = styled.span`
  font-size: 2rem;
  font-family: "Poppins-Medium";
  user-select: none;
  letter-spacing: -0.2px;
  color: white;
`;

export const TitleGradient = styled.div`
  font-size: 4rem;
  font-family: "Poppins-Bold";
  user-select: none;

  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-top: ${(props) => (props.$margin ? "-3rem" : "0rem")};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const Input = styled.input`
  font-size: 1.6rem;
  font-family: "Poppins-Medium";
  user-select: none;
  letter-spacing: -0.2px;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  outline: none;
  background-color: transparent;
  text-transform: ${(props) =>
    props.$autoCapitalize ? "capitalize" : "default"};
  box-shadow: inset 0px 0px 4px 3px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(13px);

  border: ${(props) =>
    props.$error ? "1px solid #FF4D4D" : "1px solid rgba(56, 224, 187)"};
`;

export const TextArea = styled.textarea`
  font-size: 1.6rem;
  font-family: "Poppins-Medium";
  user-select: none;
  letter-spacing: -0.2px;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  border: ${(props) =>
    props.$error ? "1px solid #FF4D4D" : "1px solid rgba(56, 224, 187)"};
  outline: none;
  background-color: transparent;
  box-shadow: inset 0px 0px 4px 3px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(13px);
  min-height: 15rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  border-radius: 1rem;
  font-size: 2rem;
  font-family: "Poppins-Medium";
  user-select: none;
  letter-spacing: -0.2px;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:active {
    scale: 0.97;
  }
`;
