import { keyframes, styled } from "styled-components";

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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 0px 2px 2px 6px rgba(0, 0, 0, 0.15),
    inset 0px 1px 5px 2px rgba(255, 255, 255, 0.05);
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1rem;

  position: ${(props) => (props.$invisible ? "relative" : "absolute")};
  opacity: ${(props) => (props.$invisible ? 0 : 1)};
  top: 2rem;
  left: 2rem;
`;
export const HeaderContainer = styled.div`
  background-color: transparent;
  width: 100%;

  justify-content: space-between;
  display: flex;
  transition: all 0.3s ease-in-out;
  position: relative;
  max-width: 120rem;
  padding: 2rem;
  min-height: ${(props) => (props.$open ? "100dvh" : "7rem")};
`;

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  width: 825px;
  @media (max-width: 1500px) {
    padding: 0rem 5rem;
  }
  @media (max-width: 960px) {
    width: 90%;
  }
  @media (max-width: 777px) {
    display: none;
  }
`;

export const Image = styled.img`
  user-select: none;
  cursor: pointer;
  width: auto;
  height: 13rem;
  object-fit: contain;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledNavLinks = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;
  gap: 2rem;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Link = styled.span`
  color: white;
  font-size: 1.8rem;
  font-family: "Poppins-Medium";
  letter-spacing: -0.2px;
  user-select: none;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
`;
export const Count = styled.span`
  color: white;
  font-size: 1rem;
  font-family: "Poppins-Medium";
`;
export const CartContainer = styled.div`
  display: flex;

  flex-direction: row;
  gap: 0.5rem;
  position: absolute;
  cursor: pointer;

  right: 0rem;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const CarText = styled.span`
  color: black;
  font-size: 1.8rem;
  font-family: "Poppins-SemiBold";
  text-transform: uppercase;
  letter-spacing: -0.2px;
  user-select: none;
`;

export const HamburgerMenu = styled.div`
  display: none;

  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledCartContainer = styled(CartContainer)`
  position: relative;
  right: unset;
`;
