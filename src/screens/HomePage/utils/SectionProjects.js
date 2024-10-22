import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Title,
  Description,
  TitleWhite,
  TitleContainer,
  Section,
  Row,
  BrushImg,
  PhonesContainer,
  PhoneImg,
  ProjectTitle,
  ProjectsContainer,
  StoreImg,
  ProjectsRow,
  WebImg,
  WebContainer,
  Glow,
  Relative,
  StyledWebImg,
  StyledPhoneImg,
  Dot,
  ProgressContainer,
  Project,
  Line,
  Progress,
  IconsContainer,
  IconContainer,
  ChevronLeft,
  ChevronRight,
  ProjectDescription,
  ProjectColumn,
} from "../HomePage.styles";

import { projectData } from "../../../utils/utils";

import Brush from "../../../assets/images/brush.png";
import AppStore from "../../../assets/images/appstore.png";
import GooglePlay from "../../../assets/images/googlePlay.png";
import GlowPng from "../../../assets/images/glow.png";
import MediaModal from "../../../components/Modal/MediaModal";

const SectionProjects = ({ projectsSectionRef }) => {
  const [hoverStates, setHoverStates] = useState({});
  const [mediaUrl, setMediaUrl] = useState("");
  const [type, setType] = useState("");
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const projectsRef = useRef([]);
  const intervalRef = useRef(null);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const handleHover = (id, state) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [id]: state,
    }));
  };

  const handleNext = () => {
    setCurrentProject((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
    resetInterval();
  };

  const handlePrev = () => {
    setCurrentProject((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentProject((prevIndex) =>
        prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Section
      $padding
      ref={projectsSectionRef}
      $center
      style={{ marginBottom: -50 }}
    >
      <TitleContainer $big $center>
        <Row>
          <TitleWhite>My</TitleWhite>
          <Title>Projects</Title>
        </Row>
        <Description $big $center>
          Here you can find my personal projects I've been working on, each one
          is a part of my growing frontend developer journey. My expertise lies
          in building responsive, modern web apps and mobile apps using a range
          of different technologies for each project's needs.
        </Description>
      </TitleContainer>
      <ProjectsContainer>
        <IconsContainer>
          <IconContainer onClick={handlePrev}>
            <ChevronLeft />
          </IconContainer>
          <IconContainer $right onClick={handleNext}>
            <ChevronRight />
          </IconContainer>
        </IconsContainer>

        {projectData.map((project, index) => {
          const isHovered = hoverStates[project.tag];
          if (index !== currentProject) return null;

          return project.type === "app" ? (
            <Project
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectColumn>
                <ProjectsRow $offHover={!project.link}>
                  <BrushImg src={Brush} width={50} />
                  <ProjectTitle
                    onClick={() => {
                      if (project.link) {
                        handleClick(project.link);
                      }
                    }}
                    $offHover={!project.link}
                  >
                    {project.title}
                  </ProjectTitle>
                </ProjectsRow>
                <ProjectDescription $center>
                  {project.description}
                </ProjectDescription>
                {project.appStore && project.googlePlay && (
                  <Row>
                    <StoreImg
                      src={AppStore}
                      onClick={() => handleClick(project.appStore)}
                    />
                    <StoreImg
                      src={GooglePlay}
                      onClick={() => handleClick(project.googlePlay)}
                    />
                  </Row>
                )}
              </ProjectColumn>
              <Relative>
                <PhonesContainer>
                  <StyledPhoneImg
                    $right
                    src={project.leftPhoto}
                    onMouseLeave={() => handleHover(project.tag, false)}
                    onMouseEnter={() => handleHover(project.tag, true)}
                    onClick={() => {
                      setMediaUrl(project.leftPhoto);
                      setType("mobile");
                      setOpenMediaModal(true);
                    }}
                  />
                  <PhoneImg
                    src={project.middlePhoto}
                    onClick={() => {
                      setMediaUrl(project.middlePhoto);
                      setType("mobile");
                      setOpenMediaModal(true);
                    }}
                    style={{
                      zIndex: 9,
                      width: isHovered ? 220 : 260,
                    }}
                  />
                  <StyledPhoneImg
                    $left
                    src={project.rightPhoto}
                    onClick={() => {
                      setMediaUrl(project.rightPhoto);
                      setType("mobile");
                      setOpenMediaModal(true);
                    }}
                    onMouseLeave={() => handleHover(project.tag, false)}
                    onMouseEnter={() => handleHover(project.tag, true)}
                  />
                </PhonesContainer>
                <Glow src={GlowPng} />
              </Relative>
            </Project>
          ) : (
            <Project
              $show={index === currentProject}
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectColumn>
                <ProjectsRow $offHover={!project.link}>
                  <BrushImg src={Brush} width={50} />
                  <ProjectTitle
                    onClick={() => {
                      if (project.link) {
                        handleClick(project.link);
                      }
                    }}
                    $offHover={!project.link}
                  >
                    {project.title}
                  </ProjectTitle>
                </ProjectsRow>
                <Description $center>{project.description}</Description>
              </ProjectColumn>
              <Relative>
                <WebContainer>
                  <StyledWebImg
                    $right
                    onMouseLeave={() => handleHover(project.tag, false)}
                    onMouseEnter={() => handleHover(project.tag, true)}
                    src={project.leftPhoto}
                    onClick={() => {
                      setMediaUrl(project.leftPhoto);
                      setType("web");
                      setOpenMediaModal(true);
                    }}
                  />
                  <WebImg
                    src={project.middlePhoto}
                    onClick={() => {
                      setMediaUrl(project.middlePhoto);
                      setType("web");
                      setOpenMediaModal(true);
                    }}
                    style={{
                      zIndex: 9,
                      width: isHovered ? 340 : 540,
                    }}
                  />
                  <StyledWebImg
                    $left
                    src={project.rightPhoto}
                    onClick={() => {
                      setMediaUrl(project.rightPhoto);
                      setType("web");
                      setOpenMediaModal(true);
                    }}
                    onMouseLeave={() => handleHover(project.tag, false)}
                    onMouseEnter={() => handleHover(project.tag, true)}
                  />
                </WebContainer>
                <Glow src={GlowPng} />
              </Relative>
            </Project>
          );
        })}

        <ProgressContainer $show>
          <Progress>
            {projectData.map((dot, i) => (
              <Fragment key={i}>
                {i > 0 && <Line $active={i <= currentProject} />}
                <Dot $active={i <= currentProject} />
              </Fragment>
            ))}
          </Progress>
        </ProgressContainer>
      </ProjectsContainer>
      <MediaModal
        open={openMediaModal}
        onClose={() => setOpenMediaModal(false)}
        type={type}
        mediaUrl={mediaUrl}
      />
    </Section>
  );
};

export default SectionProjects;
