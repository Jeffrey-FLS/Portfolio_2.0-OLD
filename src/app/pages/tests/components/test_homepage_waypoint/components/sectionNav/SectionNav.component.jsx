// React Components
import React, { Component } from "react";
import PropTypes from "prop-types";

// Assets
import "./SectionNav.component.scss";

// Pushing to Git
class SectionNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionsList: {},
      currentSection: {}
    };
  }

  componentDidMount() {
    // this.state = {
      
    // }
  }

  populateSectionList = num => {
    let arr = new Array(num);

    for (let i = 0; i < num; i++) {
      arr[i] = "line_" + i;
    }

    return arr;
  };

  populateSections = arrStrSections => {
    let objSections = { section: new Array(arrStrSections.length) };

    arrStrSections.forEach(
      (strSection, index) =>
        (objSections.section[index] = {
          index: index,
          name: strSection
        })
    );

    return objSections;
  };

  renderSections = objSections => {
    return objSections.section.map((sec, index) => (
      <div key={index} id={"line_" + sec.name}>
        <h3>{sec.name}</h3>
      </div>
    ));
  };

  render() {
    return (
      <nav className="section-nav">
        <div className="section-nav_-_active">
          <div className="section-nav_-_active_--_scroll">
            {/* {sections && renderSections(sections)} */}

            {this.renderSections(this.populateSections(this.populateSectionList(8)))}
          </div>
        </div>
      </nav>
    );
  }
}

// SectionNav.propTypes = {
//   listOfSections: PropTypes.array,
//   numOfSections: PropTypes.number
// };

// SectionNav.defaultProps = {
//   listOfSections: null,
//   numOfSections: null
// };

export default SectionNav;
