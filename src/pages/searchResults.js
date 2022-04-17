import * as React from "react";
import Card from "../components/Card";
import "./searchResults.css";

const ResultsPage = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const term = params.get("term");
  return (
    <div className="results">
      <h2>Results for "<h2 style={{color: "#FFCB37", display: "inline"}}>{ term }</h2>"</h2>
      {/* <div className="search-term">
        <h2>Ackerman</h2>
      </div> */}
      <div className="results-grid">
        <Card name="Ackerman Grand Ballroom" ratingValue="4.8"  image="https://i.ibb.co/2c90ZNw/ackerman-bathroom.jpg" distance="0.0 mi away" url="/samples/ackerman"/>
        <Card name="Ackerman Level 1" ratingValue="1.0" image="https://i.ibb.co/GRmDHyy/ackerman1entrancemens.jpg" distance="1.0 mi away" url="/samples/ackermanl1"/>
        <Card name="Powell Library Basement" ratingValue="3.2" image="https://i.ibb.co/SxLzd7m/powellstalls.jpg" distance="0.2 mi away" url="/samples/powellBasement" />
        <Card name="Kaplan Level 1" ratingValue="5.0" image="https://i.ibb.co/6sKbXx3/kaplan1stallswomen.jpg" distance="0.2 mi away" url="/samples/kaplan1" />
      </div>
    </div>
  )
}

export default ResultsPage;