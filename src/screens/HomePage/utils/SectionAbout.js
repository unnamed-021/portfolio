import React from "react";

import {
  Title,
  Description,
  TitleWhite,
  Section,
  SkillsContainer,
  Skills,
  Skill,
  SkillText,
  SkillContainer,
  StyledTitleContainer,
  TitleRow,
  StyledTitleWhite,
} from "../HomePage.styles";

import { ReactComponent as Git } from "../../../assets/icons/git.svg";
import { ReactComponent as Css } from "../../../assets/icons/css.svg";
import { ReactComponent as Html } from "../../../assets/icons/html.svg";
import { ReactComponent as ReactIcon } from "../../../assets/icons/react.svg";
import { ReactComponent as Js } from "../../../assets/icons/js.svg";
import { ReactComponent as Sass } from "../../../assets/icons/sass.svg";

const SectionAbout = ({ aboutSectionRef }) => {
  return (
    <Section ref={aboutSectionRef} $padding>
      <StyledTitleContainer $big>
        <TitleRow>
          <StyledTitleWhite>Hello, I'm</StyledTitleWhite>
          <Title>Srdjan</Title>
        </TitleRow>
        <Description $big>
          I would describe myself as resourceful in finding solutions to
          challenges and always having a positive outlook on things. My journey
          started with a simple curiosity of how websites work and quickly
          evolved into a passion for creating amazing web experiences. With
          expertise in web technologies I've had the opportunity to work on
          diverse projects—from small business websites to larger scale web
          applications—each time aiming to better myself through constant
          practice. I'm excited to continue my journey, exploring innovative
          ways to bring ideas to life.
        </Description>

        <SkillsContainer>
          <TitleWhite>Skills</TitleWhite>
          <Skills>
            <SkillContainer>
              <Skill>
                <Html />
              </Skill>
              <SkillText>HTML</SkillText>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <Css />
              </Skill>
              <SkillText>CSS</SkillText>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <Sass />
              </Skill>
              <SkillText>Sass</SkillText>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <ReactIcon />
              </Skill>
              <SkillText>React & React Native</SkillText>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <Js />
              </Skill>
              <SkillText>JavaScript</SkillText>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <Git width={36} height={36} />
              </Skill>
              <SkillText>GitHub</SkillText>
            </SkillContainer>
          </Skills>
        </SkillsContainer>
      </StyledTitleContainer>
    </Section>
  );
};

export default SectionAbout;
