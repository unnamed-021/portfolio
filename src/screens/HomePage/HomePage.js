import React, { useEffect, useRef, useState } from "react";

import { Container, Content, GoToTop } from "./HomePage.styles";
import {
  ContactContent,
  Label,
  Row,
  Title,
  Input,
  TitleGradient,
  Column,
  InputContainer,
  TextArea,
  Button,
} from "./ContactPage.styles";

import { ReactComponent as Top } from "../../assets/icons/top.svg";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SectionAbout from "./utils/SectionAbout";
import SectionProjects from "./utils/SectionProjects";
import SectionGif from "./utils/SectionGif";
import SplashScreen from "../../components/SplashScreen/SplashScreen";

const HomePage = () => {
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [minimumDurationPassed, setMinimumDurationPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinimumDurationPassed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const [isVisible, setIsVisible] = useState(showContact);

  useEffect(() => {
    let timer;
    if (showContact) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), 250);
    }

    return () => clearTimeout(timer);
  }, [showContact]);

  return (
    <Container>
      {/* <SplashScreen /> */}
      <Header
        onAboutClick={scrollToAbout}
        onProjectsClick={scrollToProjects}
        setShowContact={setShowContact}
        showContact={showContact}
        onContactClick={() => setShowContact(true)}
      />
      {!isVisible ? (
        <Content $show={!showContact}>
          <SectionGif />
          <SectionAbout aboutSectionRef={aboutSectionRef} />
          <SectionProjects projectsSectionRef={projectsSectionRef} />
        </Content>
      ) : (
        <Content $show={showContact}>
          <ContactContent>
            <Row>
              <Title>Get in</Title>
              <TitleGradient>Touch</TitleGradient>
            </Row>
            <Column>
              <InputContainer>
                <Label>Name</Label>
                <Input placeholder="Your Name" />
              </InputContainer>
              <InputContainer>
                <Label>Email</Label>
                <Input placeholder="Your Email" />
              </InputContainer>
              <InputContainer>
                <Label>Your Message</Label>
                <TextArea placeholder="Your Message" />
              </InputContainer>
              <Button>Send Message</Button>
            </Column>
          </ContactContent>
        </Content>
      )}
      <Footer hide={showContact} setShowContact={setShowContact} />
      <GoToTop show={showGoToTop} onClick={goToTop}>
        <Top />
      </GoToTop>
    </Container>
  );
};

export default HomePage;
