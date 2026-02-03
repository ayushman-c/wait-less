import { menuItems } from '../data/menuData';

// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchDishesByCategory = async (category) => {
  await delay(300); // Simulate network
  
  return menuItems.filter(item => item.category === category);
};