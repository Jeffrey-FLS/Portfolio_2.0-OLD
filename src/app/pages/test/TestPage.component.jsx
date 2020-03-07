// React Components
import React from 'react';

// Assets
import './TestPage.component.scss';
import {Helmet} from "react-helmet";
// import {Carousel} from "../../components/sections/projects/components";
import {Carousel} from "app/components/sections/projects/components";


// Data
import data from "data";
// import assets from "../../../assets";


const TestPage = () => {
    const projects = data.projects[0];
    // const icons = assets.icons;

    return (
        <div className="test-page">
            <Helmet>
                <style>{'body { background-color: #212121; }'}</style>
            </Helmet>

            <Carousel projects={projects}/>
        </div>
    );
};

export default TestPage;
