// React Components
import React from 'react';

// Assets
import './Carousel.component.scss';

import images from "assets/images";

const Carousel = (props) => {

    const image = props.project.images[0];

    return (
        <div className="project-carousel">

            {/*{alert(images[image])}*/}

            <div className="project-carousel_-_media">
                <img src={images.tabpik[image]} alt={image}/>
                <div className="project-carousel_-_media_--_nav">
                </div>
            </div>

            <div className="project-carousel_-_nav">

            </div>
        </div>
    );
};

export default Carousel;
