import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/About/AboutUs'
import OurFamily from "./pages/About/OurFamily"
import OurStory from "./pages/About/OurStory"
import Services from './pages/Services/Services'
import FloralDesign from './pages/Services/FloralDesign'
import PhotographyandMedia from "./pages/Services/PhotographyandMedia"
import Reviews from './pages/Reviews'
import ContactUs from './pages/ContactUs'

import Navbar from './components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'

import './App.css'

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
              <Route  path='/about-us' element={<AboutUs />} />
              <Route  path='/our-family' element={<OurFamily />} />
              <Route  path='/our-story' element={<OurStory />} />
              <Route  path='/services' element={<Services />} />
              <Route  path='/floral-design' element={<FloralDesign />} />
              <Route  path='/photography-and-media' element={<PhotographyandMedia />} />
              <Route  path='/reviews' element={<Reviews />} />
              <Route  path='/contact-us' element={<ContactUs />} />
            </Routes>
            <Footer />
          </Router>
        </div>
    )
  );
}

export default App;
