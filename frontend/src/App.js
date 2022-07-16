import React, { useState } from 'react'

import './App.css';

function App() {

  const [loading, setLoading] = useState(true)
  const preloader = document.query.getElementById('preloader')

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000)
  }

  return (
    !loading && (
        <div className='App'>

        </div>
    )
  );
}

export default App;
