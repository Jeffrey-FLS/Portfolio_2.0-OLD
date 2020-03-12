// React Components
import React, { useState } from "react";

// Assets
import "./TestSMComponents.component.scss";
import { Helmet } from "react-helmet";
// import {Carousel} from "../../components/sections/projects/components";
import { Controller, Scene } from "react-scrollmagic";

// Data
// import data from "data";
// import assets from "../../../assets";

import styled from "styled-components";

// END OF IMPORTS --------------------------------------------------------------

const ComponentsStyled = styled.div`
  .section {
    height: 100vh;
  }
`;

const StyledDiv = styled.div`
  background-color: red;
`;

const Stateless = ({ children }) => <div id="stateless">{children}</div>;

const StatelessFragment = () => (
  <React.Fragment>
    <div id="statelessFragment">StatelessFragment Component</div>
  </React.Fragment>
);

const StatelessRef = React.forwardRef((props, ref) => (
  <div ref={ref}>
    {backgroundChange("green")}
    <h1>StatelessRef Component</h1>
  </div>
));

class Stateful extends React.Component {
  render() {
    return <div id="stateful">Stateful Component</div>;
  }
}

const backgroundChange = color => {
  return (
    <Helmet>
      <style>{`body { background-color: ${color}; }`}</style>
    </Helmet>
  );
};
// var color = 'green';

// const changeColor = strColor => {
//   color = strColor;
// };

const duration = 1000;

const TestSMComponents = () => {
  const [color, setColor] = useState("blue");

  const colorChange = color => {
    setColor(color);
  };

  return (
    <ComponentsStyled>
      <Helmet>
        <style>{`body { background-color: ${color}; }`}</style>
      </Helmet>
      <div className="section" />
      {/* <div id="trigger"> 
        {colorChange("yellow")}
      </div> */}
      <Controller>
        <Scene duration={duration} pin={true} indicators={true}>
          <div>
            {/* {backgroundChange("green")} */}

            {/* {changeColor('yellow')} */}
            <h1>HTML tag</h1>
          </div>
        </Scene>
        <Scene duration={duration} pin={true} indicators={true}>
          <StatelessRef />
        </Scene>
        <Scene
          duration={duration}
          pin={true}
          indicators={true}
          triggerHook={() => colorChange("yellow")}
        >
          <StyledDiv>
            {/* {backgroundChange("gray")} */}

            <h1>Styled Component</h1>
          </StyledDiv>
        </Scene>
        <Scene
          duration={duration}
          pin="#stateless"
          triggerElement="#stateless"
          indicators={true}
        >
          <Stateless>Stateless Component</Stateless>
        </Scene>
        <Scene duration={duration} pin={true} indicators={true}>
          <div>
            <Stateless>Stateless Component wrapped</Stateless>
          </div>
        </Scene>
        <Scene
          duration={duration}
          pin="#statelessFragment"
          triggerElement="#statelessFragment"
          indicators={true}
        >
          <StatelessFragment />
        </Scene>
        <Scene
          duration={duration}
          pin="#stateful"
          triggerElement="#stateful"
          indicators={true}
        >
          <Stateful />
        </Scene>
      </Controller>
      <div className="section" />
    </ComponentsStyled>
  );
};

export default TestSMComponents;
