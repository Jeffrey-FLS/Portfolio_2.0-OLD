// React Components
import React, { useEffect, useRef } from "react";

// Assets
import "./TestWaypoint.component.scss";

// import { Waypoint } from "react-waypoint";

const TestWaypoint = props => {
  const numOfSections = 6;
  const myElement = useRef();

  const onScroll = () => {
    if (myElement.current) {
      console.log(myElement);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener(onScroll);
  }, []);

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

  // const handleWaypointEnter = (ele) => {
  //   alert(`Entering ${ele}`);
  // }

  // const handleWaypointLeave = (ele) => {
  //   alert(`Exiting ${ele}`);
  // }

  return (
    <div className="test-onscroll">
      <main>
        {renderSections(numOfSections).map(ele => (
          <div
            id={ele}
            ref={myElement}
            style={{ backgroundColor: randColorGenerator() }}
          >
            <h1>{ele}</h1>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TestWaypoint;
