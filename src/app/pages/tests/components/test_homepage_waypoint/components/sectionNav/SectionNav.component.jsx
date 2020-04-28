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

  componentDidMount() {
    // this.state = {
      
    // }
  }

  nextSection = () => {
    const newIndex = this.state.currentSection.index + 1;
    this.setState({
      currentSection: this.state.sectionsList[newIndex]
    })
  }

  prevSection = () => {
    const newIndex = this.state.currentSection.index - 1;
    this.setState({
      currentSection: this.state.sectionsList[newIndex]
    })
  }

  handleOnClickSectionChange = (newSection) => {
    this.setState({
      currentSection: this.state.sectionsList[newSection]
    })
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
      <div key={index} id={"line_" + sec.name} onClick={() => this.handleOnClickSectionChange(this.currentSection.index)}>
        <h3>{sec.name}</h3>
      </div>
    ));
  };

  render() {

    alert(JSON.stringify(this.props.arrList))

    return (
      <nav className="section-nav">
        <div className="section-nav_-_active">
          <div className="section-nav_-_active_--_scroll" 
            style={{'transform': `translateX(-${this.state.index*(100/this.state.sectionsList.length)}%)`}}>
            {/* {sections && renderSections(sections)} */}

            {/* {this.renderSections(this.populateSections(this.populateSectionList(8)))} */}
            {this.renderSections(this.populateSections(this.props.arrList))}
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
