// React Components
import React from 'react';

// Assets
import './CircleMenu.component.scss';

const CircleMenu = () => {
    return (
        <div className="circle-menu">
            <div className="circle">

                <div className="outer-side">
                    <div className="circle-side side-1"></div>
                </div>
                <div className="circle-side side-2"></div>
                <div className="circle-side side-3"></div>
                <div className="circle-side side-4"></div>
                <div className="circle-side side-5"></div>
            </div>
        </div>
    );
};

export default CircleMenu;
