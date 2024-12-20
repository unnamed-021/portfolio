import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  TitleContainer,
  ContactContainer,
  Button,
  SocialMediaRow,
  CopyText,
  Icon,
  Name,
  Title,
  Div,
} from "./Footer.styles";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Call } from "../../assets/icons/call.svg";
import { ReactComponent as Git } from "../../assets/icons/git.svg";

const Footer = ({ hide, setShowContact, setErrors }) => {
  const [isVisible, setIsVisible] = useState(hide);

  useEffect(() => {
    let timer;
    if (hide) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), 250);
    }

    return () => clearTimeout(timer);
  }, [hide]);

  return (
    <Div>
      {!isVisible && (
        <ContactContainer $show={!hide}>
          <TitleContainer>
            <Title>Have a project in mind?</Title>
            <Title>Lets work together!</Title>
          </TitleContainer>
          <Button
            onClick={() => {
              setShowContact(true);
              setErrors({});
            }}
          >
            Contact
          </Button>
        </ContactContainer>
      )}
      <FooterContainer>
        <CopyText>
          © 2024 <Name>Srdjan Uzunovic</Name>. All rights reserved
        </CopyText>
        <SocialMediaRow>
          <Icon href="mailto:uzunovicsrdjan@gmail.com">
            <Call />
          </Icon>
          <Icon
            onClick={() =>
              window.open("https://github.com/unnamed-021", "_blank")
            }
          >
            <Git />
          </Icon>
          <Icon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/srdjan-uzunovic/",
                "_blank"
              )
            }
          >
            <Linkedin />
          </Icon>
        </SocialMediaRow>
      </FooterContainer>
    </Div>
  );
};

export default Footer;
