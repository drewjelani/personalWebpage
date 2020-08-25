import React from 'react';
import Header from "../components/header";
import entries from "../components/entries";

const Family = () => {
    return (
        <div>
            <Header/>
            <div className='container'>
                {entries.BWithBellyOutside}
            </div>
        </div>
    )
};

export default Family;