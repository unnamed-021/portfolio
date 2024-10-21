import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { ReactComponent as CloseSvg } from "./assets/icons/close.svg";

export const CloseContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
export const Close = styled(CloseSvg)`
  width: auto;
  height: 18px;
  opacity: 0.75;
  margin-top: -2px;
  path {
    stroke: #000;
    stroke-width: 3px;
  }

  &:hover {
    path {
      stroke: #f73e50;
    }
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__progress-bar {
    border-radius: 0px 20px 20px 0px;
  }

  .Toastify__toast--success {
    background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  }
  .Toastify__progress-bar--success {
    background-color: #005e39;
  }

  .Toastify__toast--error {
    background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  }
  .Toastify__progress-bar--error {
    background-color: #f73e50;
  }

  .Toastify__toast--warning {
    background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  }
  .Toastify__progress-bar--warning {
    background-color: #f88f00;
  }

  .Toastify__toast--info {
    background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  }
  .Toastify__progress-bar--info {
    background-color: #3498db;
  }

  .Toastify__toast {
    overflow: visible;
    border-radius: 10px 10px 10px 0px;
  }

  .Toastify__toast-body {
    position: relative;
    color: black;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
    font-family: "Poppins-Medium";
    line-height: 2rem;
    font-size: 1.5rem;
  }

  .Toastify__close-button {
    color: #000;
    opacity: 0.5;
  }
  .Toastify__close-button:hover {
    color: #f73e50;
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  min-width: 38px;
  min-height: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${({ type }) => {
    switch (type) {
      case "success":
        return "0px 0px 9px 3px rgba(0,94,57, 0.3);";
      case "error":
        return "0px 0px 9px 3px rgba(124,31,40, .3);";
      case "warning":
        return "0px 0px 9px 3px rgba(124,72,0, 0.3);";
      case "info":
        return "0px 0px 9px 3px rgba(26, 76, 110, 0.3)";
      default:
        return "transparent";
    }
  }};

  background-color: ${({ type }) => {
    switch (type) {
      case "success":
        return "#005e39";
      case "error":
        return "#7c1f28";
      case "warning":
        return "#7c4800";
      case "info":
        return "#1a4c6e";
      default:
        return "transparent";
    }
  }};
`;
