// React Components
import React from "react";

// Assets
import "./TestSMClassToggle.component.scss";
import { Helmet } from "react-helmet";
// import {Carousel} from "../../components/sections/projects/components";
import { Controller, Scene } from "react-scrollmagic";

// Data
import data from "data";
// import assets from "../../../assets";

import styled from "styled-components";

// END OF IMPORTS --------------------------------------------------------------

const ClassToggleStyled = styled.div`
  .section {
    height: 100vh;
  }

  .test {
    transition: width 0.3s ease-out;
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;

    &.yellow {
      background-color: yellow;
    }
  }
  .zap {
    width: 100%;
  }
`;

// STATELESS FUNCTION ----------------------------------------------------------

const TestSMClassToggle = () => {
  const projects = data.projects[0];
  // const icons = assets.icons;

  return (
    <div className="test-page-2">
      <Helmet>
        <style>{"body { background-color: #212121; }"}</style>
      </Helmet>

      <ClassToggleStyled>
        <div className="section" />
        <div id="trigger" />
        <Controller>
          <Scene
            duration={200}
            classToggle="zap"
            triggerElement="#trigger"
            indicators={true}
          >
            {(progress, event) => (
              <div className="test">
                Pin Test {event.type} {progress}
              </div>
            )}
          </Scene>
          <Scene
            classToggle={[".test", "yellow"]}
            reverse={false}
            indicators={true}
          >
            <div>Toggle other class</div>
          </Scene>
        </Controller>
        <div className="section" />
      </ClassToggleStyled>
    </div>
  );
};

export default TestSMClassToggle;
