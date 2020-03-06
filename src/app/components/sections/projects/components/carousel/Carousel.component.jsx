// React Components
import React, { useState } from 'react';

// Assets
import './Carousel.component.scss';

// import images from "assets/images";
import images from "assets/images";
import {Control} from "./components";
// import ProgressBar from "../progress/components/progress_bar/ProgressBar.component";

const Carousel = (props) => {
    const image = props.project.images[0];
    // const images = props.projects.images;

    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(5);



    // const handleClickNextSlide = () => {

    // };

    // const handleClickPreviousSlide = () => {

    // };

    return (
        <div className="carousel">
            <div className="carousel_-_media">
                <img src={images.tabpik[image]} alt={image}/>
                <div className="carousel_-_media_--_control">
                    <Control count={count} amount={amount}/>
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
