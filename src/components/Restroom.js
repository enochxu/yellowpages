import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ReviewCard from "./ReviewCard";
import "./Restroom.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Restroom = (name, gender) => {
  const [value, setValue] = React.useState(4);
  const [restroomType, setRestroomType] = useState([
    "gender-neutral",
    "women",
    "men",
  ]);

  const ToggleType = () => {
    const handleRestroomType = (event, newRestroomType) => {
      setRestroomType(newRestroomType);
    };

    return (
      <ToggleButtonGroup
        value={restroomType}
        onChange={handleRestroomType}
        color="primary"
        aria-label="toggle displaying gender neutral, women's, or men's restrooms"
      >
        <ToggleButton value="gender-neutral" aria-label="gender neutral">
          <i class="bi-gender-ambiguous"></i>
        </ToggleButton>
        <ToggleButton value="women" aria-label="women">
          <i class="bi-gender-female"></i>
        </ToggleButton>
        <ToggleButton value="men" aria-label="men">
          <i class="bi-gender-male"></i>
        </ToggleButton>
      </ToggleButtonGroup>
    );
  };

  return (
    <>
      <div className="restroom">
        <div className="header">
          <h2>{name}</h2>
          <ToggleType />
              <div className='sub'>
                  <div className='rating'>
                      <p>{rating}.0/5</p>
                      <Rating name="read-only" value={rating} readOnly />
                  </div>
                  <div className='save'>
                      <BookmarkAddIcon />
                  </div>
              </div>
        </div>
        <div className="photo-section">
          <h3>Photos</h3>
          <div className="photo-gallery">
            <img
              src="https://i.ibb.co/2c90ZNw/ackerman-bathroom.jpg"
              className="photos"
              alt="bathroom"
            />
            <img className="photos" alt="bathroom" />
            <img className="photos" alt="bathroom" />
            <img className="photos" alt="bathroom" />
            <img className="photos" alt="bathroom" />
            <img className="photos" alt="bathroom" />
          </div>
        </div>
      </div>
        <div className='reviews'>
            <h3 className='review-header'>Reviews</h3>
            <div className="reviews-section">
                <div className='review-bubbles'>
                    <ReviewCard name={reviews[0].name} rating={reviews[0].rating} reviewText={reviews[0].reviewText} />
                    <ReviewCard name={reviews[1].name} rating={reviews[1].rating} reviewText={reviews[1].reviewText} />
                </div>
                <Button className='more-btn' variant="contained" size="medium">
                    More
                </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Restroom;
