// React Components
import React, { Component } from "react";

// Assets
import "./TestRef.component.scss";
import { Helmet } from "react-helmet";

class TestRef extends Component {

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
