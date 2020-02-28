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


const localIcons = {
    typescript: typescript
};

const jsxFontAwesomeIcon = (icon) => {
    return <FontAwesomeIcon icon={icon} className="icon-detail_-_icon" size='5x'/>
};

const jsxImageIcon = (iconName) => {
    return <img src={localIcons[iconName]}  alt={`${iconName}-icon`}/>
};

// const jsxSvgIcon = (iconName) => {
//     return <image className="my-svg-alternate" width="96" height="96"
//                   src="ppngfallback.png"/>
// };



const icons = {
    angular: jsxFontAwesomeIcon(faAngular),
    html: jsxFontAwesomeIcon(faHtml5),
    javascript: jsxFontAwesomeIcon(faJsSquare),
    scss: jsxFontAwesomeIcon(faSass),
    typescript: jsxImageIcon('typescript')
};

export default icons;