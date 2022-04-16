import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import "./AddReview.css"
import { Button } from "react-bootstrap";

const AddReview = ({}) => {
  const [value, setValue] = useState(2);
  const [gender, setGender] = useState("Gender-Neutral");
  const [comment, setComment] = useState("");

  function changeComment(e) {
    setComment(e.target.value);
  }

  function addReview(evt) {
    evt.preventDefault();
  }

  return (
    <div className="container">

            <h2>Add a Review</h2>
        

        <div className="buttons">
            <Button className="gender-button" onClick={() => {setGender("Male")}}>Male</Button>
            <Button className="gender-button" onClick={() => {setGender("Female")}}>Female</Button>
            <Button className="gender-button" onClick={() => {setGender("Gender Neutral")}}>Gender Neutral</Button>
        </div>

            <h2>Your Rating</h2>

        <div className="rating">
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}/>
        </div>

        <div>
            <form className="text">
                <textarea maxLength="1300" placeholder='Leave a comment...' onChange={changeComment} className="textbox"></textarea>
                <Button className="gender-button" onClick={addReview}>Submit</Button>
            </form>
        </div>
    </div>
  );
}

export default AddReview;