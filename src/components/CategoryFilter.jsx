import React from 'react';

const CategoryFilter = ({ selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
