import React, { useEffect, useState } from 'react';
import Landing from '../components/Landing'; // Import the Landing component
import booksData from '../data/books.json';
import Sort from '../components/Sort';
import Search from '../components/Search';
import TagLegend from '../components/TagLegend';
import Range from '../components/Range';  
import CustomSelect from '../components/CustomSelect';
import '../styles/global.css';
import '../styles/landing.css';

const Home = () => {    
  // Add state for showing/hiding the landing page
  const [showLanding, setShowLanding] = useState(true);
  
  // Handle continue button click from Landing component
  const handleContinue = () => {
    setShowLanding(false);
  };
  
  const [sortCriterion, setSortCriterion] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(new Date().getFullYear());
  const [selectedCulturalPeriod, setSelectedCulturalPeriod] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true); // Optional toggle for pagination
  const itemsPerPage = 50;

  // Track scroll position
  const [scrolled, setScrolled] = useState(false);

  // Set up scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0; // or whatever threshold you want
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  // Helper function to check if a book matches the search terms
  const matchesSearch = (book, query) => {
    const keywords = query.toLowerCase().split(' ').filter(keyword => keyword.length > 0);
    
    return keywords.every(keyword => {
      return (
        (book.title && book.title.toLowerCase().includes(keyword)) ||
        (book.author && book.author.toLowerCase().includes(keyword)) ||
        (book.category && book.category.toLowerCase().includes(keyword)) ||
        (book.subcategory && book.subcategory.toLowerCase().includes(keyword)) ||
        (book.culturalPeriod && book.culturalPeriod.toLowerCase().includes(keyword))
      );
    });
  };

  // Filter books by search query across multiple criteria
  const filteredBooks = booksData.filter((book) => matchesSearch(book, searchQuery));

  // Apply year range filter
  const filteredByYearRange = filteredBooks.filter((book) =>
    book.year >= rangeStart && book.year <= rangeEnd
  );

  // Apply cultural period filter
  const effectiveFilteredBooks = filteredByYearRange;

  // Sort books based on selected criteria
  const sortedBooks = [...effectiveFilteredBooks].sort((a, b) => {
    let comparison = 0;
    if (sortCriterion === 'year') {
      comparison = a.year - b.year;
    } else {
      comparison = a[sortCriterion]?.localeCompare(b[sortCriterion]);
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Books to display - either paginated or all (if scrolling)
  const booksToDisplay = showPagination 
    ? sortedBooks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : sortedBooks;

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      {/* Render the Landing component if showLanding is true */}
      {showLanding && <Landing onContinue={handleContinue} />}
      
      {/* Only show the rest of your home content when landing is dismissed */}
      {!showLanding && (
        <div className={`container fade-in`}>
          {/* Fixed Header Section */}
          <div className="fixed-header">
            {/* Importance Legend */}
            <div className="importance-legend">
              <span><span className="importance-dot must-read" /> Must Read</span>
              <span><span className="importance-dot context-needed" /> Needs Context</span>
              <span><span className="importance-dot standalone" /> Standalone Work</span>
              <span><span className="importance-dot controversial" /> Controversial</span>
            </div>

            {/* Filters Section */}
            <div className="filter-section">
              {/* Search Bar */}
              <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

              {/* Filter Row */}
              <div className="filter-row">
                {/* Sort By */}
                <div className="filter-group">
                  <span> Sort by: </span>
                  <select
                    value={sortCriterion}
                    onChange={(e) => setSortCriterion(e.target.value)}
                    className="compact-select"
                  >
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="year">Year</option>
                    <option value="category">Category</option>
                    <option value="subcategory">Subcategory</option>
                  </select>
                  <button
                    className="sort-toggle"
                    onClick={() => setSortDirection(d => d === 'asc' ? 'desc' : 'asc')}
                  >
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </button>
                </div>

                {/* Year Range */}
                <div className="filter-group">
                  <span>Years:</span>
                  <div className="year-inputs">
                    <input
                      type="number"
                      className="year-input"
                      value={rangeStart}
                      onChange={(e) => setRangeStart(parseInt(e.target.value))}
                    />
                    <span>–</span>
                    <input
                      type="number"
                      className="year-input"
                      value={rangeEnd}
                      onChange={(e) => setRangeEnd(parseInt(e.target.value))}
                    />
                  </div>
                  <button
                    className="clear-button"
                    onClick={() => {
                      setRangeStart(0);
                      setRangeEnd(new Date().getFullYear());
                    }}
                  >
                    ×
                  </button>
                </div>

                {/* Cultural Periods */}
                <div className="filter-group">
                  <Range
                    rangeStart={rangeStart}
                    rangeEnd={rangeEnd}
                    setRangeStart={setRangeStart}
                    setRangeEnd={setRangeEnd}
                    selectedCulturalPeriod={selectedCulturalPeriod}
                    setSelectedCulturalPeriod={setSelectedCulturalPeriod}
                  />
                </div>
                
                {/* Pagination Toggle */}
                <div className="filter-group">
                  <span>Pagination:</span>
                  <button 
                    className={`period-button ${showPagination ? 'active' : ''}`}
                    onClick={() => setShowPagination(!showPagination)}
                  >
                    {showPagination ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Book Table Container */}
          <div className="book-table-container">
            <div className="book-table">
              <div className="book-table-header">
                <span>Title</span>
                <span>Author</span>
                <span>Category</span>
                <span>Year</span>
                <span>Importance</span>
              </div>

              {/* Book Rows */}
              {booksToDisplay.map((book, index) => (
                <div key={index} className="book-table-row">
                  <span className="text-primary">{book.title}</span>
                  <span className="text-secondary">{book.author}</span>
                  <span className="category-group">
                    <span className="category-tag">{book.category}</span>
                    <span className="arrow">→</span>
                    <span className="subcategory-tag">{book.subcategory}</span>
                  </span>
                  <span className="year-badge">{book.year}</span>
                  <span>
                    <span className={`importance-dot ${book.importance}`} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination (Optional - Only show if enabled) */}
          {showPagination && (
            <div className="pagination">
              <button 
                className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>
              <span className="page-indicator">
                Page {currentPage} of {Math.ceil(sortedBooks.length / itemsPerPage)}
              </span>
              <button
                className={`pagination-btn primary ${currentPage === Math.ceil(sortedBooks.length / itemsPerPage) ? 'disabled' : ''}`}
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(sortedBooks.length / itemsPerPage)}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;