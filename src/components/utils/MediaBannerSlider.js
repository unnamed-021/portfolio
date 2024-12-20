/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  IconContainer,
  LeftIcon,
  MediaSliderWrapper,
  RightIcon,
  Row,
  MediaSliderContainer,
  Image,
  LinesContainer,
  FillLine,
  Line,
  OpenIcon,
  OpenIconContainer,
} from "./MediaBannerSlider.styles";
import MediaModal from "../Modal/MediaModal";

const MediaBannerSlider = ({
  images,
  activeIndex,
  setActiveIndex,
  timer,
  total,
  type,
  modalPhotos,
}) => {
  const [fillWidth, setFillWidth] = useState(0);
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    if (timer) {
      const interval = setInterval(() => {
        setFillWidth((prevWidth) => {
          if (prevWidth >= 48) {
            setActiveIndex((activeIndex + 1) % total);
            return 0;
          }
          return prevWidth + 0.5;
        });
      }, timer / 128);

      return () => clearInterval(interval);
    }
  }, [timer, activeIndex, setActiveIndex, total]);

  const previousSlide = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    setFillWidth(0);

    setIsTransitioning(true);
    setDirection("left");
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const nextSlide = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setFillWidth(0);
    setActiveIndex(newIndex);

    setIsTransitioning(true);
    setDirection("right");
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    if (timer) {
      const interval = setInterval(() => {
        nextSlide();
      }, timer);

      return () => clearInterval(interval);
    }
  }, [timer, activeIndex, nextSlide]);

  const [translateXImage, setTranslateXImage] = useState("100%");

  useEffect(() => {
    setTranslateXImage(`-${activeIndex * 100}%`);
  }, [activeIndex]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: previousSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <MediaSliderContainer {...swipeHandlers}>
      <OpenIconContainer
        onClick={() => {
          setOpenMediaModal(true);
        }}
      >
        <OpenIcon />
      </OpenIconContainer>
      <MediaSliderWrapper>
        <Row>
          <IconContainer onClick={previousSlide}>
            <LeftIcon />
          </IconContainer>
          <IconContainer onClick={nextSlide} $right>
            <RightIcon />
          </IconContainer>
        </Row>

        {(() => {
          const imagesList = [];
          for (let i = 0; i < images.length; i++) {
            imagesList.push(
              <Image
                key={images[i].id}
                style={{
                  transform: `translateX(${translateXImage})`,
                }}
                src={images[i].url}
                alt={`slider-photo-${i}`}
              />
            );
          }
          return imagesList;
        })()}
      </MediaSliderWrapper>

      <LinesContainer>
        {Array.from({ length: total }).map((_, index) => (
          <Line
            $active={index < activeIndex}
            key={index}
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex(index);
              setFillWidth(0);
            }}
          >
            {index === activeIndex && (
              <FillLine
                style={{
                  transition: true ? "width 0.3s linear" : "unset",
                  width: `${fillWidth}px`,
                }}
              />
            )}
          </Line>
        ))}
      </LinesContainer>
      <MediaModal
        open={openMediaModal}
        onClose={() => setOpenMediaModal(false)}
        type={type}
        images={modalPhotos}
        setActiveIndex={setActiveIndex}
        currentImageIndex={activeIndex}
        direction={direction}
        isTransitioning={isTransitioning}
      />
    </MediaSliderContainer>
  );
};

export default MediaBannerSlider;
