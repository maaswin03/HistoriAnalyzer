import React from 'react'
import Textapp from './TextPage/Textapp'
import GeminiComponent from './GeminiComponent'
import Login from './LoginPage/Login'
import Signup from './Signup/Signup'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Textapp/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App