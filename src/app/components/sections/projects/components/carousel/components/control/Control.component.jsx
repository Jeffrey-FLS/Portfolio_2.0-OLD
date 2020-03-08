// React Components
import React from "react";

import ProgressBar from "./components/progress/components/progress_bar/ProgressBar.component";

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

import {
  faChevronCircleUp,
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";

const Control = props => {

   const {count, amount} = props;


  return (
    <div className="control">
      <div className="control_-_progress">
        <h4>0{count}</h4>
        <div className="control_-_progress_--_progress-bar">
          <ProgressBar progress={30} />
        </div>
        <h4>0{amount}</h4>
      </div>

      <div className="control_-_navigation">
        <div className="control_-_navigation_--_next"
            onClick={() => props.handleClickNext()}>
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            className="control_-_navigation_--_next--icon"
            size="3x"
          />
        </div>
        <div className="control_-_navigation_--_previous" 
            onClick={() => props.handleClickPrevious()}>
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
