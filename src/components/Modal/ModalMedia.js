import React, { useEffect, useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  ModalContentFade,
} from "./ModalMedia.styles";

const ModalMedia = ({ isOpen, children, phone }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), 250);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.overflowY = "hidden";
      document.documentElement.style.paddingLeft = 0;
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isVisible]);

  return (
    isVisible && (
      <ModalBackground $open={isOpen}>
        <ModalContainer $center>
          <ModalContentFade $open={isOpen} $phone={phone}>
            {children}
          </ModalContentFade>
        </ModalContainer>
      </ModalBackground>
    )
  );
};

export default ModalMedia;
