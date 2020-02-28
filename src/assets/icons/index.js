import React from "react";

// Local Icons
import typescript from './typescript.svg';

// FontAwesome Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faJsSquare,
    faHtml5,
    faSass,
    faAngular
} from "@fortawesome/free-brands-svg-icons";



const icons = {
    angular: <FontAwesomeIcon icon={faAngular} />,
    html: <FontAwesomeIcon icon={faHtml5} />,
    javascript: <FontAwesomeIcon icon={faJsSquare} />,
    scss: <FontAwesomeIcon icon={faSass} />,
    typescript: <img src={typescript}  alt="typescript-icon"/>
};

export default icons;