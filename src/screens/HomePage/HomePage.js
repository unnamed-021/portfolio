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
// import successAnimation from "../../assets/animations/success.json";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import LottieAnimation from "../../components/utils/LottieAnimation";

import SectionAbout from "./utils/SectionAbout";
import SectionProjects from "./utils/SectionProjects";
import SectionGif from "./utils/SectionGif";
import openToast from "../../utils/toast";

const HomePage = () => {
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showContact, setShowContact] = useState(false);

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
      timer = setTimeout(() => setIsVisible(true), 250);
    } else {
      timer = setTimeout(() => setIsVisible(false), 250);
    }

    return () => clearTimeout(timer);
  }, [showContact]);

  /* CONTACT */

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const toastId = useRef(null);

  const handleOnChange = (value, setValue) => {
    setValue(value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "First name and Last name is required";
    if (!message) newErrors.message = "Message is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetValues = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      openToast(
        toastId,
        "submit-message",
        "success",
        `Thank you, ${fullName}! Your message has been successfully submitted.`
      );

      resetValues();
    }
  };

  return (
    <Container>
      <Header
        onAboutClick={scrollToAbout}
        onProjectsClick={scrollToProjects}
        setShowContact={setShowContact}
        showContact={showContact}
        onContactClick={() => setShowContact(true)}
        setErrors={setErrors}
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
                <Input
                  autoCapitalize="on"
                  placeholder="Enter your first name and last name"
                  $error={errors.fullName}
                  value={fullName}
                  onChange={(e) => handleOnChange(e.target.value, setFullName)}
                />
              </InputContainer>
              <InputContainer>
                <Label>Email</Label>
                <Input
                  placeholder="Enter your email address"
                  $error={errors.email}
                  value={email}
                  onChange={(e) => handleOnChange(e.target.value, setEmail)}
                />
              </InputContainer>
              <InputContainer>
                <Label>Your Message</Label>
                <TextArea
                  placeholder="Enter your message here"
                  $error={errors.message}
                  value={message}
                  onChange={(e) => handleOnChange(e.target.value, setMessage)}
                />
              </InputContainer>
              <Button onClick={handleSubmit}>Send Message</Button>
            </Column>
            {/* <LottieAnimation
              lottieAnimation={successAnimation}
              width={200}
              height={200}
              autoplay
              loop={false}
            /> */}
          </ContactContent>
        </Content>
      )}
      <Footer
        hide={showContact}
        setShowContact={setShowContact}
        setErrors={setErrors}
      />
      <GoToTop $show={showGoToTop} onClick={goToTop}>
        <Top />
      </GoToTop>
    </Container>
  );
};

export default HomePage;
