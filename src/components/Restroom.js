import React from 'react';
import Rating from '@mui/material/Rating';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import "./Restroom.css"

function Restroom(name) {
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
                    <img className='photos' />
                    <img className='photos' />
                    <img className='photos' />
                    <img className='photos' />
                    <img className='photos' />
                    <img className='photos' />
                </div>
            </div>
            <div className='reviews-section'>
                <h3>Reviews</h3>
            </div>
        </div>
    )
}

export default Restroom