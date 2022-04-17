import React from "react"
import Restroom from "../../components/Restroom"

const Ackerman = () => {

  const reviews = [
    {
      'name': 'Ackerman Grand Ballroom',
      'rating': '5',
      'reviewText': '#blessed',
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

    return (
      <div className="ackerman">
        <Restroom name='Ackerman' rating='3' reviews={reviews} images={images} />
      </div>
    )
  }
  
  export default Ackerman;