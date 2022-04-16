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
      rating: "4.5",
      distance: "1.0",
      genders: "M/F"
    }, 
    {
      name: "Restroom 2",
      rating: "4.5",
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
        <img src={ack1} style={{height: "100px", width: "200px", objectFit: "none"}}/>
        <Carousel responsive={responsive}>
          <Card name="Ackerman Grand Ballroom" rating="urmom" img={ack1}/>
          <Card name="bruh" rating="urmom"/>
          <Card name="bruh" rating="urmom"/>
          <Card name="bruh" rating="urmom"/>
        </Carousel>
        
        {/* <reviewCarousel>
          bruh
        </reviewCarousel> */}
        {/* <Card>

        </Card> */}
      </div>
    </main>
  )
}

export default IndexPage
