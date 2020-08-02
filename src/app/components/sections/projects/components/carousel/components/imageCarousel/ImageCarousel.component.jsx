// React Components
// import React from 'react';

import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Assets
import './ImageCarousel.component.scss';
import images from "assets/images";

const ImageCarousel = (props) => {
  useEffect(() => {}, [props]);

  return (
    <>
      <TransitionGroup className="image-carousel">
        <CSSTransition key={props.image} timeout={4500} classNames="slide">
          {/* <img src={images.tabpik[props.image]} alt={props.image} /> */}
          <h1>hello</h1>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default ImageCarousel;
