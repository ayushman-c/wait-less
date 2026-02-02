import React from 'react'
import './Landingpage.css'
import LandingNav from '../../components/LandingC/LandingNav'
import MenuSection from './MenuSection'
import SkipTheWait from './SkipTheWait'
import Footer from '../../components/Footer'
const Landingpage = () => {
  return (
    <>
      <LandingNav/>

      <section className="hero" aria-label="Welcome section">
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to The Seaside Bistro
        </h1>
        
        <p className="hero-subtitle">
          Experience coastal flavors, expertly crafted and delivered directly to your table.
        </p>
        
        <button 
          className="hero-cta"
          
          aria-label="View our full menu"
        >
          View Full Menu
        </button>
      </div>
    </section>

      <MenuSection/>
      <div className="full-menu">View Full Menu </div>
      <SkipTheWait/>
      <Footer/>
    </>
  )
}

export default Landingpage
