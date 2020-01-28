// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// App Components
import App from 'app/App.component';

// Assets
import './styles/index.scss';

// NPM Packages
import WebFont from 'webfontloader';


WebFont.load({
    google: {
        families: [
            // 'Ubuntu:300,400,700',
            'Ubuntu',
            'Rubik',
            'sans-serif'
        ]
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
