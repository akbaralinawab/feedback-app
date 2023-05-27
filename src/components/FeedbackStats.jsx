import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  let average =
    feedback.reduce((acc, item) => {
      return acc + item.rating
    }, 0) / feedback.length
  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      <div>{feedback.length} reviews</div>
      <div>Ratting: {isNaN(average) ? 0 : average}</div>
    </div>
  )
}

export default FeedbackStats
