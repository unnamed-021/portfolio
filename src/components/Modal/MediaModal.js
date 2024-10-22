/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  CloseSvg,
  StyledIconContainer,
  Image,
  Relative,
} from "./ModalComponent.styles";
import Modal from "./ModalMedia";

const MediaModal = ({ open, onClose, mediaUrl, type }) => {
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
    <Modal isOpen={open} onClose={onClose} phone={type === "mobile"}>
      <Relative>
        <StyledIconContainer onClick={onClose}>
          <CloseSvg />
        </StyledIconContainer>
        <Image src={mediaUrl} />
      </Relative>
    </Modal>
  );
};

export default MediaModal;
