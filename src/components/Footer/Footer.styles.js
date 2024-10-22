import { styled } from "styled-components";
import { ReactComponent as InstaSvg } from "../../assets/icons/instagram.svg";
import { ReactComponent as MailSvg } from "../../assets/icons/mail.svg";

export const FooterContainer = styled.div`
  height: 10rem;
  background-color: transparent;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;

  border-top: 1px solid rgba(56, 224, 187, 1);

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 3rem 0rem;
    gap: 2rem;
    height: 100%;
  }
`;
export const Title = styled.span`
  color: white;
  font-family: "Poppins-Medium";
  font-size: 4rem;
  line-height: 4rem;
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 91rem;
  width: 100%;
  @media (max-width: 800px) {
    max-width: 100%;
    padding: 0rem 2rem;
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0rem;
  gap: 2rem;
  border-top: 1px solid rgba(56, 224, 187, 1);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  font-size: 1.7rem;
  font-family: "Poppins-Medium";
  cursor: pointer;
  border: none;
  outline: none;
  letter-spacing: -0.4px;
  user-select: none;
  padding: 0.7rem 1.7rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  &:active {
    scale: 0.97;
  }
`;

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  width: 1440px;
  @media (max-width: 1500px) {
    padding: 0rem 5rem;
    width: 100%;
  }
  @media (max-width: 631px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 8rem;
  user-select: none;
  object-fit: contain;

  @media (max-width: 631px) {
    width: 100%;
    height: auto;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Text = styled.span`
  color: white;
  font-size: 1.8rem;
  font-family: "Poppins-SemiBold";
  text-transform: uppercase;
  letter-spacing: -0.2px;
  user-select: none;
`;

export const Link = styled.span`
  color: white;
  font-size: 1.5rem;
  font-family: "Poppins-SemiBold";
  text-transform: uppercase;
  letter-spacing: -0.2px;
  user-select: none;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: ${(props) => (props.$active ? "100%" : "0")};

    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
  @media (max-width: 631px) {
    text-align: center;
  }
`;

export const Icon = styled.div`
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
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: Column;
  gap: 1rem;
  @media (max-width: 631px) {
    align-items: center;
  }
`;

export const SocialMediaRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Instagram = styled(InstaSvg)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;
export const Mail = styled(MailSvg)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;

export const CopyText = styled(Text)`
  font-size: 1.6rem;
  text-transform: unset;
  display: flex;
  flex-direction: row;

  font-family: "Poppins-Regular";
  @media (max-width: 631px) {
    text-align: center;
  }
`;

export const Name = styled.div`
  font-size: 1.6rem;
  font-family: "Poppins-Medium";
  user-select: none;
  margin-left: 0.5rem;

  background: linear-gradient(90deg, #aff3e4 0%, rgba(56, 224, 187, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;
