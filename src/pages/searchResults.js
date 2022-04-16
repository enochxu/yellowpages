import * as React from "react";
import "./searchResults.css";

const ResultsPage = ({ term }) => {
  return (
    <div className="results">
      <h2>Results for {term}</h2>
    </div>
  )
}

export default ResultsPage;