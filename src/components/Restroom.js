import React from 'react';
import Rating from '@mui/material/Rating';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Button from '@mui/material/Button';
import ReviewCard from './ReviewCard';
import "./Restroom.css"

function Restroom(name, gender) {
    const [value, setValue] = React.useState(4);

    /*
        To-do:
            - Implement designs from figma first
            - Gender Icon

        Extra-features:
            - add a section to show what toilet offers
                (sinks, toilets, urinals, showers, etc.)
    */

    return (
        <>
        <div className='restroom'>
            <div className='header'>
                <h2>Name of Restroom</h2>
                <div className='sub'>
                    <div className='rating'>
                        <p>4.0/5</p>
                        <Rating name="read-only" value={value} readOnly />
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
                    <ReviewCard name='Ackerman' rating='5' reviewText='#blessed' />
                    
                </div>
                <Button variant="contained" size="medium">
                    More
                </Button>
            </div>
        </div>
        </>
    )
}

export default Restroom