import React from 'react'
import { useState } from 'react';
import './MainMenu.css'
import MenuNav from '../../components/menuC/MenuNav'

const MainMenu = () => {
const [activeCategory, setActiveCategory] = useState('breakfast');

  return (
    <div>
      <MenuNav 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <main className="menu-content">
        {activeCategory === 'breakfast' && <div className='menu-head'>Breakfast Items</div>}
        {activeCategory === 'main' && <div className='menu-head'>Main Course Items</div>}
        {activeCategory === 'drinks' && <div className='menu-head'>Drinks</div>}
        {activeCategory === 'desserts' && <div className='menu-head'>Desserts</div>}
      </main>
    </div>
  );
};


export default MainMenu
