import React from "react"
import Restroom from "../../components/Restroom"
import AddReview from "../../components/Addreview"


const Ackerman = () => {

  const reviews = [
    {
      'name': 'Ackerman',
      'rating': '5',
      'reviewText': '#blessed',
    },
    {
      'name': 'Ackerman1',
      'rating': '2',
      'reviewText': 'hella nasty',
    }
]

    return (
      <div className="ackerman">
        <Restroom name='Ackerman' rating='3' reviews={reviews}/>
        <AddReview />
      </div>
    )
  }
  
  export default Ackerman;