import React from "react";
import { useState, useRef } from "react";
import "./index.css";

export default function StockData() {
  const API = "https://jsonmock.hackerrank.com/api/stocks?date=";

  const searchDateRef = useRef();
  const [stockData, setStockData] = useState([]);

  const handleSubmit = (event) => {
    const searchDate = searchDateRef.current.value;
    event.preventDefault();

    fetch(API + searchDate)
    .then((response) => response.json())
    .then((result) => {
      const { data } = result
      console.log(data);

      if (data.length === 0) {
        setStockData(null);
      } else {
        setStockData(data[0]);
      }
    })
  } 

  console.log(stockData);

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <form onSubmit={handleSubmit}>
          <input type="text" ref={searchDateRef} className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input"/>
          <button className="" id="submit-button" data-testid="submit-button">Search</button>
        </form>
      </section>
      {
        stockData
          ?
            <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
                <li className="py-10">Open: {stockData.open}</li>
                <li className="py-10">Close: {stockData.close}</li>
                <li className="py-10">High: {stockData.high}</li>
                <li className="py-10">Low: {stockData.low}</li>
            </ul>
          :
            <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">
              Result Not Found
            </div>
      }
    </div>
  );
}
