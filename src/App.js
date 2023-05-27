import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutLinkIcon from './components/AboutLinkIcon'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header text={'Feedback UI'} />
                <div className='container'>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
                <AboutLinkIcon />
              </>
            }
          />

          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App
