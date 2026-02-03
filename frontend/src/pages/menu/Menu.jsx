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
      <MenuDisplay category={activeCategory} />
    </div>
  );
};

export default Menu;