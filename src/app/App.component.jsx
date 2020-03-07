// React Components
import React from 'react';
import {Switch, Route} from "react-router-dom";
// import { Scrollbars } from 'react-custom-scrollbars';
// import CustomScroll from 'react-custom-scroll';

// Assets
import './App.component.scss';

// App Components
import {
    Footer,
    Header
} from "./regions";

// import {
//     AboutSection,
//     BlogSection,
//     ContactSection,
//     ExperienceSection,
//     ProjectSection
// } from "./components";

import {
    HomePage, TestPage
} from "./pages";

// const sectionsMapper = {
//     ProjectSection: ProjectSection,
//     ExperienceSection: ExperienceSection,
//     BlogSection: BlogSection,
//     AboutSection: AboutSection,
//     ContactSection: ContactSection
// };
//
// const sectionsList = [
//     ProjectSection,
//     ExperienceSection,
//     BlogSection,
//     AboutSection,
//     ContactSection
// ];

// const sections = [
//     <ProjectSection/>,
//     <ExperienceSection/>,
//     <BlogSection/>,
//     <AboutSection/>,
//     <ContactSection/>
// ];

function App() {
    return (
        <div className="App">
            <Header/>
            {/* <div className="app_-_home">
               <HomePage/>
            </div> */}

            {/* <main className="app_-_main container">
               {sections.map((section) => {
                    return (<div className="row">
                        <div className="app_-_main_--_section col-12">
                            {section}
                        </div>
                    </div>);
                })}
            </main> */}

            {/* <TestPage/> */}

            {/* <HomePage/> */}

            {/* <main className="app_-_main container"> */}
            <main className="app_-_main">
                <Switch>
                    <Route path="/test" component={TestPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </main>

            <div className="app_-_footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;


                // {/* <Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/> */}
