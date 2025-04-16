// src/components/Pagination.jsx

import React from 'react';

const Pagination = ({ currentPage, totalPages, handleNextPage, handlePreviousPage }) => {
  return (
    <div className="pagination-controls">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
