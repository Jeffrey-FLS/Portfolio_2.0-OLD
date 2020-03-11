// React Components
import React from 'react';

// Assets
import './TestTemplate.component.scss';
import {Helmet} from "react-helmet";


// Data
// import data from "data";
// import assets from "../../../assets";


const TestTemplate = () => {
    // const projects = data.projects[0];
    // const icons = assets.icons;

    return (
        <div className="test-template">
            <Helmet>
                <style>{'body { background-color: #212121; }'}</style>
            </Helmet>

        </div>
    );
};

export default TestTemplate;
