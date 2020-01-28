// React Components
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// Assets
import './App.component.scss';

// App Components
import HomePage from "./pages/home/HomePage.component";

function App() {
  return (
      <div className="App">
        <Switch>
          {/*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*/}
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
  );
}

export default App;
