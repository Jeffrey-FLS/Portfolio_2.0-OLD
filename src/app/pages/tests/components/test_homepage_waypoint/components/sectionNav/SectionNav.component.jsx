// React Components
import React, { useState } from "react";
import PropTypes from "prop-types";

// Assets
import "./SectionNav.component.scss";

const SectionNav = props => {
  // const { numOfSections, listOfSections } = props;
  const [sections, setSections] = useState(null);

  const numOfSections = 6;
  const listOfSections = null;

  // const renderLine = () => {
  //   return <div className="section-nav_-_scroll_--_line" />;
  // };

  const populateSections = () => {
      
  };

  const renderSections = (intSections, arrStrSections) => {
    const className = "section-nav_--_scroll_---_line";
    let arrDivSections = [];

    if (intSections) {
      for (let i = 0; i < intSections; i++) {
        arrDivSections.push(<div className={className} />);
      }
    } else if (arrStrSections) {
      arrDivSections = arrStrSections.map(strSection => (
        <div className={className}>
          <h3>{strSection}</h3>
        </div>
      ));
    } else {
      console.warn('intSections or arrStrSections value does not exist');
    }

    return arrDivSections;
  };

  // const renderSections = (intSections, arrStrSections) => {
  //   const className = "section-nav_--_scroll_---_line";
  //   let arrDivSections = [];

  //   if (intSections) {
  //     for (let i = 0; i < intSections; i++) {
  //       arrDivSections.push(<div className={className} />);
  //     }
  //   } else if (arrStrSections) {
  //     arrDivSections = arrStrSections.map(strSection => (
  //       <div className={className}>
  //         <h3>{strSection}</h3>
  //       </div>
  //     ));
  //   } else {
  //     console.warn('intSections or arrStrSections value does not exist');
  //   }

  //   return arrDivSections;
  // };

  // const sectionList = num => {
  //   let arr = new Array(num);

  //   for (let i = 0; i < num; i++) {
  //     arr[i] = `Section-${i + 1}`;
  //   }

  //   return arr;
  // };

  return (
    <nav className="section-nav">
      <div className="section-nav_-_active">
        <div className="section-nav_-_active_--_scroll">
          {renderSections(numOfSections, listOfSections)}
        </div>
      </div>
    </nav>
  );
};

SectionNav.propTypes = {
  listOfSections: PropTypes.array,
  numOfSections: PropTypes.number
};

SectionNav.defaultProps = {
  listOfSections: null,
  numOfSections: null
};

export default SectionNav;
