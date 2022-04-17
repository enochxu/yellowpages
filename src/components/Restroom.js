import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Button } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import "./Restroom.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Restroom = ({ name, rating, reviews, images }) => {
  const [value, setValue] = React.useState(4);
  const [restroomType, setRestroomType] = useState({
    "gender-neutral": true,
    women: true,
    men: true,
  });

  const averageRating = () => {
    let average = 0;

    for (const review of reviews) {
      average += parseInt(review["rating"]);
    }
    average /= reviews.length;
    average = Math.round(average * 10) / 10;

    return average;
  };

  const ToggleType = () => {
    return (
      <div className="restroom-toggles">
        <Button
          className={`type-toggle toggled-${restroomType["gender-neutral"]}`}
          onClick={() => {
            setRestroomType({
              ...restroomType,
              "gender-neutral": !restroomType["gender-neutral"],
            });
          }}
        >
          <i class="bi-gender-ambiguous"></i> Gender Neutral
        </Button>
        <Button
          className={`type-toggle toggled-${restroomType.women}`}
          onClick={() =>
            setRestroomType({
              ...restroomType,
              women: !restroomType.women,
            })
          }
        >
          <i class="bi-gender-female"></i> Female
        </Button>
        <Button
          className={`type-toggle toggled-${restroomType.men}`}
          toggle={restroomType.men}
          onClick={() =>
            setRestroomType({
              ...restroomType,
              men: !restroomType.men,
            })
          }
        >
          <i class="bi-gender-male"></i> Male
        </Button>
      </div>
    );
  };

  return (
    <>
      <div className="restroom">
        <div className="header">
          <h1>{name}</h1>
          <div className="sub">
            <div className="rating">
              <p>{averageRating()}/5</p>
              <Rating name="read-only" value={averageRating()} readOnly />
            </div>
            <div className="save">
              <BookmarkAddIcon />
            </div>
          </div>
        </div>
        <div className="photo-section">
          <h2>Photos</h2>
          <div className="photo-gallery">
            {images.map((images) => (
              <img className="photos" src={images} alt="restroom" />
            ))}
          </div>
        </div>
      </div>
      <div className="reviews">
        <h2 className="review-header">Reviews</h2>
        <div className="display-toggles">
          <ToggleType />
        </div>
        <div className="reviews-section">
          <div className="review-bubbles">
            {reviews.map((reviews) =>
              restroomType[reviews.type] ? (
                <ReviewCard
                  name={reviews.name}
                  rating={reviews.rating}
                  reviewText={reviews.reviewText}
                  type={reviews.type}
                />
              ) : null
            )}
          </div>
          {/* <Button className="more-btn" variant="contained" size="medium">
            More
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default Restroom;
