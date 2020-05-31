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

import data from "data";

const iconMapper = {
    LinkedIn: <FaLinkedinIn/>,
    Codepen: <FaCodepen/>,
    Github: <FaGithubAlt/>,
    Facebook: <FaFacebookF/>
};

const SocialLinks = () => {
    return (
        <div className="social">
            <div className="social_-_links">
                {
                    data.socialLinks.map((socialLink, index) => {
                        return(
                            <div className="social_-_links_--_link" key={index}>
                                <a href={socialLink.link}>
                                    {iconMapper[socialLink.name]}
                                    <h6>{socialLink.name}</h6>
                                </a>
                            </div>
                        );
                    })
                }
            </div>

            <div className="social_-_title">
                <h6>Find me on</h6>
            </div>
        </div>
    );
};

export default SocialLinks;
