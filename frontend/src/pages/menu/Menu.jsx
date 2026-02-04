import { useState } from 'react';
import MenuNav from '../../components/menuC/MenuNav';
import MenuDisplay from '../../components/menuC/MenuDisplay';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  return (
    <div className="menu-page">

        

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
      <MenuDisplay category={activeCategory} />


      
    </div>

    
  );
};

export default Menu;