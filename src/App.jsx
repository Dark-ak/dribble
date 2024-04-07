import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Signup from "./components/Signup"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './components/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/create-profile' element={<Create />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
