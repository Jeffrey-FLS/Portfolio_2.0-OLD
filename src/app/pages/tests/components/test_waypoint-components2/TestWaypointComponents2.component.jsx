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
      arr[i] = `section_${i + 1}`;
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

  // const tweenSettingsTo = ("", 1, { backgroundColor: "white", color: "black" });
  // const tweenSettingsFrom = ("", 1, { backgroundColor: "#212121", color: "white" });

  const sectBgColor = {
    // section_0: {
    //   from: "pink",
    //   to: "white"
    // },
    section_1: {
      from: "white",
      to: "white"
    },
    section_2: {
      from: "white",
      to: "green"
    },
    section_3: {
      from: "green",
      to: "green"
    },
    section_4: {
      from: "green",
      to: "blue"
    },
    section_5: {
      from: "blue",
      to: "blue"
    },
    section_6: {
      from: "blue",
      to: "white"
    }
  };

  const tweenSettingsFrom = (ele) => {
    return (sectBgColor[ele])
      ? { backgroundColor: sectBgColor[ele].from, color: "black" }
      : { backgroundColor: "white",color: "black" };
  }; 

  const tweenSettingsTo = (ele) => {
    return (sectBgColor[ele])
      ? { backgroundColor: sectBgColor[ele].to, color: "black" }
      : { backgroundColor: "white",color: "black" };
  }; 




  return (
    <div className="test-onscroll">
      <main>
      <Controller>
        {renderSections(numOfSections).map(ele => (
          //<Waypoint
            //onEnter={() => handleWaypointEnter(ele)}
             //onLeave={() => handleWaypointLeave(ele)}
          //>
            <Scene duration={duration} pin={true} indicators={true}>
              {/* <Tween from={{ x: "100px", rotation: -360 }}> */}
              <Tween
                from={tweenSettingsFrom(ele)}
                to={tweenSettingsTo(ele)}
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
