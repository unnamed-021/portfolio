import styled from "styled-components";
import { ReactComponent as Shorts } from "../../assets/icons/shorts.svg";
import { ReactComponent as Socks } from "../../assets/icons/socks.svg";
import { ReactComponent as Tshirt } from "../../assets/icons/tshirt.svg";
import { ReactComponent as Stringer } from "../../assets/icons/stringer.svg";

const Btn = styled.button`
  width: 12rem;
  height: 4rem;
  border-radius: 4rem;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  background-color: rgb(12, 12, 12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  z-index: 20;
  padding: 0px 3px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:hover div {
    width: 11.15rem;
    transition-duration: 0.3s;
  }

  &:hover span {
    transform: translate(10px);
    width: 0;
    font-size: 0;
    transition-duration: 0.3s;
  }

  &:active {
    transform: scale(0.95);
    transition-duration: 0.3s;
  }
`;

const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom, #a3ee5b, #188300);
  background: #fff;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: 0.3s;
`;

const Text = styled.span`
  height: 100%;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  transition-duration: 0.3s;
  font-size: 1.4rem;

  @media (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

const icons = {
  Shorts,
  Socks,
  Tshirt,
  Stringer,
};

function StyledButton({ icon, onClick }) {
  const IconComponent = icons[icon];
  return (
    <Btn onClick={onClick}>
      <IconContainer>
        <IconComponent />
      </IconContainer>
      <Text>Pregledaj</Text>
    </Btn>
  );
}

export default StyledButton;
