import React, { useState } from 'react';
import Restroom from "../../components/Restroom"
import Rating from '@mui/material/Rating';
import "../../components/AddReview.css"
import { Button } from "react-bootstrap";

const NAME = "Ackerman Level 1"

const DATA = [
    {
      'name': 'Ackerman Level 1',
      'rating': '3.0',
      'reviewText': '',
      'type': 'women',
    },
    {
        'name': 'Ackerman Level 1',
        'rating': '1.0',
        'reviewText': 'Haven’t been to this one. I couldn’t find it.',
        'type': 'men',
    },
    {
      'name': 'Ackerman Level 1',
      'rating': '5.0',
      'reviewText': '',
      'type': 'women',
    },
    {
        'name': 'Ackerman Level 1',
        'rating': '5.0',
        'reviewText': 'Had a great night in this one!',
        'type': 'men',
      },
  ]

  const images = [
    'https://i.ibb.co/GRmDHyy/ackerman1entrancemens.jpg',
    'https://i.ibb.co/7WSbJwn/ackerman1sinksmens.jpg',
    'https://i.ibb.co/H2NvxD5/ackerman1urinals.jpg',
]

const AckermanL1 = () => {

  const [trigger, setTrigger] = useState(true);
  const [reviews, setReviews] = useState(DATA)

  function addReview(name, rating, reviewText, type){
    const temp = reviews;
    temp.push({'name' : name, 'rating': rating, 'reviewText': reviewText, 'type': type});
    setReviews(temp);
    setTrigger(!trigger);
    console.log(reviews);
  }

  const AddReview = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [gender, setGender] = useState("");
  
    function changeComment(e) {
      setComment(e.target.value);
    }

    function submit(evt) {
      if(gender === ""){
        console.log("Invalid input");
        return;
      }
      evt.preventDefault();
      
      addReview(NAME, rating.toString(), comment, gender);
      setComment("");
      setGender("");
      setRating(0);
    }
  
    return (
      <div className="container"> 
          <h2>Add a Review</h2>
          <div className="buttons">
              <Button className={(gender !== "gender-neutral" ? "selected-button" : "gender-button")} variant="contained" onClick={() => {setGender("gender-neutral")}}>Gender Neutral</Button>
              <Button className={(gender !== "women" ? "selected-button" : "gender-button")} variant="contained" onClick={() => {setGender("women")}}>Female</Button>
              <Button className={(gender !== "men" ? "selected-button" : "gender-button")} variant="contained" onClick={() => {setGender("men")}}>Male</Button>
          </div>
  
              <h2>Your Rating</h2>
  
          <div className="rating">
              <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
              setRating(newValue);
              }}/>
          </div> 
  
          <div>
              <form className="text" onSubmit={() => {console.log("A")}}>
                  <textarea maxLength="1300" placeholder='Leave a comment...' value={comment} onChange={changeComment} className="textbox"></textarea>
                  <Button className="gender-button" onClick={submit}>Submit</Button>
              </form>
          </div>
      </div>
    );
  }

    return (
      <div className="ackerman">
        <Restroom name={NAME} rating='3' reviews={reviews} images={images} />
        <AddReview />
      </div>
    )
  }
  
  export default AckermanL1;