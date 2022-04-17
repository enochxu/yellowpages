import * as React from "react"
import "./index.css"
import Card from "../components/Card.js"
import "react-multi-carousel/lib/styles.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>yellowpages</title>
      <div className="featured">
        <h1>Top Rated For You</h1>
        <div className="restroom-grid">
          <Card name="Ackerman Grand Ballroom" ratingValue="4.0"  image="https://i.ibb.co/2c90ZNw/ackerman-bathroom.jpg" distance="0.0 mi away" url="/samples/ackerman" />
          <Card name="Ackerman Level 1" ratingValue="3.5"  image="https://i.ibb.co/GRmDHyy/ackerman1entrancemens.jpg" distance="0.0 mi away" url="/samples/ackermanl1" />
          <Card name="Olympic Hall 9" ratingValue="3.3" image="https://i.ibb.co/4gSBtM4/olympic-sinks.jpg" distance="0.7 mi away" url="/samples/olympic9" />
          <Card name="Powell Library Basement" ratingValue="4.7" image="https://i.ibb.co/SxLzd7m/powellstalls.jpg" distance="0.2 mi away" url="/samples/powellBasement" />
          <Card name="Kaplan Level 1" ratingValue="4.7" image="https://i.ibb.co/6sKbXx3/kaplan1stallswomen.jpg" distance="0.2 mi away" url="/samples/kaplan1" />
        </div>
      </div>
    </main>
  )
}

export default IndexPage
