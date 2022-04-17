import React from "react"
import Restroom from "../../components/Restroom"
import AddReview from "../../components/Addreview"


const Ackerman = () => {

  let reviews = [
    {
      'name': 'Ackerman Grand Ballroom',
      'rating': '5',
      'reviewText': '#blessed',
      'gender' : ''
    },
    {
      'name': 'Ackerman Grand Ballroom',
      'rating': '2',
      'reviewText': 'hella nasty',
    }
  ]

  const images = [
      'https://i.ibb.co/mhjrN8m/ackerman-bathroom.jpg',
      'https://i.ibb.co/26dh89h/ackerman2.jpg',
      'https://i.ibb.co/Yfg9H3B/ackermangrandmenstalls.jpg',
  ]

  function add(name, rating, reviewText){
    reviews.push({'name' : name, 'rating': rating, 'reviewText': reviewText});
    console.log(reviews);
  }

    return (
      <div className="ackerman">
        <Restroom name='Ackerman' rating='3' reviews={reviews} images={images} />
        <AddReview onSubmit={add}/>
      </div>
    )
  }
  
  export default Ackerman;