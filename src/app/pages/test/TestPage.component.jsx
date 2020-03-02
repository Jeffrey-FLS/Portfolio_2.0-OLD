// React Components
import React from 'react';

// Assets
import './TestPage.component.scss';
import {Helmet} from "react-helmet";
import {Carousel} from "../../components/projects/components";

const TestPage = () => {
    return (
        <div className="test-page">
            <Helmet>
                <style>{'body { background-color: #212121; }'}</style>
            </Helmet>

            <Carousel/>
        </div>
    );
};

export default TestPage;
