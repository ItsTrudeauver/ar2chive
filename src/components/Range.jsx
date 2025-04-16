import React from 'react';

const Range = ({
  rangeStart, 
  rangeEnd, 
  setRangeStart, 
  setRangeEnd, 
  selectedCulturalPeriod, 
  setSelectedCulturalPeriod
}) => {
  // Cultural periods data moved here from Home.jsx
  const culturalPeriods = [
    { name: "Ancient Greek", start: -800, end: 300 },
    { name: "Roman", start: 500, end: 500 },
    { name: "Medieval", start: 500, end: 1500 },
    { name: "Renaissance", start: 1300, end: 1600 },
    { name: "Enlightenment", start: 1700, end: 1800 },
    { name: "Industrial", start: 1760, end: 1900 },
    { name: "Modern", start: 1900, end: 1970 },
    { name: "Digital Age", start: 1970, end: new Date().getFullYear() }
  ];

  const handleCulturalPeriodSelect = (period) => {
    setSelectedCulturalPeriod(period.name);
    // Automatically update year range when selecting period
    setRangeStart(period.start);
    setRangeEnd(period.end);
  };

  const clearCulturalPeriod = () => {
    setSelectedCulturalPeriod('');
    // Reset to default year range when clearing
    setRangeStart(0);
    setRangeEnd(new Date().getFullYear());
  };

  return (
    <div className="cultural-periods">
      {culturalPeriods.map((period) => (
        <button
          key={period.name}
          className={`period-button ${selectedCulturalPeriod === period.name ? 'active' : ''}`}
          onClick={() => handleCulturalPeriodSelect(period)}
        >
          {period.name}
        </button>
      ))}
      <button
        className="clear-button"
        onClick={clearCulturalPeriod}
      >
        ×
      </button>
    </div>
  );
};

export default Range;