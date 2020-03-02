// React Components
import React, { useState } from 'react';

// Assets
import './Carousel.component.scss';

import images from "assets/images";
// import ProgressBar from "../progress/components/progress_bar/ProgressBar.component";

const Carousel = (props) => {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);


    const image = props.project.images[0];

    return (
        <div className="carousel">

            {/*{alert(images[image])}*/}

            <div className="carousel_-_media">
                <img src={images.tabpik[image]} alt={image}/>
                <div className="carousel_-_media_--_control">
                    <div className="cm_--_control">
                        <h4>{count}</h4>
                        <div className="cm_--_control_---_progress-bar">
                            {/*<ProgressBar/>*/}
                        </div>
                        <h4>{amount}</h4>
                    </div>
                </div>
                <div className="carousel_-_media_--_nav">
                </div>
            </div>

            <div className="carousel_-_nav">

            </div>
        </div>
    );
};

export default Carousel;
