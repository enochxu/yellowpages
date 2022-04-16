import React from "react";
import "./Card.css" 
import Rating from '@mui/material/Rating';

const Card = ({image, name, ratingValue, distance, url}) => {
  return (
    <a href={url}>
    <div className="card">
      <div class="cardImage">
        <img src={image}
        class="rounded"
        />
      </div>
      <h1>{name}</h1>
      <div class="card-rating">
        <h2>{ratingValue}/5</h2>
        <Rating name="rating-read" value={ratingValue} precision={0.1} size="medium" readOnly />
      </div>
      <p>&#x1F6BD;{distance}</p>
    </div>
    </a>
  )
}

export default Card;