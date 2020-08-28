import React from "react";

export const convertDateToArchivedVersion = date => appendMonthToYear(separateDateToParts(date));

const separateDateToParts = date => date.split(" ");

const appendMonthToYear = values => values[0] + " " + values[2];

export const PrettyDate = props => {
    const date = new Date();

    return (
        <div>
            <p>{props.date != null ? props.date : toPrettyDate(date)}</p>
        </div>
    )
};

export const toPrettyDate = date => {
    return getMonthString(date.getMonth() + 1) + " " + date.getDate() + ", " + date.getFullYear();
};

const getMonthString = month => {
    switch (month) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "ERROR MONTH"
    }
};

export const getYearFromPrettyDate = date => date.split(" ")[2];