// React Components
import React, { Component } from "react";

// Assets
import "./TestRef.component.scss";
import { Helmet } from "react-helmet";

// Data
// import data from "data";
// import assets from "../../../assets";

class TestRef extends Component {
  // const projects = data.projects[0];
  // const icons = assets.icons;

  constructor(props) {
      super(props);
      this.inputRef = React.createRef();
  }

  componentDidMount() {
      console.log(this.inputRef)
  }

  render() {
    return (
      <div className="test-ref">
        <Helmet>
          <style>{"body { background-color: #212121; }"}</style>
        </Helmet>

        <input type="text" ref={this.inputRef}/>
      </div>
    );
  }
}

export default TestRef;
