// React Components
import React from 'react';

// Assets
import './SocialLinks.component.scss';

import {
    FaFacebookF,
    FaGithubAlt,
    FaCodepen,
    FaLinkedinIn
} from "react-icons/all";


const SocialLinks = () => {
    return (
        <div className="social-links">
            <div className="social-links_-_links">
                <FaLinkedinIn className="social-links_-_links--link"/>
                <FaCodepen className="social-links_-_links--link"/>
                <FaGithubAlt className="social-links_-_links--link"/>
                <FaFacebookF className="social-links_-_links--link"/>
            </div>

            <div className="social-links_-_title">
                <h6>Find me on</h6>
            </div>
        </div>
    );
};

export default SocialLinks;
