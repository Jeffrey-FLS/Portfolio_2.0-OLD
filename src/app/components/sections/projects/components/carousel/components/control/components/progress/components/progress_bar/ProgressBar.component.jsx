// React Components
// import React from 'react';
// import styled from "styled-components";
import React, { useState, useEffect } from 'react';


// Assets
import './ProgressBar.component.scss';

const ProgressBar = (props) => {

    const [isAnimated, setIsAnimated] = useState(props.animate);

    const duration = "10" + "s";

    useEffect(() => {
       setIsAnimated(props.animate)
    });


    return (
        <div className="progress-bar">
            <div className={isAnimated ? "progress-bar_-_bar" :""}
                style={{animationDuration: `${duration}`}}
            />

            {/* <div className="progress-bar_-_bar"
                style={{width: `${props.progress}%`}}/> */}
        </div>
    );
};

export default ProgressBar;
