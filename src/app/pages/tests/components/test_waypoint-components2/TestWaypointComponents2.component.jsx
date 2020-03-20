// React Components
import React, { useEffect, useRef } from "react";

// Assets
import "./TestWaypointComponents2.component.scss";

import { Waypoint } from "react-waypoint";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const TestWaypointComponents2 = props => {
  const numOfSections = 6;
  // const myElement = useRef();

  // const onScroll = () => {
  //   if (myElement.current) {
  //     console.log(myElement);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener(onScroll);
  // }, []);

  const renderSections = num => {
    let arr = new Array(num);

    for (let i = 0; i < num; i++) {
      arr[i] = `section-${i + 1}`;
    }

    return arr;
  };

  const randColorGenerator = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleWaypointEnter = ele => {
    alert(`Entering ${ele}`);
  };

  // const handleWaypointLeave = (ele) => {
  //   alert(`Exiting ${ele}`);
  // }

  const duration = 500;


  return (
    <div className="test-onscroll">
      <main>
      <Controller>
        {renderSections(numOfSections).map((ele, index) => (
          //<Waypoint
            //onEnter={() => handleWaypointEnter(ele)}
            // onLeave={() => handleWaypointLeave(ele)}
          //>
            <Scene duration={duration} pin={false} indicators={true}>
              {/* <Tween from={{ x: "100px", rotation: -360 }}> */}
              <Tween
                to={("#section-1", 1, { backgroundColor: "white", color: "black" })}
                from={("#section-1", 1, { backgroundColor: "#212121", color: "white" })}
                >
                <div
                  id={ele}
                  // ref={myElement}
                  // style={{ backgroundColor: randColorGenerator() }}
                >
                  <h1>{ele}</h1>
                </div>
              </Tween>
            </Scene>
          //</Waypoint>
        ))}
        </Controller>
      </main>
    </div>
  );
};

export default TestWaypointComponents2;
