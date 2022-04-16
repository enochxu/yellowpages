import React from "react";
import "./Card.css"

const Card = ({imagesrc, name, rating, distance, genders}) => {
  return (
    <div className="card">
      <img src="../images/reviews/ackerman/img1.jpg"/>
      <div>
        <h1>{name}</h1>
        <p>{rating}</p>
        <p>{distance}</p>
      </div>
    </div>
  )
}

export default Card;