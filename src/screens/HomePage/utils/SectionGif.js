import React from "react";

import {
  Title,
  Description,
  TitleWhite,
  Icons,
  TitleContainer,
  Icon,
  Section,
  HeaderRow,
  StyledImage,
  ImageDiv,
  Image,
  StyledImageDiv,
} from "../HomePage.styles";

import MeEmoji from "../../../assets/images/me.png";

import { ReactComponent as Linkedin } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as Call } from "../../../assets/icons/call.svg";
import { ReactComponent as Git } from "../../../assets/icons/git.svg";

const SectionGif = () => {
  return (
    <Section $center>
      <HeaderRow>
        <StyledImageDiv>
          <StyledImage src={MeEmoji} alt="MeEmoji" />
        </StyledImageDiv>
        <TitleContainer>
          <Title>Frontend</Title>
          <TitleWhite $margin>Developer👋🏻</TitleWhite>

          <Description>
            Software Engineer with a skill for developing high-quality
            responsive web applications, mobile applications and a strong
            determination for problem solving, demonstrating expertise and
            ability to achieve outstanding results.
          </Description>
          <Icons>
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
          </Icons>
        </TitleContainer>
        <ImageDiv>
          <Image src={MeEmoji} alt="MeEmoji" />
        </ImageDiv>
      </HeaderRow>
    </Section>
  );
};

export default SectionGif;
