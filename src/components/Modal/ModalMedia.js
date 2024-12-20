import React, { useEffect, useRef, useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  ModalContentFade,
} from "./ModalMedia.styles";

const ModalMedia = ({ isOpen, children, onClose }) => {
  const modalContentRef = useRef(null);
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
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isVisible]);

  const handleBackgroundClick = (e) => {
    if (!modalContentRef.current.contains(e.target)) {
      onClose();
    }
  };
  return (
    isVisible && (
      <ModalBackground $open={isOpen} onClick={handleBackgroundClick}>
        <ModalContainer $center>
          <ModalContentFade $open={isOpen} ref={modalContentRef}>
            {children}
          </ModalContentFade>
        </ModalContainer>
      </ModalBackground>
    )
  );
};

export default ModalMedia;
