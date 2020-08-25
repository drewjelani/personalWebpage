import Home from "../pages/home";
import Career from "../pages/career";
import Family from "../pages/family";
import About from "../pages/about";
import {Route, BrowserRouter as Router} from "react-router-dom";
import React from "react";

const routing = <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/career" component={Career} />
        <Route path="/family" component={Family} />
        <Route path="/about" component={About} />
    </div>
</Router>;

export default routing;