import React, { useState } from 'react';
import Restroom from "../../components/Restroom"
import Rating from '@mui/material/Rating';
import "../../components/AddReview.css"
import { Button } from "react-bootstrap";

const NAME = "Powell Library Basement"
const DATA = [
    {
      'name': 'Powell Library Basement',
      'rating': '5.0',
      'reviewText': 'Honestly a fire bathroom to use during your study breaks. There are so many stalls and it’s the perfect distance from the main room in Powell for a solid 10 minutes of procrastination.',
      'type': 'women',
    },
    {
      'name': 'Powell Library Basement',
      'rating': '4.0',
      'reviewText': 'I use the Powell bathroom so much when I’m walking from class to class because it’s so big and always pretty empty. Only con is that you do have to go to the Powell basement for it, but it’s worth.',
      'type': 'women',
    },
    {
      'name': 'Powell Library Basement',
      'rating': '5.0',
      'reviewText': '',
      'type': 'women',
    }
  ]

  const images = [
    'https://i.ibb.co/SxLzd7m/powellstalls.jpg',
    'https://i.ibb.co/ns4L6pf/powellbasementsinkswomen.jpg'
]

const PowellBasement = () => {

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
  
  export default PowellBasement;