import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Software from "./pages/Software";
import Amaiya from "./pages/Amaiya";
import Home from "./pages/Home";
import About from "./pages/About";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/sde" component={Software} />
            <Route path="/amaiya" component={Amaiya} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
