// React Components
import React from 'react';
import { Switch, Route } from "react-router-dom";

// Assets
import './App.component.scss';

// App Components
import {
    Header
} from "./components";

import {
    HomePage
} from "./pages";

function App() {
  return (
      <div className="App">
          <Header/>

          <Switch>
          {/*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*/}
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
  );
}

export default App;
