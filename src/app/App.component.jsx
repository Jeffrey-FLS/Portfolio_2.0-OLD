// React Components
import React from 'react';
import {Switch, Route} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

// Assets
import './App.component.scss';

// App Components
import {
    Footer,
    Header
} from "./regions";

import {
    AboutSection,
    BlogSection,
    ContactSection,
    ExperienceSection,
    ProjectSection
} from "./components";

import {
    HomePage
} from "./pages";

const sections = {
    project: ProjectSection,
    experience: ExperienceSection,
    blog: BlogSection,
    about: AboutSection,
    contact: ContactSection
};

function App() {
    return (
        <div className="App">
            <Header/>

            {/*<Scrollbars autoWidth style={{height: 1000}}>*/}
                <div className="app_-_home">
                    <HomePage/>
                </div>

                <div className="app_-_main container">
                    {/*<div className="row">*/}
                    <ProjectSection/>
                    <ExperienceSection/>
                    <BlogSection/>
                    <AboutSection/>
                    <ContactSection/>
                    {/*</div>*/}
                </div>

                {/*  <Switch>*/}
                {/*  /!*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*!/*/}
                {/*  <Route path="/" component={HomePage}/>*/}
                {/*</Switch>*/}


                <div className="app_-_footer">
                    {/*<div className="row">*/}
                    <Footer/>
                    {/*</div>*/}
                </div>
            {/*</Scrollbars>*/}
        </div>
    );
}

export default App;
