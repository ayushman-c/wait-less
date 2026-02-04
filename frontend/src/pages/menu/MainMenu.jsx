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
      
      
    </div>
  );
};


export default MainMenu
