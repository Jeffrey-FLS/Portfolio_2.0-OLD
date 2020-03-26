// React Components
import React, { Component } from "react";
import PropTypes from "prop-types";

// Assets
import "./SectionNav.component.scss";

class SectionNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionsList: {},
      currentSection: {}
    };
  }

  componentDidMount() {}

  render() {
    return (
      <nav className="section-nav">
        <div className="section-nav_-_active">
          <div className="section-nav_-_active_--_scroll">
            {/* {sections && renderSections(sections)} */}
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
