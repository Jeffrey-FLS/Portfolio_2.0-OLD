// React Components
// import React from 'react';
// import styled from "styled-components";
import React, { useState, useEffect } from 'react';

import { CSSTransition } from 'react-transition-group';

// Assets
// import './TestProgressBar.component.scss';

const TestProgressBar = (props) => {

    const {isAnimation, progressDuration} = props;

    const [isAnimated, setIsAnimated] = useState(isAnimation);

    // const [duration, setDuration] = useState("5s");

    const duration = progressDuration.toString().concat("s");
    
    // const duration = "10" + "s";

    useEffect(() => {
       setIsAnimated(isAnimation);
    //    alert(duration);
    });


    return (
        <div className="progress-bar">
            
            <CSSTransition className={isAnimated ? "progress-bar_-_bar" :""}
                style={{animationDuration: `${duration}`}}
            ><div></div></CSSTransition> 
            
            {/* <div className={isAnimated ? "progress-bar_-_bar" :""}
                style={{animationDuration: `${duration}`}}
            /> */}
        </div>
    );
};

export default TestProgressBar;
