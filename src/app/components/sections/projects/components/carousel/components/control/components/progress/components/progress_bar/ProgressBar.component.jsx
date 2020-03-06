// React Components
import React from 'react';
// import styled from "styled-components";

// Assets
import './ProgressBar.component.scss';

const ProgressBar = (props) => {

    return (
        <div className="progress-bar">
            <div className="progress-bar_-_bar"
                style={{width: `${props.progress}%`}}/>
        </div>
    );
};

export default ProgressBar;
