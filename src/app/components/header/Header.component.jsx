// React Components
import React from 'react';

// Assets
import './Header.component.scss';
import {Helmet} from "react-helmet";

const Header = () => {
    return (
        <header>
            {/*<Helmet>*/}
            {/*    <style>{'body { background-color: #212121; }'}</style>*/}
            {/*</Helmet>*/}
            <h1>Hello From Header</h1>
        </header>
    );
};

export default Header;
