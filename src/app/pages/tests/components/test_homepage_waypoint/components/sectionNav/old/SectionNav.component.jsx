// React Components
import React from 'react';

// Assets
import './SectionNav.component.scss';

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

const SectionNav = () => {
    return (
        <div className="social">
            <div className="social_-_links">
                {
                    data.socialLinks.map((socialLink, key) => {
                        return(
                            <div className="social_-_links_--_link">
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

export default SectionNav;
