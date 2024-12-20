import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Title,
  Description,
  TitleWhite,
  TitleContainer,
  Section,
  Row,
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
  Project,
  Dot,
  ProgressContainer,
  Line,
  Progress,
  IconsContainer,
  IconContainer,
  ChevronLeft,
  ChevronRight,
  ProjectDescription,
  ProjectColumn,
  Animation,
  ImagesIcon,
  InfoIcon,
  Link,
  LeftPhoneImg,
  RightPhoneImg,
  LeftWebImg,
  RightWebImg,
  RelativeIcon,
} from "../HomePage.styles";

import { projectData } from "../../../utils/utils";

import AppStore from "../../../assets/images/appstore.png";
import GooglePlay from "../../../assets/images/googlePlay.png";
import GlowPng from "../../../assets/images/glow.png";
import MediaModal from "../../../components/Modal/MediaModal";
import MediaBannerSlider from "../../../components/utils/MediaBannerSlider";

const SectionProjects = ({ projectsSectionRef }) => {
  const [hoverState, setHoverState] = useState("");
  const [offHover, setOffHover] = useState(false);
  const [mediaUrl, setMediaUrl] = useState("");
  const [type, setType] = useState("");
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const projectsRef = useRef([]);

  const [showDesc, setShowDesc] = useState(false);
  const [isVisible, setIsVisible] = useState(showDesc);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (showDesc) {
      timer = setTimeout(() => setIsVisible(true), 150);
    } else {
      timer = setTimeout(() => setIsVisible(false), 150);
    }

    return () => clearTimeout(timer);
  }, [showDesc]);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const handleHover = (position) => {
    setOffHover(true);
    setHoverState(position);
  };

  useEffect(() => {
    if (offHover) {
      setTimeout(() => {
        setOffHover(false);
      }, 550);
    }
  }, [offHover]);

  const handleNext = () => {
    setHoverState();
    setOffHover(false);
    setShowDesc(false);
    setIsVisible(false);
    setCurrentProject((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setHoverState();
    setOffHover(false);
    setShowDesc(false);
    setIsVisible(false);
    setCurrentProject((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth >= 780) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    updatePadding();

    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <Section $padding ref={projectsSectionRef} style={{ marginBottom: -50 }}>
      <TitleContainer $big>
        <Row>
          <TitleWhite>My</TitleWhite>
          <Title>Projects</Title>
        </Row>
        <Description $big>
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

        <ProgressContainer $show>
          <Progress>
            {projectData.map((dot, i) => (
              <Fragment key={i}>
                {i > 0 && <Line $active={i <= currentProject} />}
                <Dot
                  $active={i <= currentProject}
                  onClick={() => setCurrentProject(i)}
                />
              </Fragment>
            ))}
          </Progress>
        </ProgressContainer>

        {projectData.map((project, index) => {
          if (index !== currentProject) return null;

          return project.type === "app" ? (
            <Project
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectColumn>
                <ProjectsRow>
                  {isVisible ? (
                    <RelativeIcon onClick={() => setShowDesc(!showDesc)}>
                      <ImagesIcon $active={showDesc} />
                    </RelativeIcon>
                  ) : (
                    <RelativeIcon onClick={() => setShowDesc(!showDesc)}>
                      <InfoIcon $active={showDesc} />
                    </RelativeIcon>
                  )}

                  <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectsRow>

                {isVisible && (
                  <Animation $open={showDesc}>
                    {project.link && (
                      <Link
                        onClick={() => {
                          if (project.link) {
                            handleClick(project.link);
                          }
                        }}
                      >
                        {project.link.replace("https://", "").replace("/", "")}
                      </Link>
                    )}
                    <ProjectDescription>
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
                  </Animation>
                )}
              </ProjectColumn>
              {!isVisible && (
                <Relative $open={!showDesc}>
                  <PhonesContainer>
                    <LeftPhoneImg
                      src={project.rightPhoto}
                      onClick={() => {
                        setMediaUrl(project.rightPhoto);
                        setType("app");
                        setOpenMediaModal(true);
                      }}
                      onMouseLeave={() => {
                        if (!offHover && hoverState === "left") {
                          handleHover("middle");
                        }
                      }}
                      onMouseEnter={() => {
                        if (!offHover && hoverState !== "left") {
                          handleHover("left");
                        }
                      }}
                      $hover={hoverState === "left"}
                    />

                    <PhoneImg
                      src={project.middlePhoto}
                      onClick={() => {
                        setMediaUrl(project.middlePhoto);
                        setType("app");
                        setOpenMediaModal(true);
                      }}
                      onMouseLeave={() => {
                        if (!offHover) {
                          handleHover("middle");
                        }
                      }}
                      onMouseEnter={() => {
                        if (!offHover && hoverState !== "middle") {
                          handleHover("middle");
                        }
                      }}
                      style={{
                        transform:
                          hoverState === "left"
                            ? "translateX(-100%) rotate(-12deg)"
                            : hoverState === "right"
                            ? "translateX(0%) rotate(12deg)"
                            : "translateX(-50%) rotate(0deg)",
                        width:
                          hoverState === "left" || hoverState === "right"
                            ? "22rem"
                            : "26rem",
                        filter:
                          hoverState === "left" || hoverState === "right"
                            ? "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65)) blur(1px)"
                            : "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65))",
                      }}
                    />

                    <RightPhoneImg
                      src={project.leftPhoto}
                      onClick={() => {
                        setMediaUrl(project.leftPhoto);
                        setType("app");
                        setOpenMediaModal(true);
                      }}
                      onMouseLeave={() => {
                        if (!offHover && hoverState === "right") {
                          handleHover("middle");
                        }
                      }}
                      onMouseEnter={() => {
                        if (!offHover && hoverState !== "right") {
                          handleHover("right");
                        }
                      }}
                      $hover={hoverState === "right"}
                    />
                  </PhonesContainer>
                  <MediaBannerSlider
                    timer={10000}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    images={project.photos}
                    total={project.photos?.length}
                    modalPhotos={project.modalPhotos}
                    type={project.type}
                  />
                  <Glow src={GlowPng} />
                </Relative>
              )}
            </Project>
          ) : (
            <Project
              $show={index === currentProject}
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectColumn>
                <ProjectsRow>
                  {isVisible ? (
                    <ImagesIcon
                      onClick={() => setShowDesc(!showDesc)}
                      $active={showDesc}
                    />
                  ) : (
                    <InfoIcon
                      onClick={() => setShowDesc(!showDesc)}
                      $active={showDesc}
                    />
                  )}

                  <ProjectTitle $offHover>{project.title}</ProjectTitle>
                </ProjectsRow>
                {isVisible && (
                  <Animation $open={showDesc}>
                    {project.link && (
                      <Link
                        onClick={() => {
                          if (project.link) {
                            handleClick(project.link);
                          }
                        }}
                      >
                        {project.link.replace("https://", "").replace("/", "")}
                      </Link>
                    )}
                    <Description>{project.description}</Description>
                  </Animation>
                )}
              </ProjectColumn>
              {!isVisible && (
                <Relative $open={!showDesc}>
                  <WebContainer>
                    <LeftWebImg
                      src={project.leftPhoto}
                      onClick={() => {
                        setMediaUrl(project.leftPhoto);
                        setType("web");
                        setOpenMediaModal(true);
                      }}
                      onMouseLeave={() => {
                        if (!offHover && hoverState === "left") {
                          handleHover("middle");
                        }
                      }}
                      onMouseEnter={() => {
                        if (!offHover && hoverState !== "left") {
                          handleHover("left");
                        }
                      }}
                      $hover={hoverState === "left"}
                    />
                    <WebImg
                      src={project.middlePhoto}
                      onClick={() => {
                        setMediaUrl(project.middlePhoto);
                        setType("web");
                        setOpenMediaModal(true);
                      }}
                      onMouseLeave={() => {
                        if (!offHover) {
                          handleHover("middle");
                        }
                      }}
                      onMouseEnter={() => {
                        if (!offHover && hoverState !== "middle") {
                          handleHover("middle");
                        }
                      }}
                      style={{
                        transform: smallScreen
                          ? hoverState === "left"
                            ? "translateX(-100%) rotate(-12deg)"
                            : hoverState === "right"
                            ? "translateX(0%) rotate(12deg)"
                            : "translateX(-50%) rotate(0deg)"
                          : hoverState === "left"
                          ? "translateX(-50%) translateY(35%) rotate(0deg)"
                          : hoverState === "right"
                          ? "translateX(-50%) translateY(-35%) rotate(0deg)"
                          : "translateX(-50%) rotate(0deg)",
                        width: smallScreen
                          ? hoverState === "left" || hoverState === "right"
                            ? "40rem"
                            : "54rem"
                          : hoverState === "left" || hoverState === "right"
                          ? "34rem"
                          : "40rem",
                        filter:
                          hoverState === "left" || hoverState === "right"
                            ? "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65)) blur(1px)"
                            : "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.65))",
                      }}
                    />
                    <RightWebImg
                      src={project.rightPhoto}
                      onClick={() => {
                        setMediaUrl(project.rightPhoto);
                        setType("web");
                        setOpenMediaModal(true);
                      }}
                      onMouseEnter={() => {
                        if (!offHover && hoverState !== "right") {
                          handleHover("right");
                        }
                      }}
                      onMouseLeave={() => {
                        if (!offHover && hoverState === "right") {
                          handleHover("middle");
                        }
                      }}
                      $hover={hoverState === "right"}
                    />
                  </WebContainer>
                  <MediaBannerSlider
                    timer={10000}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    images={project.photos}
                    total={project.photos?.length}
                    type={project.type}
                    modalPhotos={project.modalPhotos}
                  />
                  <Glow src={GlowPng} />
                </Relative>
              )}
            </Project>
          );
        })}
      </ProjectsContainer>
      <MediaModal
        open={openMediaModal}
        onClose={() => setOpenMediaModal(false)}
        type={type}
        mediaUrl={mediaUrl}
        single
      />
    </Section>
  );
};

export default SectionProjects;
