import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import Navbar from './components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'

import './App.css';

const App = () => {

  const [loading, setLoading] = useState(true)
  const preloader = document.getElementById('preloader')

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000)
  }

  return (
    !loading && (
        <div className='App'>
          <Router>
            <Navbar />
            <Routes>
              <Route  path='/' element={<Home />} />
            </Routes>
            <Footer />
          </Router>
        </div>
    )
  );
}

export default App;
