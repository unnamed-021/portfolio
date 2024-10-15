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
} from "../HomePage.styles";

import Brush from "../../../assets/images/brush.png";
import AppStore from "../../../assets/images/appstore.png";
import GooglePlay from "../../../assets/images/googlePlay.png";
import GlowPng from "../../../assets/images/glow.png";
import MediaModal from "../../../components/Modal/MediaModal";
import { projectData } from "../../../utils/utils";

const SectionProjects = ({ projectsSectionRef }) => {
  const [hoverStates, setHoverStates] = useState({});
  const [mediaUrl, setMediaUrl] = useState("");
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const projectsRef = useRef([]);
  const observer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      let newActiveDot = 0;
      let shouldShowProgress = false;

      // Check visibility of each project
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectsRef.current.indexOf(entry.target);
          setCurrentIndex(index);
          if (index >= 0) {
            newActiveDot = index + 1;
            shouldShowProgress = true;
          }
        }
      });

      // Check if all dots are inactive
      const allInactive = newActiveDot === 0;

      // Only update state if there's a change
      if (shouldShowProgress || !allInactive) {
        setActiveDot(newActiveDot);
        setShowProgress(!allInactive);
      } else if (allInactive && showProgress) {
        // setShowProgress(false);
      }
    };

    observer.current = new IntersectionObserver(handleIntersection, options);

    projectsRef.current.forEach((ref) => {
      if (ref) observer.current.observe(ref);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [showProgress]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowProgress(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const handleHover = (id, state) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [id]: state,
    }));
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setShowProgress(false);
      }, 1000);
    }
  }, [currentIndex]);

  return (
    <Section $padding ref={projectsSectionRef} $center>
      <ProgressContainer show={showProgress}>
        <Progress>
          {projectData.map((_, i) => (
            <Fragment key={i}>
              {i > 0 && <Line active={i < activeDot} />}
              <Dot active={i < activeDot} />
            </Fragment>
          ))}
        </Progress>
      </ProgressContainer>

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
        {projectData.map((project, index) => {
          const isHovered = hoverStates[project.tag];

          return project.type === "app" ? (
            <Project
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
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
              <Relative>
                <PhonesContainer>
                  <StyledPhoneImg
                    $right
                    src={project.leftPhoto}
                    onMouseLeave={() => handleHover(project.tag, false)}
                    onMouseEnter={() => handleHover(project.tag, true)}
                    onClick={() => {
                      setMediaUrl(project.leftPhoto);
                      setOpenMediaModal(true);
                    }}
                  />
                  <PhoneImg
                    src={project.middlePhoto}
                    onClick={() => {
                      setMediaUrl(project.middlePhoto);
                      setOpenMediaModal(true);
                    }}
                    style={{
                      zIndex: 10,
                      width: isHovered ? 220 : 260,
                    }}
                  />
                  <StyledPhoneImg
                    $left
                    src={project.rightPhoto}
                    onClick={() => {
                      setMediaUrl(project.rightPhoto);
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
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
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
              <Relative>
                <WebContainer>
                  <StyledWebImg
                    $right
                    onMouseLeave={() => handleHover(project.tag, false)}
                    onMouseEnter={() => handleHover(project.tag, true)}
                    src={project.leftPhoto}
                    onClick={() => {
                      setMediaUrl(project.leftPhoto);
                      setOpenMediaModal(true);
                    }}
                  />
                  <WebImg
                    src={project.middlePhoto}
                    onClick={() => {
                      setMediaUrl(project.middlePhoto);
                      setOpenMediaModal(true);
                    }}
                    style={{
                      zIndex: 10,
                      width: isHovered ? 340 : 540,
                    }}
                  />
                  <StyledWebImg
                    $left
                    src={project.rightPhoto}
                    onClick={() => {
                      setMediaUrl(project.rightPhoto);
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
      </ProjectsContainer>
      <MediaModal
        open={openMediaModal}
        onClose={() => setOpenMediaModal(false)}
        mediaUrl={mediaUrl}
      />
    </Section>
  );
};

export default SectionProjects;
