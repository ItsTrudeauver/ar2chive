// src/components/BooksTable.jsx
import React from 'react';

const importanceColors = {
  'Must read': '#FF6347',
  'Systematic context needed': '#FFD700',
  'Controversial but not wholly dismissible': '#1E90FF',
};

const importanceLabels = {
  'Must read': 'Books that are essential in their field.',
  'Systematic context needed': 'Books that need background context to fully understand.',
  'Controversial but not wholly dismissible': 'Books that have mixed opinions but offer valuable insights.'
};

const BooksTable = ({ books }) => {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Category</th>
          <th>Subcategory</th>
          <th>Year Published</th>
          <th>Importance</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.subcategory}</td>
            <td>{book.year}</td>
            <td>
              <div
                className="importance-dot"
                style={{ backgroundColor: importanceColors[book.importance] }}
                title={importanceLabels[book.importance]}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
