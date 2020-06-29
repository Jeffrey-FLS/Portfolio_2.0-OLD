// React Components
import React, { useState, useEffect } from "react";

// Assets
import "./Carousel.component.scss";

// import images from "assets/images";
import images from "assets/images";
import { Control, Timer } from "./components";
// import ProgressBar from "../progress/components/progress_bar/ProgressBar.component";

/**
 * @param {{ projects: { images: any[]; }; }} props
 */
const Carousel = (props) => {
  // const image = props.projects.images[0];
  // const images = props.projects.images;

  const arrImageLength = props.projects.images.length;

  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(arrImageLength);

  const [currentImage, setCurrentImage] = useState(props.projects.images[0]);

  /* TIMER TEST *************************************************************/

  const timerInit = 1;
  const timerLimit = 10;

  const [timerSeconds, setTimerSeconds] = useState(timerInit);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const timerToggle = () => {
    setIsTimerActive(!isTimerActive);
  };

  const timerReset = () => {
    setTimerSeconds(timerInit);
    setIsTimerActive(false);
  };

  /* END TEST ***************************************************************/

  // const rotateImage = () => {
  //   while (true) {
  //     for (let i = 0; i < arrImageLength; i++) {
  //       setInterval(() => {
  //         setCurrentImage(props.projects.images[i]);
  //       }, 1000);
  //     }
  //   }
  // };

  const rotateImage = () => {
    const imageListLength = props.projects.images.length;

    if (currentImage === props.projects.images[imageListLength]) {
      setCurrentImage(props.projects.images[0]);
    } else {
      setCurrentImage(props.projects.images[0]);
    }

    while (true) {
      for (let i = 0; i < arrImageLength; i++) {
        setInterval(() => {
          setCurrentImage(props.projects.images[i]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    let interval = null;

    if (timerSeconds >= timerLimit) {
      timerToggle();
      // setTimerSeconds(1);
    } else if (isTimerActive) {
      interval = setInterval(() => {
        setTimerSeconds((timerSeconds) => timerSeconds + 1);
      }, 1000);
    } else if (!isTimerActive && timerSeconds !== timerInit) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timerSeconds]);

  // const handleClickNextSlide = () => {

  // };

  // const handleClickPreviousSlide = () => {

  // };

  return (
    <div className="carousel">
      <div className="carousel_-_media">
        <img src={images.tabpik[currentImage]} alt={currentImage} />
        <div className="carousel_-_media_--_control">
          <Control
            count={count}
            amount={amount}
            timerState={isTimerActive}
          />
        </div>
        <div className="carousel_-_media_--_nav" />
      </div>

      <div className="carousel_-_nav" />

      <h1>{timerSeconds}</h1>
    </div>
  );
};

export default Carousel;
