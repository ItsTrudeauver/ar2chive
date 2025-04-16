// src/components/CategoryMenu.jsx
import React from 'react';

const CategoryMenu = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-menu">
      <button
        className={selectedCategory === 'All' ? 'active' : ''}
        onClick={() => setSelectedCategory('All')}
      >
        All
      </button>
      <button
        className={selectedCategory === 'History' ? 'active' : ''}
        onClick={() => setSelectedCategory('History')}
      >
        History
      </button>
      <button
        className={selectedCategory === 'Philosophy' ? 'active' : ''}
        onClick={() => setSelectedCategory('Philosophy')}
      >
        Philosophy
      </button>
      <button
        className={selectedCategory === 'Literature' ? 'active' : ''}
        onClick={() => setSelectedCategory('Literature')}
      >
        Literature
      </button>
      <button
        className={selectedCategory === 'Economics' ? 'active' : ''}
        onClick={() => setSelectedCategory('Economics')}
      >
        Economics
      </button>
    </div>
  );
};

export default CategoryMenu;
