import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </Router>
  )
}

export default App