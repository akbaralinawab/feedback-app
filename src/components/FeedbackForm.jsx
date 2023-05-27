import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'
import { useContext, useEffect } from 'react'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessaage] = useState('')

  const { addFeedBack, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  const handleOnChange = (e) => {
    let value = e.target.value
    setText(value)
    if (value === '') {
      setBtnDisabled(true)
      setMessaage('')
    } else if (value !== '' && value.trim().length <= 10) {
      setBtnDisabled(true) // Don't need this line because it has already on that state.
      setMessaage('Text should be at least 10 characters long')
    } else {
      setBtnDisabled(false)
      setMessaage('')
    }
  }

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleSubmit = (e) => {
    e.preventDefault()
    let feedback = {
      text,
      rating,
    }
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, feedback)
    } else {
      addFeedBack(feedback)
    }
    setText('')
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>How do you wanna rate your service with us?</h4>
        <RatingSelect
          select={(rating) => setRating(rating)}
          initialValue={rating}
        />
        <div className='input-group'>
          <input
            onChange={handleOnChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
