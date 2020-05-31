// React Components
import React from 'react';

// Assets
import './ProjectSection.component.scss';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import assets from "assets";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import {faJsSquare} from "@fortawesome/free-brands-svg-icons";

// Data
import data from "data";
import {Carousel} from "./components";


//
// const dataColumn = (data) => {
//     const colOne = [], colTwo = [];
//
//     data.forEach((item, index) => {
//         if (index %= 0) {
//             colOne.push(item);
//         } else {
//             colTwo.push(item);
//         }
//     });
//
//     return [colOne, colTwo];
// };

// const dataColumn = (arrData) => {
//   if (arrData.length %= 0) {
//         return data;
//     } else {
//
//   }
// };

const ProjectSection = () => {

    const project = data.projects[0];
    const icons = assets.icons;

    // const removeSpaces = (strVal) => {
    //     return strVal.split('');
    // };

    const spaceUnderscore = (strVal) => {
        // return strVal.replace(/[0-9\s]/g, '');
        return strVal.split(' ').join('_');
    };

    const jsxIconDetailRender = (arrIcons) => {
        return arrIcons.map((icon, index) => <div className="icon-detail" key={index}>
            <div className="icon-detail_-_icon">
                {icons[spaceUnderscore(icon).toLowerCase()]}
            </div>
            <h6>{icon}</h6>
        </div>)
    };

    return (
        <div className="project">
            {/* <Helmet>
                <style>{'body { background-color: #fafafa; }'}</style>
            </Helmet> */}

            <div className="row">
                <div className="project-left-col col-4">
                    <div className="project_-_description">
                        <h4>{project.name}</h4>
                        <h6>{project.description}</h6>
                    </div>

                    <div className="project_-_languages">
                        <h4>Languages </h4>

                        <div className="project_-_languages_--_container">
                            {jsxIconDetailRender(project.languages)}
                        </div>
                    </div>
                </div>

                <div className="project-right-col col-8">
                         <div className="project_-_carousel">
                             <Carousel projects={project}/>
                         </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                         <div className="project_-_technologies">
                             <h4>Technologies</h4>

                             <div className="project_-_technologies_--_container">
                                 {jsxIconDetailRender(project.technologies)}
                             </div>
                         </div>
                </div>

                <div className="col-4">
                     <div className="project_-_tools">
                         <h4>Tools</h4>

                         <div className="project_-_tools_--_container">
                             {jsxIconDetailRender(project.tools)}
                         </div>
                     </div>
                </div>
            </div>
        </div>

        // <div className="project">
        //     <div className="project_-_description">
        //         <h4>{project.name}</h4>
        //         <h6>{project.description}</h6>
        //     </div>
        //
        //
        //     <div className="project_-_languages">
        //         <h4>Languages</h4>
        //
        //         <div className="project_-_languages_--_container">
        //             { project.languages.map(language => <h6>{language}</h6>) }
        //         </div>
        //     </div>
        //
        //     <div className="project_-_carousel">
        //         <Carousel project={project}/>
        //     </div>
        //
        //     <div className="project_-_technologies">
        //         <h4>Technologies</h4>
        //
        //         <div className="project_-_technologies_--_container">
        //             { project.technologies.map(technology => <h6>{technology}</h6>) }
        //         </div>
        //     </div>
        //
        //     <div className="project_-_tools">
        //         <h4>Tools</h4>
        //
        //         <div className="project_-_tools_--_container">
        //             { project.tools.map(tool => <h6>{tool}</h6>) }
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProjectSection;
