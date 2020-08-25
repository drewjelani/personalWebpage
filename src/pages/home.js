import React from 'react';
import Header from "../components/header";
import DrewUpperHalfFromEngagementShoot from "../components/images";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <span style={{"textAlign":"center", "display":"block"}}>
                    <img src={DrewUpperHalfFromEngagementShoot} className="rounded center" height="60%" width="60%" alt="Responsive image"/>
                </span>
                <p>
                    This is the start of Drew's page.  Coming soon!
                </p>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </div>
    )
};

export default Home;