// React Components
import React from 'react';

// Assets
import './Footer.component.scss';

import {
    FaArrowUp
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_-_arrow">
                <FaArrowUp className="footer_-_arrow--icon"/>
            </div>
        </footer>
    );
};

export default Footer;
