// React Components
import React from 'react';

// Assets
import './HomePage.component.scss';

import {Helmet} from 'react-helmet';
import {SocialLinks, CircleMenu} from './components';
// import Header from "../../components/header/Header.component";

const HomePage = () => {
    return (
        <div className="home container-fluid">

            <Helmet>
                <style>{'body { background-color: #212121; }'}</style>
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="home_-_intro-about offset-1 col-10 offset-1">
                        <h3>Hi, my name is </h3>
                        <h1>Jeffrey Paulino</h1>
                        <h1>I build things for the web</h1>
                    </div>
                </div>
            </div>


            {/*<div className="home_-_circle-menu">*/}
            {/*    <CircleMenu/>*/}
            {/*</div>*/}

            <div className="home_-_social-links">
                <SocialLinks/>
            </div>
        </div>
    );
};

export default HomePage;
