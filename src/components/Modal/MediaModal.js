/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  CloseSvg,
  StyledIconContainer,
  Image,
  Relative,
  Dots,
  Dot,
} from "./ModalComponent.styles";
import Modal from "./ModalMedia";

const MediaModal = ({
  open,
  onClose,
  mediaUrl,
  type,
  single,
  images,
  currentImageIndex,
  setActiveIndex,
  isTransitioning,
  direction,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Modal isOpen={open} onClose={onClose}>
      {single ? (
        <Relative>
          <StyledIconContainer onClick={onClose}>
            <CloseSvg />
          </StyledIconContainer>
          <Image
            src={mediaUrl}
            $phone={type === "app"}
            style={{
              aspectRatio: type === "app" ? "9 / 16" : "16 /9",
              width: type === "app" ? "unset" : "100%",
            }}
          />
        </Relative>
      ) : (
        <Relative>
          <StyledIconContainer onClick={onClose}>
            <CloseSvg />
          </StyledIconContainer>
          <Image
            $isTransitioning={isTransitioning}
            $direction={direction}
            src={images[currentImageIndex].url}
            $phone={type === "app"}
            style={{
              aspectRatio: type === "app" ? "9 / 16" : "16 /9",
              width: type === "app" ? "unset" : "100%",
            }}
          />
          <Dots>
            {images.map((e, index) => (
              <Dot
                key={index}
                $active={index === currentImageIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </Dots>
        </Relative>
      )}
    </Modal>
  );
};

export default MediaModal;
