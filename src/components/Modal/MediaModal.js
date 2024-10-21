/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { CloseSvg, StyledIconContainer, Image } from "./ModalComponent.styles";
import Modal from "./ModalMedia";

const MediaModal = ({ open, onClose, mediaUrl }) => {
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
      <StyledIconContainer onClick={onClose}>
        <CloseSvg />
      </StyledIconContainer>
      <Image src={mediaUrl} />
    </Modal>
  );
};

export default MediaModal;
