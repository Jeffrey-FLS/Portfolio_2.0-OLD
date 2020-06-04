// React Components
import React, { useState, useEffect } from 'react';

// Assets
import './Carousel.component.scss';

// import images from "assets/images";
import images from "assets/images";
import {Control} from "./components";
// import ProgressBar from "../progress/components/progress_bar/ProgressBar.component";

/**
 * @param {{ projects: { images: any[]; }; }} props
 */
const Carousel = (props) => {
    // const image = props.projects.images[0];
    // const images = props.projects.images;

    const arrImageLength = props.projects.images.length;

    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(arrImageLength);

    const [currentImage, setCurrentImage] = useState(props.projects.images[0]);


 

    const rotateImage = () => {
        while(true) {
            for(let i = 0; i < arrImageLength; i++) {
                setInterval(() => {
                    setCurrentImage(props.projects.images[i])
                }, 1000)
            }    
        }
    };

    useEffect(() => {
        const interval = (() => {
            rotateImage();
        });

        return () => {
            clearInterval(interval);
          };
        // rotateImage();
        // clearInterval(rotateImage(arrImageLength));
     }, []);

    // const handleClickNextSlide = () => {

    // };

    // const handleClickPreviousSlide = () => {

    // };

    return (
        <div className="carousel">
            <div className="carousel_-_media">
                <img src={images.tabpik[currentImage]} alt={currentImage}/>
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
