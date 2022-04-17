import React, { useState } from 'react';
import Restroom from "../../components/Restroom"
import Rating from '@mui/material/Rating';
import "../../components/AddReview.css"
import { Button } from "react-bootstrap";
// import AddReview from "../../components/Addreview"


const Ackerman = () => {

  const [reviews, setReviews] = useState([
    {
      'name': 'Ackerman Grand Ballroom',
      'rating': '3.0',
      'reviewText': 'Honestly pretty bleh. Don’t let the number of stalls fool you. The lighting is pretty uneven so some stalls are super dark while others are really bright. On top of that, it took me a solid minute to figure out how to lock the stall because the locks require a lot of rotations before the tongue lock pops out.',
      'type': 'women',
    },
    // {
    //   'name': 'Ackerman Grand Ballroom',
    //   'rating': '5.0',
    //   'reviewText': 'This bathroom has more stalls than my instagram followers. Potential party venue.',
    //   'type': 'men',
    // },
    // {
    //   'name': 'Ackerman Grand Ballroom',
    //   'rating': '5.0',
    //   'reviewText': 'The capacity of these bathrooms is actually incredible. Perfect for students and families that are touring, but also big enough that it doesn’t annoy us students who actually go here.',
    //   'type': 'women',
    // },
    // {
    //   'name': 'Ackerman Grand Ballroom',
    //   'rating': '5.0',
    //   'reviewText': 'This bathroom has a diaper changing station! It’s a very large and roomy bathroom which was super helpful. What a life saver.',
    //   'type': 'women',
    // },
    // {
    //   'name': 'Ackerman Grand Ballroom',
    //   'rating': '5.0',
    //   'reviewText': 'Grand, Mesmerizing, life changing! ',
    //   'type': 'men',
    // }
  ])

  const images = [
      'https://i.ibb.co/mhjrN8m/ackerman-bathroom.jpg',
      'https://i.ibb.co/26dh89h/ackerman2.jpg',
      'https://i.ibb.co/Yfg9H3B/ackermangrandmenstalls.jpg',
      'https://i.ibb.co/3dgmFLS/womensackermangrandentrance.jpg',
      'https://i.ibb.co/Fb48wcs/womensackermengrandsinksdiaper.jpg',

  ]

  function addReview(name, rating, reviewText, type){
    const temp = reviews;
    temp.push({'name' : name, 'rating': rating, 'reviewText': reviewText, 'type': type});
    setReviews(temp);
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
      
      addReview("Test", rating.toString(), comment, gender);
      setComment("");
      setGender("");
      setRating(0);
    }
  
    return (
      <div className="container"> 
          <h2>Add a Review</h2>
          <div className="buttons">
              <Button className={(gender !== "men" ? "selected-button" : "gender-button")} variant="contained" onClick={() => {setGender("men")}}>Male</Button>
              <Button className={(gender !== "women" ? "selected-button" : "gender-button")} variant="contained" onClick={() => {setGender("women")}}>Female</Button>
              <Button className={(gender !== "gender-neutral" ? "selected-button" : "gender-button")} variant="contained" onClick={() => {setGender("gender-neutral")}}>Gender Neutral</Button>
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
        <Restroom name='Ackerman' rating='3' reviews={reviews} images={images} />
        <AddReview/>
      </div>
    )
  }
  
  export default Ackerman;