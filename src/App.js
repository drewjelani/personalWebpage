import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action } from './actions/action';
import Home from "./pages/home";
import Career from "./pages/career";
import Family from "./pages/family";
import About from "./pages/about";
import {Route, BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  };

  render() {
    return (
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/career" component={Career}/>
              <Route path="/family" component={Family}/>
              <Route path="/about" component={About}/>
            </div>
          </Router>
        </div>
    );
  };
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
