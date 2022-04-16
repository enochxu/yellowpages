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
          <Card name="Ackerman Grand Ballroom" ratingValue="4.8"  image="https://i.ibb.co/2c90ZNw/ackerman-bathroom.jpg" distance="0.0 mi away" url="/samples/ackerman"/>
          <Card name="Ackerman Level 1" ratingValue="4.2"  image="https://i.ibb.co/GRmDHyy/ackerman1entrancemens.jpg" distance="0.0 mi away"/>
          <Card name="Olympic Hall 9" ratingValue="5.0" image="https://i.ibb.co/4gSBtM4/olympic-sinks.jpg" distance="0.7 mi away"/>
          <Card name="Powell Library Basement" ratingValue="3.2" image="https://i.ibb.co/SxLzd7m/powellstalls.jpg" distance="0.2 mi away"/>
          <Card name="Kaplan Level 1" ratingValue="1.0" image="https://i.ibb.co/6sKbXx3/kaplan1stallswomen.jpg" distance="0.2 mi away"/>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
