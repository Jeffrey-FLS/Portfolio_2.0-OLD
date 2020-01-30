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
        <div className="social">
            <div className="social_-_links">
                <div className="social_-_links_--_link">
                    <FaLinkedinIn className="social_-_links_--_link--icon"/>
                    <h6>LinkedIn</h6>
                </div>

                <div className="social_-_links_--_link">
                    <FaCodepen className="social_-_links_--_link--icon"/>
                    <h6>Codepen</h6>
                </div>

                <div className="social_-_links_--_link">
                    <FaGithubAlt className="social_-_links_--_link--icon"/>
                    <h6>Github</h6>
                </div>

                <div className="social_-_links_--_link">
                    <FaFacebookF className="social_-_links_--_link--icon"/>
                    <h6>Facebook</h6>
                </div>
            </div>

            <div className="social_-_title">
                <h6>Find me on</h6>
            </div>
        </div>
    );
};

export default SocialLinks;
