// React Components
import React, { useState, useEffect } from "react";

// Assets
import "./TestWaypointBg.component.scss";

import { Waypoint } from "react-waypoint";

import {Helmet} from "react-helmet";


// Committing message

const TestWaypointBg = props => {
  const [backgroundColor, setBackgroundColor] = useState("white");

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

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    // document.body.style.backgroundColor = "blue"
  });

  const renderSections = num => {
    let arr = new Array(num);

    for (let i = 0; i < num; i++) {
      arr[i] = `zection-${i + 1}`;
    }

    return arr;
  };

  const randColorGenerator = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleWaypointEnter = ele => {
    setBackgroundColor(randColorGenerator());
    // alert(`Entering ${ele}`);
  };

  // const handleWaypointLeave = (ele) => {
  //   alert(`Exiting ${ele}`);
  // }

  return (
    <div className="test-onscroll">
      <Helmet bodyAttributes={{style: `background-color : ${randColorGenerator()}`}}/>

      {/* <Helmet>
        <style>{`body { background-color: ${backgroundColor}; }`}</style>
      </Helmet> */}

      

      <main>
        {renderSections(numOfSections).map(ele => (
          <Waypoint
            onEnter={() => handleWaypointEnter(ele)}
            // onLeave={() => handleWaypointLeave(ele)}
          >
            <div
              id={ele}
              // ref={myElement}
              // style={{ backgroundColor: randColorGenerator() }}
            >
              <h1>{ele}</h1>
            </div>
          </Waypoint>
        ))}
      </main>
    </div>
  );
};

export default TestWaypointBg;
