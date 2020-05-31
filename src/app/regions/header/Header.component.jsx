// React Components
import React, {useState, useRef} from 'react';

// Assets
import './Header.component.scss';
// import {Helmet} from "react-helmet";
import logo from './../../../assets/images/logo/logo_full.png';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {BurgerMenu, useOnClickOutside} from "./components/";
import {Slide, Fade} from '@material-ui/core';

////////////////////////////////////////////////////////////////////////////////
// MATERIAL UI TABS ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{children: <div/>}}/>);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        minWidth: 100,
        '&:focus': {
            opacity: 1,
        },
    },
}))(props => <Tab disableRipple {...props} />);

// END OF MATERIAL UI ----------------------------------------------------------

const Header = () => {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const navId = "main-nav";

    useOnClickOutside(node, () => setOpen(false));

    // Testing above -----------------------------------------------------------

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = React.useState(0);

    const handleToggleButton = () => {
        setIsActive(!isActive);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="header">
            <div className="header_-_logo">
                <Link to="/home"><img src={logo} alt="logo"/></Link>
            </div>

            <div className="header_-_nav">
                <Slide direction="left" in={open} mountOnEnter unmountOnExit>
                    <div className="header--void">
                        <Fade in={open}>
                            <div className="header_-_nav_--_list">
                                <StyledTabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="styled tabs example">

                                    <StyledTab label="Home"/>
                                    <StyledTab label="Projects"/>
                                    <StyledTab label="Blogs"/>
                                    <StyledTab label="Experience"/>
                                    <StyledTab label="About"/>
                                    <StyledTab label="Contact"/>
                                </StyledTabs>
                            </div>
                        </Fade>
                    </div>

                </Slide>

                <div className="header_-_nav_--_hamburger">

                    <BurgerMenu open={open} setOpen={setOpen}
                                aria-controls={navId}/>
                </div>
            </div>
        </div>
    );
};

// Header.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

export default Header;
