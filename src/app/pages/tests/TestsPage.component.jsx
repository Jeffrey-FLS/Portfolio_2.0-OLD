// React Components
import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Scrollbars } from 'react-custom-scrollbars';
// import CustomScroll from 'react-custom-scroll';

// Assets
import "./TestsPage.component.scss";

import  TestComponents  from "./components";
import { history } from "redux/helpers";


const TestsPage = () => {

  const testURL = "tests";

  return (
    <div className="TestsPage" id="TestsPage">
      <main className="TestsPage_-_main">
        <Switch>
          <Route path={`/${testURL}/waypointbg`} component={TestComponents.TestWaypointBg} />
          <Route path={`/${testURL}/waypointcomponents2`} component={TestComponents.TestWaypointComponents2} />
          <Route path={`/${testURL}/waypointcomponents`} component={TestComponents.TestWaypointComponents} />
          <Route path={`/${testURL}/waypoint`} component={TestComponents.TestWaypoint} />
          <Route path={`/${testURL}/onscroll`} component={TestComponents.TestOnScroll} />
          <Route path={`/${testURL}/ref`} component={TestComponents.TestRef} />
          <Route path={`/${testURL}/class-toggle`} component={TestComponents.TestSMClassToggle} />
          <Route path={`/${testURL}/components`} component={TestComponents.TestSMComponents} />
          <Route path={`/${testURL}/homepage`} component={TestComponents.TestHomePage} />
          <Route path="/" component={TestComponents.TestHomePage} />
        </Switch>
      </main>
    </div>
  );
}

export default TestsPage;

