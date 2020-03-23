// React Components
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Assets
import "./SectionNav.component.scss";

const SectionNav = props => {
  // const { numOfSections, listOfSections } = props;
  const [sections, setSections] = useState();
  const [currentSection, setCurrentSection] = useState(null);

  const numOfSections = 6;
  const listOfSections = null;

  // const renderLine = () => {
  //   return <div className="section-nav_-_scroll_--_line" />;
  // };

  // const populateSections = () => {

  // };

  const convertNumOfSectionsList = num => {
    let arr = new Array(num);

    for (let i = 0; i < num; i++) {
      arr[i] = "section_" + i;
    }

    return arr;
  };

  const populateSections = arrStrSections => {
    let objSections = { section: new Array(arrStrSections.length) };

    arrStrSections.forEach(
      (strSection, index) =>
        (objSections.section[index] = {
          index: index,
          name: strSection,
          element: (
            <div className={"line_" + strSection}>
              <h3>{strSection}</h3>
            </div>
          )
        })
    );

    setSections(objSections);
  };

  useEffect(() => {
    const sectionList = numOfSections
      ? convertNumOfSectionsList(numOfSections)
      : listOfSections;

    populateSections(sectionList);

    alert(JSON.stringify(sections));
  }, []);

  // const renderSections = (intSections, arrStrSections) => {
  //   const className = "line_";
  //   let objSections = { section: [] };

  //   if (intSections) {
  //     for (let i = 0; i < intSections; i++) {
  //       objSections.section.push({
  //         index: i,
  //         name: className + i,
  //         elem: <div className={className}/>
  //       });
  //     }
  //   } else if (arrStrSections) {
  //     objSections = arrStrSections.map((strSection, index) =>
  //       objSections.section.push({
  //         index: index,
  //         name: strSection,
  //         elem: (
  //           <div className={className}>
  //             <h3>{strSection}</h3>
  //           </div>
  //         )
  //       })
  //     );
  //   } else {
  //     console.warn("intSections or arrStrSections value does not exist");
  //   }

  //   alert(JSON.stringify(objSections));

  //   // return objSections;
  //   return <h1></h1>;
  // };

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

  // const nextSection = () => {
  //   const newIndex = this.state.property.index+1;
  //   this.setState({
  //     property: data.properties[newIndex]
  //   })
  // }

  // const prevSection = () => {
  //   const newIndex = this.state.property.index-1;
  //   this.setState({
  //     property: data.properties[newIndex]
  //   })
  // }

  // renderSections(numOfSections, listOfSections);

  return (
    <nav className="section-nav">
      <div className="section-nav_-_active">
        <div className="section-nav_-_active_--_scroll">
          {/* {sections.section.map(sec => sec.element)} */}
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
