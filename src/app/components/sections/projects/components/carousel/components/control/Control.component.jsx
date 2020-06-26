// React Components
// import React from "react";
import React, { useState, useEffect } from 'react';

// import ProgressBar from "./components/progress_bar/ProgressBar.component";
import { TestProgressBar } from './components';

// Assets
import "./Control.component.scss";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faJsSquare,
//     faHtml5,
//     faSass,
//     faAngular,
//     faChrome
// } from "@fortawesome/free-brands-svg-icons";

// Commenting for Commit

import {
  faChevronCircleUp,
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";

const Control = props => {

  const [animateChange, setAnimateChange] = useState(true);
  
  const {count, amount} = props;

  const animateTimerDelay = () => {
    setInterval(() => setAnimateChange(true)
    , 1000);
  }

  const handleClickNext = () => {
    setAnimateChange(false);
    animateTimerDelay();
    // setAnimateChange(true);
    
    // alert("HELLO");
  };

  const handleClickPrevious = () => {
    setAnimateChange(false);
    animateTimerDelay();

    // setAnimateChange(true);
  };


  return (
    <div className="control">
      <div className="control_-_progress">
        <h4>0{count}</h4>
        <div className="control_-_progress_--_progress-bar">
          {/* <ProgressBar isAnimation={animateChange} progressDuration={10}/> */}
          <TestProgressBar isAnimation={props.isTimerActive} progressDuration={10}/>
          {/* <ProgressBar progress={30} /> */}
        </div>
        <h4>0{amount}</h4>
      </div>

      <div className="control_-_navigation">
        <div className="control_-_navigation_--_next"
            onClick={() => handleClickNext()}>
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            className="control_-_navigation_--_next--icon"
            size="3x"
          />
        </div>
        <div className="control_-_navigation_--_previous" 
            onClick={() => handleClickPrevious()}>
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            className="control_-_navigation_--_previous--icon"
            size="3x"
          />
        </div>
      </div>
    </div>  
  );
};

export default Control;
