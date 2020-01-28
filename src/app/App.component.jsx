// React Components
import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

// Assets
import './App.component.scss';

// App Components

function App() {
  return (
      <div className="App">
        <Switch>
          {/*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*/}
          <Route path="/" component={}/>
        </Switch>
      </div>
  );
}

export default App;
