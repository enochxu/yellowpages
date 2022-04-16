import React from 'react';
import Rating from '@mui/material/Rating';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Button from '@mui/material/Button';
import ReviewCard from './ReviewCard';
import "./Restroom.css"
import { textAlign } from '@mui/system';

/*
        To-do:
            - pass in name, rating, reviews

        Extra-features:
            - add a section to show what toilet offers
                (sinks, toilets, urinals, showers, etc.)
    */

function Restroom({name, rating, reviews}) {
    // const [ratingStar, setRatingStar] = React.useState(rating);

    return (
        <>
        <div className='restroom'>
            <div className='header'>
                <h2>{name}</h2>
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
            <div className='photo-section'>
                <h3>Photos</h3>
                <div className='photo-gallery'>
                    <img src='https://i.ibb.co/2c90ZNw/ackerman-bathroom.jpg' className='photos' alt='bathroom'/>
                    <img className='photos' alt='bathroom'/>
                    <img className='photos' alt='bathroom'/>
                    <img className='photos' alt='bathroom'/>
                    <img className='photos' alt='bathroom'/>
                    <img className='photos' alt='bathroom'/>
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
        </>
    )
}

export default Restroom