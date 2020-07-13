// React Components
import React, { useState, useEffect } from "react";

// Assets
import "./Carousel.component.scss";

// Committing

// import images from "assets/images";
import images from "assets/images";
import { Control, Timer } from "./components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import { CSSTransition } from "react-transition-group";
// import ProgressBar from "../progress/components/progress_bar/ProgressBar.component";

/**
 * @param {{ projects: { images: any[]; }; }} props
 */
const Carousel = (props) => {
  // const image = props.projects.images[0];
  // const images = props.projects.images;

  const arrImageLength = props.projectImages.length;

  const defaultImage = { id: 0, image: props.projectImages[0] };

  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(arrImageLength);

  const [currentImage, setCurrentImage] = useState(defaultImage);

  /* TIMER TEST *************************************************************/

  const timerInit = 1;
  const timerLimit = 10;

  const [timerSeconds, setTimerSeconds] = useState(timerInit);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const timerToggle = () => {
    setIsTimerActive((isTimerActive) => !isTimerActive);
    // alert(`Timer is ${isTimerActive}`)
    console.log(`Timer is ${isTimerActive}`);
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
    // const imageListLength = props.projectImages.length;
    const imageListLength = arrImageLength;

    if (currentImage.id >= imageListLength - 1) {
      setCurrentImage(defaultImage);
    } else if (currentImage.id < imageListLength) {
      const newId = currentImage.id + 1;
      setCurrentImage({ id: newId, image: props.projectImages[newId] });
    }

    console.log(`Current image is ${JSON.stringify(currentImage)}`);
  };

  const delayRotation = () => {
    setTimeout(() => {
      timerToggle();
      // setIsTimerActive(!isTimerActive);
      // alert(`Timer is ${isTimerActive}`)
      // alert("hEllo");
    }, 5000);
  };

  useEffect(() => {
    let interval = null;
    let timeout = null;

    console.log("hello world");
    // let timer = null;

    if (timerSeconds > timerLimit) {
      timerToggle();
      timerReset();
      rotateImage();
      delayRotation();

      // timeout = setTimeout(() => {
      //   timerToggle();
      //   alert("hEllo");
      // }, 5000);

      // setTimeout(() => {
      //   timerToggle();
      // }, 1000);

      // alert(currentImage.id);
      // timerToggle();
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
      {/* {alert(JSON.stringify(arrImageLength))} */}

      <div className="carousel_-_media">
        <TransitionGroup className="carousel_-_media_--_container">
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <img
              src={images.tabpik[currentImage.image]}
              alt={currentImage.image}
            />
          </CSSTransition>
        </TransitionGroup>
        <div className="carousel_-_media_--_control">
          <Control count={count} amount={amount} timerState={isTimerActive} />
        </div>
        <div className="carousel_-_media_--_nav" />
      </div>

      <div className="carousel_-_nav" />

      <h1>{timerSeconds}</h1>
    </div>
  );
};

export default Carousel;
