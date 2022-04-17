import React from "react"
import Restroom from "../../components/Restroom"
import AddReview from "../../components/Addreview"


const Ackerman = () => {

  const reviews = [
    {
      'name': 'Ackerman Grand Ballroom',
      'rating': '5',
      'reviewText': '#blessed',
      'type': 'men',
    },
    {
      'name': 'Ackerman Grand Ballroom',
      'rating': '2',
      'reviewText': 'hella nasty',
      'type': 'women',
    }
  ]

  const images = [
      'https://i.ibb.co/mhjrN8m/ackerman-bathroom.jpg',
      'https://i.ibb.co/26dh89h/ackerman2.jpg',
      'https://i.ibb.co/Yfg9H3B/ackermangrandmenstalls.jpg',
  ]

    return (
      <div className="ackerman">
        <Restroom name='Ackerman' rating='3' reviews={reviews} images={images} />
        <AddReview />
      </div>
    )
  }
  
  export default Ackerman;