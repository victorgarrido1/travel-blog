import React, {useEffect, useState } from "react";
import Axios from 'axios';
import { response } from "express";

const DateAndPricesGrid = () => {
    const [datesPrices, setDatePrices] = useState([]);

    useEffect(() => {
        Axios.get('/api/date-prices') //this can be found in the index.js client file
        .then(response => {
            setDatePrices(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the date and prices", error);
        })
    }, []);


    return (
        <div className="date-prices-section">
            <h2> Available Dates & Prices </h2>
            <table className="dates-prices-table"></table>
        </div>
    )





} ;

export default DateAndPricesGrid;