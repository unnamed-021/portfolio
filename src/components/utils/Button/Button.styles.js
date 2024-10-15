import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  width: fit-content;
  height: 45px;
  z-index: 10;
  padding: 0px 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 1px solid white;
  border-radius: 16px;
  background: ${(props) =>
    props.disabled
      ? "none"
      : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 1.04%, rgba(0, 0, 0, 0.50) 100%), #262626"};
  background-color: ${(props) => (props.disabled ? "#d4e5e4" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0px 8px 12px 0px rgba(0, 0, 0, 0.1)"};
  &:active {
    transition: all 0.2s ease-in-out;
    scale: ${(props) => (props.disabled ? 1 : 0.95)};
  }
`;

export const Text = styled.span`
  color: ${(props) => (props.disabled ? "#000" : "#fff")};
  text-align: center;

  font-size: 16px;
  user-select: none;
  font-family: "Poppins-Medium";
  letter-spacing: -0.408px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
