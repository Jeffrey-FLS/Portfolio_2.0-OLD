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
                    <a href="#">
                        <FaLinkedinIn className="social_-_links_--_link--icon"/>
                        <h6>LinkedIn</h6>
                    </a>
                </div>

                <div className="social_-_links_--_link">
                    <a href="#">
                        <FaCodepen className="social_-_links_--_link--icon"/>
                        <h6>Codepen</h6>
                    </a>
                </div>

                <div className="social_-_links_--_link">
                    <a href="#">
                        <FaGithubAlt className="social_-_links_--_link--icon"/>
                        <h6>Github</h6>
                    </a>
                </div>

                <div className="social_-_links_--_link">
                    <a href="#">
                        <FaFacebookF className="social_-_links_--_link--icon"/>
                        <h6>Facebook</h6>
                    </a>
                </div>
            </div>

            <div className="social_-_title">
                <h6>Find me on</h6>
            </div>
        </div>
    );
};

export default SocialLinks;
