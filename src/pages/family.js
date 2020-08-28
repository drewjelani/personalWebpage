import React from 'react';
import Header from "../components/header";
import entries from "../components/entries";
import EntryWithImage from "../components/entryWithImage";

const Family = () => {
    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 blog-main'>
                        {entries.map(entry => <EntryWithImage url={entry.url} text={entry.text} caption={entry.caption} alt={entry.alt} date={entry.date}/>)};
                    </div>
                    <aside className='col-4-md blog-sidebar'>
                        <div className='p-3'>
                            <h3>Archives</h3>
                            <ul>
                                {entries.map((entry, i) => <li key={i}>{convertDateToArchivedVersion(entry.date)}</li>)}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
};

const convertDateToArchivedVersion = date => appendMonthToYear(separateDateToParts(date));

const separateDateToParts = date => date.split(" ");

const appendMonthToYear = values => values[0] + " " + values[2];

export default Family;