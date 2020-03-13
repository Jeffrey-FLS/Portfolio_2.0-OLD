// React Components
import React from "react";

// Assets
import "./TestHomePage.component.scss";

//  import {Helmet} from 'react-helmet';
//  import {SocialLinks} from './components';
//  import Header from "../../components/header/Header.component";

import {
  IntroSection,
  AboutSection,
  BlogSection,
  ContactSection,
  ExperienceSection,
  ProjectSection
} from "app/components";

const sections = [
  // <IntroSection />,
  <ProjectSection />,
  <ExperienceSection />,
  <BlogSection />,
  <AboutSection />,
  <ContactSection />
];

const TestHomePage = () => {
  return (
    <div className="home-page">
      <div className="app_-_home">
        <IntroSection/>
      </div>

      <div className="app_-_main container">
        {sections.map(section => {
          return (
            <div className="row">
              <div className="app_-_main_--_section col-12">{section}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestHomePage;
