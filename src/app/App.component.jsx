// React Components
import React from 'react';
import { Switch, Route } from "react-router-dom";

// Assets
import './App.component.scss';

// App Components
import {
    Footer,
    Header
} from "./components";

import {
    HomePage
} from "./pages";

function App() {
  return (
      <div className="App">
          <Header/>

          <div className="app_-_home">
              <HomePage/>
          </div>

          <main className="app_-_main container">

          </main>

        {/*  <Switch>*/}
        {/*  /!*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*!/*/}
        {/*  <Route path="/" component={HomePage}/>*/}
        {/*</Switch>*/}


          <div className="app_-_footer container">
              <div className="row">
                <Footer/>
              </div>
          </div>
      </div>
  );
}

export default App;
