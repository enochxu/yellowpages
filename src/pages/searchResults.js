import * as React from "react";
import Card from "../components/Card";
import "./searchResults.css";

const ResultsPage = ({ term }) => {
  return (
    <div className="results">
      <h2>Results for "<h2 style={{color: "#FFCB37", display: "inline"}}>Ackerman</h2>"</h2>
      {/* <div className="search-term">
        <h2>Ackerman</h2>
      </div> */}
      <div className="results-grid">
        <Card name="Ackerman Grand Ballroom" ratingValue="4.8"  image="https://i.ibb.co/2c90ZNw/ackerman-bathroom.jpg" distance="0.0 mi away"/>
        <Card name="Olympic Hall 9" ratingValue="5.0" image="https://i.ibb.co/4gSBtM4/olympic-sinks.jpg" distance="0.5 mi away"/>
        <Card name="Powell Library" ratingValue="3.2" image="https://i.ibb.co/SxLzd7m/powellstalls.jpg" distance="1.0 mi away"/>
        <Card name="Ackerman Level 1" ratingValue="1.0" distance="1.0 mi away"/>
      </div>
    </div>
  )
}

export default ResultsPage;