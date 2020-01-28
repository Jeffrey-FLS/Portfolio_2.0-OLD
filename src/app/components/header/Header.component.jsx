// React Components
import React,{useState, useEffect, useRef} from 'react';

// Assets
import './Header.component.scss';
// import {Helmet} from "react-helmet";
import {HamburgerSlider} from 'react-animated-burgers';
import logo from './../../../assets/images/logo/logo_full.png';
import {Link} from 'react-router-dom';

const Header = () => {

    const prevCountRef = useRef();

    const [isActive, setIsActive] = useState(false);

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    // });

        useEffect(() => {
            function toggleButton() {
                setIsActive()
            }
        });

    return (
        <header>
            <div className="header_-_logo">
                <Link to="/home"><img src={logo} alt="logo"/></Link>
            </div>

            <div className="header_-_menu">
                {/*<HamburgerSlider*/}
                {/*    className="header_-_nav-links_--_menu--hamburger"*/}
                {/*    isActive={this.state.isActive}*/}
                {/*    toggleButton={this.toggleButton}*/}
                {/*    barColor="#fff"*/}
                {/*    buttonWidth={30}*/}
                {/*/>*/}
            </div>
        </header>
    );
};

export default Header;
