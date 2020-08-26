import React from 'react';
import Header from "../components/header";
import images from "../components/images";

const About = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <span style={{"textAlign":"center", "display":"block"}}>
                    <img src={images.DrewUpperHalfFromEngagementShoot} className="rounded center" height="60%" width="60%" alt="Drew Upper Engagement"/>
                </span>
            </div>
        </div>
    )
};

export default About;