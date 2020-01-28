// React Components
import React,{useState, useEffect, useRef} from 'react';

// Assets
import './Header.component.scss';
// import {Helmet} from "react-helmet";
import {HamburgerSlider} from 'react-animated-burgers';
import logo from './../../../assets/images/logo/logo_full.png';
import {Link} from 'react-router-dom';

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header">
            <div className="header_-_logo">
                <Link to="/home"><img src={logo} alt="logo"/></Link>
            </div>

            <div className="header_-_menu">
                <HamburgerSlider
                    className="header_-_menu--hamburger"
                    isActive={isActive}
                    toggleButton={toggleButton}
                    barColor="#fff"
                    buttonWidth={30}
                />
            </div>
        </header>
    );
};

export default Header;
