import React from 'react';
import PrettyDate from "./prettyDate";

const EntryWithImage = props => {
    return (
        <div>
            <hr/>
            <PrettyDate date={props.date}/>
            <div>
                <span style={{"textAlign": "center", "display": "block"}}>
                    <img src={props.url} className="rounded" height="50%" width="50%" alt={props.altImage}/>
                </span>
                <span style={{"textAlign": "center", "display": "block", "fontSize":"60%"}}>
                    {props.caption}
                </span>
            </div>
            <div className='container my-4'>
                <p style={{"fontSize":"80%"}}>
                    {props.text}
                </p>
            </div>
        </div>
    )
};

export default EntryWithImage;