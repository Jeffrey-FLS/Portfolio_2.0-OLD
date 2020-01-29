// React Components
import React,{useState, useEffect, useRef} from 'react';

// Assets
import './Header.component.scss';
// import {Helmet} from "react-helmet";
import {HamburgerSlider} from 'react-animated-burgers';
import logo from './../../../assets/images/logo/logo_full.png';
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = React.useState(0);

    const handleToggleButton = () => {
        setIsActive(!isActive);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    ////////////////////////////////////////////////////////////////////////////
    // TESTING /////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    // const AntTabs = withStyles({
    //     root: {
    //         borderBottom: '1px solid #e8e8e8',
    //     },
    //     indicator: {
    //         backgroundColor: '#1890ff',
    //     },
    // })(Tabs);

    const StyledTabs = withStyles({
        indicator: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '& > div': {
                maxWidth: 40,
                width: '100%',
                // backgroundColor: '#635ee7',
                backgroundColor: '#0091EA',
            },
        },
    })(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

    const StyledTab = withStyles(theme => ({
        root: {
            textTransform: 'none',
            color: '#fff',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(1),
            '&:focus': {
                opacity: 1,
                textColor: 'yellow',

            },
            '&:aria-selected': {
                // color: '#0091EA',
                color: 'yellow',
            },
        },
    }))(props => <Tab disableRipple {...props} />);

    return (
        <header className="header">
            <div className="header_-_logo">
                <Link to="/home"><img src={logo} alt="logo"/></Link>
            </div>

            <div className="header_-_menu">
                <div className="header_-_menu--list">
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <StyledTab label="Home" />
                        <StyledTab label="Projects" />
                        <StyledTab label="Blogs" />
                        <StyledTab label="Experience" />
                        <StyledTab label="About" />
                        <StyledTab label="Contact" />
                    </StyledTabs>


                {/*<Tabs*/}
                {/*    value={value}*/}
                {/*    onChange={handleChange}*/}
                {/*    indicatorColor="primary"*/}
                {/*    textColor="primary"*/}
                {/*>*/}
                {/*    <Tab label="Home" />*/}
                {/*    <Tab label="Projects" />*/}
                {/*    <Tab label="Blogs" />*/}
                {/*    <Tab label="Experience" />*/}
                {/*    <Tab label="About" />*/}
                {/*    <Tab label="Contact" />*/}
                {/*</Tabs>*/}
                </div>

                <HamburgerSlider
                    className="header_-_menu--hamburger"
                    isActive={isActive}
                    toggleButton={handleToggleButton}
                    barColor="#fff"
                    buttonWidth={30}
                />
            </div>
        </header>
    );
};

// Header.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

export default Header;
