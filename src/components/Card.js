import React from "react";
import "./Card.css" 
import Rating from '@mui/material/Rating';

const Card = ({image, name, ratingValue, distance, genders}) => {
  return (
    <div className="card">
      <div>
        <img src={image}
        width={250}
        height={180}
        class="rounded"
        />
        <h1>{name}</h1>
        <div class="inline-flex">
          <h2>{ratingValue}/5</h2>
          <Rating name="rating-read" value={ratingValue} precision={0.1} size="medium" readOnly />
        </div>
        <p>{distance}</p>
      </div>
    </div>
  )
}

export default Card;