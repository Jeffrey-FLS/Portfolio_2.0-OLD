// React Components
import React from 'react';

// Assets
import './ProjectSection.component.scss';

// Data
import data from "data";


const ProjectSection = () => {

    const project = data.projects[0];

    return (
        <div className="project">
            <div className="project_-_description">
                <h4>Description</h4>
                <h6>{project.description}</h6>
            </div>


            <div className="project_-_languages">
                <h4>Languages</h4>
            </div>

            <div className="project_-_carousel">

            </div>

            <div className="project_-_technologies">
                <h4>Technologies</h4>
            </div>

            <div className="project_-_tools">
                <h4>Tools</h4>
            </div>
        </div>
    );
};

export default ProjectSection;
