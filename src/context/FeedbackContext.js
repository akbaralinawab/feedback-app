import { createContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is review 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is review 2',
      rating: 5,
    },
    {
      id: 3,
      text: 'This is review 3',
      rating: 6,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to Delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidV4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = (id, updItem) => {
    // console.log(id, updItem)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedBack,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
