import * as React from "react"
import "./index.css"
import Carousel from "react-multi-carousel";
import Card from "../components/Card.js"
import "react-multi-carousel/lib/styles.css";
import ack1 from "../images/reviews/ackerman/img1.jpg"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const restrooms = 
  [
    {
      name: "Restroom 1",
      ratingValue: "4.5",
      distance: "1.0",
      genders: "M/F"
    }, 
    {
      name: "Restroom 2",
      ratingValue: "4.5",
      distance: "1.0",
      genders: "M/F" 
    }
  ]


// markup
const IndexPage = () => {
  return (
    <main>
      <title>yellowpages</title>
      <div className="featured">
        <h1>Top Rated For You</h1>
        <div className="restroom-grid">
          <Card name="Ackerman Grand Ballroom" ratingValue="4.8"  image="https://i.ibb.co/2c90ZNw/ackerman-bathroom.jpg" distance="0.0 mi away"/>
          <Card name="Olympic Hall 9" ratingValue="5.0" image="https://i.ibb.co/4gSBtM4/olympic-sinks.jpg" distance="0.5 mi away"/>
          <Card name="Powell Library" ratingValue="3.2" image="https://i.ibb.co/SxLzd7m/powellstalls.jpg" distance="1.0 mi away"/>
          <Card name="bruh" ratingValue="1.0" distance="1.0 mi away"/>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
