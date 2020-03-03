// React Components
import React from 'react';

import ProgressBar
    from "./components/progress/components/progress_bar/ProgressBar.component";

// Assets
import './Control.component.scss';

const Control = (props) => {
    return (
        <div className="control">
            <div className="control_-_progress">
                <h4>{props.count}</h4>
                <div className="control_-_progress_--_progress-bar">
                    <ProgressBar progress={30}/>
                </div>
                <h4>{props.amount}</h4>
            </div>

            <div className="control_-_navigation">
                <div className="control_-_navigation_--_next"></div>
                <div className="control_-_navigation_--_previous"></div>
            </div>
        </div>
    );
};

export default Control;
