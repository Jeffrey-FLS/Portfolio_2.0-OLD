// React Components
import React from "react";

// Assets
import "./Intro.component.scss";

import { Helmet } from "react-helmet";
import { SocialLinks } from './components';

const IntroSection = () => {
  return (
    <div className="intro container-fluid">

            <Helmet>
                <style>{'body { background-color: #212121; }'}</style>
            </Helmet>

            <div className="intro_-_social-links">
                <SocialLinks/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="intro_-_intro-about section offset-2 col-8 offset-2">
                        <h3>Hi, my name is </h3>
                        <h1>Jeffrey Paulino</h1>
                        <h1>I build things for the web</h1>
                    </div>
                </div>
            </div>

            <div className="intro_-_scroll">
                <div className="intro_-_scroll_--_bar">
                    <div className="intro_-_scroll_--_bar-mouse"/>
                </div>
            </div>

        </div>
  );
};

export default IntroSection;
