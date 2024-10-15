import React, { useEffect } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${(props) => props.image});
  width: 30rem;
  height: 50rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  transition: background-image 0.3s ease-in-out;
  justify-content: center;
  position: relative;
  z-index: 1;

  &:hover {
    background-image: url(${(props) => props.hoverImage});
  }
`;

const ImagePreloader = ({ children, image, hoverImage, width, height }) => {
  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();

    img1.src = image;
    img2.src = hoverImage;

    return () => {
      img1.onload = null;
      img2.onload = null;
    };
  }, [image, hoverImage]);

  return (
    <ImageContainer
      image={image}
      hoverImage={hoverImage}
      style={{ width: width, height: height }}
    >
      {children}
    </ImageContainer>
  );
};

export default ImagePreloader;
