// React Components
import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Scrollbars } from 'react-custom-scrollbars';
// import CustomScroll from 'react-custom-scroll';

// Assets
import "./App.component.scss";

// App Components
import { Footer, Header } from "./regions";

// import {
//     AboutSection,
//     BlogSection,
//     ContactSection,
//     ExperienceSection,
//     ProjectSection
// } from "./components";

import { HomePage, TestPage } from "./pages";

import { Controller, Scene } from "react-scrollmagic";

import { history } from "redux/helpers";

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
    <div className="App" id="app">
      <header>
        {/* {history.location.pathname !== "/tests" && <Header />} */}
        {/* <Header/> */}
      </header>

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
          <Route path="/tests/ref" component={TestPage.TestRef} />
          <Route path="/tests/class-toggle" component={TestPage.TestSMClassToggle} />
          <Route path="/tests/components" component={TestPage.TestSMComponents} />
          <Route path="/tests" component={TestPage.TestHomePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>

      <footer className="app_-_footer">
        {/* {history.location.pathname !== "/tests" && <Footer />} */}
        {/* <Footer/> */}
      </footer>
    </div>
  );
}

export default App;

// {/* <Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/> */}
