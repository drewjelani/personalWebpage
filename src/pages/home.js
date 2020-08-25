import React from 'react';
import Header from "../components/header";
import images from "../components/images";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <span style={{"textAlign":"center", "display":"block"}}>
                    <img src={images.DrewUpperHalfFromEngagementShoot} className="rounded center" height="60%" width="60%" alt="Drew Upper Engagement"/>
                </span>
                <p>
                    This is the start of Drew's page.  Coming soon!
                </p>
            </div>
        </div>
    )
};

export default Home;