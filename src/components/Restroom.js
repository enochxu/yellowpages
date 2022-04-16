import React from 'react';
import Rating from '@mui/material/Rating';
import "./Restroom.css"

export default function(name) {
    const [value, setValue] = React.useState(4);

    /*
        To-do:
            - Implement designs from figma first

        Extra-features:
            - add a section to show what toilet offers
                (sinks, toilets, urinals, showers, etc.)
    */

    return (
        <div className='restroom'>
            <div className='header'>
                <h2>Name</h2>
                <p>4.0/5</p>
                <Rating name="read-only" value={value} readOnly />
            </div>
            <div className='photos'>
                <h3>Photos</h3>
            </div>
            <div className='reviews'>
                <h3>Reviews</h3>
            </div>
        </div>
    )
}