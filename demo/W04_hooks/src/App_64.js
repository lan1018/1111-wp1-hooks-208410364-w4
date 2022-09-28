import { useState } from 'react';
import Menu_64 from './components/Menu_64';
import items from './data'
import React from 'react';
import './App_64.css';
import Category_64 from './components/Category_64';

const allCategories = ['all', 'breakfast', 'lunch', 'chakes', '64'];

const App_64 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter( (item) => item.category === category);
      setMenuItems(newItems);
    }
  }

  console.log('menuItems', menuItems);
  return (
    <section className="menu">
        {/* title */}
        <div className="title">
          <h2>our menu 208410364</h2>
          <div className="underline"></div>
        </div>
        {/* filter buttons */}
        <Category_64 categories={categories} filterItems={filterItems} />
        {/* menu items */}
        <Menu_64 items={menuItems} />
        <script src="app.js"></script>
      </section>
       
  );
};

export default App_64;