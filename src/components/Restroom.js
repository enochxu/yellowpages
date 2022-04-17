import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Button } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import "./Restroom.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Restroom = ({name, rating, reviews, images}) => {
  const [value, setValue] = React.useState(4);
  const [restroomType, setRestroomType] = useState({
    "gender-neutral": true,
    women: true,
    men: true,
  });
  const [toggled, setToggled] = useState("toggle-on");

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
          <div className="title">
            <h2>{name}</h2>
            <span className="restroom-toggles">
              <ToggleType />
            </span>
          </div>
          <div className="sub">
            <div className="rating">
              <p>{rating}/5</p>
              <Rating name="read-only" value={rating} readOnly />
            </div>
            <div className="save">
              <BookmarkAddIcon />
            </div>
          </div>
        </div>
        <div className="photo-section">
          <h3>Photos</h3>
          <div className="photo-gallery">
            {images.map(image => (
                <img className='photos' src={image} alt='restroom'/>
            ))}            
          </div>
        </div>
      </div>
      <div className="reviews">
        <h3 className="review-header">Reviews</h3>
        <div className="reviews-section">
          <div className="review-bubbles">
            <ReviewCard
              name={reviews[0].name}
              rating={reviews[0].rating}
              reviewText={reviews[0].reviewText}
            />
            <ReviewCard
              name={reviews[1].name}
              rating={reviews[1].rating}
              reviewText={reviews[1].reviewText}
            />
          </div>
          <Button className="more-btn" variant="contained" size="medium">
            More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Restroom;
