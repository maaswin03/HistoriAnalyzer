import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router , Routes , Route ,Navigate} from 'react-router-dom'
import Home from './Home/Home'
import Pricing from './Pricing/Pricing'
import Chatbot from './Chatbot/Chatbot'
import Login from './LoginPage/Login'
import Signup from './Signup/Signup'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/login' element={<Login onLogin={handleLogin}/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route
            path="/chatbot"
            element={isLoggedIn ? <Chatbot /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App