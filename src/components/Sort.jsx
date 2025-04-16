import React from 'react';
import '../styles/global.css';

const Sort = ({ sortCriterion, setSortCriterion, sortDirection, setSortDirection }) => {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-by">Sort by:</label>
      <select
        id="sort-by"
        value={sortCriterion}
        onChange={(e) => setSortCriterion(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
        <option value="category">Category</option>
        <option value="importance">Importance</option>
      </select>

      <label htmlFor="sort-dir">Order:</label>
      <select
        id="sort-dir"
        value={sortDirection}
        onChange={(e) => setSortDirection(e.target.value)}
      >
        <option value="asc">Ascending ↑</option>
        <option value="desc">Descending ↓</option>
      </select>
    </div>
  );
};

export default Sort;
