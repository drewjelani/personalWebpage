import React, {Component} from 'react';
import Header from "../components/header";
import entries from "../components/entries";
import EntryWithImage from "../components/entryWithImage";
import {convertDateToArchivedVersion, toPrettyDate} from "../utils/dateConverters";
import {connect} from "react-redux";

class Family extends Component {
    constructor(props) {
        super(props);
        this.state = {date: toPrettyDate(new Date())};
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 blog-main'>
                            {entries
                                .filter(entry => filterEntriesByDate(entry, this.state.date))
                                .sort(entryCompareToDay)
                                .map(mapEntriesToReactElements)}
                        </div>
                        <aside className='col-4-md blog-sidebar'>
                            <div className='p-3'>
                                <h3>Archives</h3>
                                <ul>
                                    {reduceToDistincts(entries)
                                        .sort(entryCompareTo)
                                        .map((entry, i) => <li
                                        key={i} onClick={() => this.setState({date: entry.date})}>{convertDateToArchivedVersion(entry.date)}</li>)}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        )
    };
}

const reduceToDistincts = entries => {
    const tracker = new Set();
    const result = [];

    entries.forEach(entry => {
        const dateString = convertDateToArchivedVersion(entry.date);

        if(!tracker.has(dateString)){
            tracker.add(dateString);
            result.push(entry);
        }
    });

    return result;
};

const entryCompareToDay = (a, b) => parseInt(b.date.split(" ")[1]) - parseInt(a.date.split(" ")[1]);

const entryCompareTo = (a, b) => {
    const yearA = parseDateYearAsInt(a);
    const yearB = parseDateYearAsInt(b);

    if(yearA < yearB) return 1;

    const monthMap = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
    };


    const monthA = monthMap[parseDateMonth(a)];
    const monthB = monthMap[parseDateMonth(b)];

    return monthB - monthA;
};

const parseDateYearAsInt = entry => parseInt(entry.date.split(" ")[2]);
const parseDateMonth = entry => entry.date.split(" ")[0];

const filterEntriesByDate = (entry, date) => {
    const entry_date = entry.date;
    const year = convertDateToArchivedVersion(entry_date);
    return year === convertDateToArchivedVersion(date);
};

const mapEntriesToReactElements = (entry, i) =>
    <EntryWithImage key={i} url={entry.url} text={entry.text}
                    caption={entry.caption} alt={entry.alt}
                    date={entry.date}/>;

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Family);