import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingNav from './components/LandingC/LandingNav'
import Landingpage from './pages/Landing/Landingpage'
import Signin from './pages/sign-in/Sign-in'
import MainMenu from './pages/menu/MainMenu'
import Menu from './pages/menu/Menu'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'


  const App = () => {
  return(
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}></Route>
          <Route path='/sign-in' element={<Signin/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
  }

export default App
