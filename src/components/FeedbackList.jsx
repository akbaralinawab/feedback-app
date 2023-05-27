import React from 'react'
import { motion, AnimatePresence } from 'framer-motion' //For Animation
// npm i framer-motion@4.1.17
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <div>No Feedback Yet.</div>
  }

  //Return statement with animation implemented
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  //Return statement without animation
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
