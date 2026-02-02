import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingNav from './components/LandingC/LandingNav'
import Landingpage from './pages/Landing/Landingpage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'


  const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Landingpage/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </>
  )
  }

export default App
