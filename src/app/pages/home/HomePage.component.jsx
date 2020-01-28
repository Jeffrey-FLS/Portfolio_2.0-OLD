// React Components
import React from 'react';

// Assets
import './HomePage.component.scss';

import {Helmet} from 'react-helmet';
import Header from "../../components/header/Header.component";

const HomePage = () => {
    return (
        <main>
            <Header/>

            <Helmet>
                <style>{'body { background-color: #212121; }'}</style>
            </Helmet>
            <h1>Hello From HomePage</h1>
        </main>
    );
};

export default HomePage;
