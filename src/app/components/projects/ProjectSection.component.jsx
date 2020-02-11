// React Components
import React from 'react';

// Assets
import './ProjectSection.component.scss';



const ProjectSection = () => {
    return (
        <div className="project">
            {/*<div className="project_-_info">*/}
                <div className="project_-_description">
                    <h4>Description</h4>
                    <h6>Tabpik is a tab manager that lets you organize your tabs
                        by topics, with the purpose of continuing the use of
                        those tabs across devices and for later use</h6>
                </div>
            {/*</div>*/}

            <div className="project_-_languages">
                <h4>Languages</h4>
            </div>
        </div>
    );
};

export default ProjectSection;
