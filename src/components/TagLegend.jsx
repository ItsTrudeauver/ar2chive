import React from 'react';
import '../styles/global.css';

const TagLegend = () => {
  return (
    <div className="importance-legend">
      <span><span className="importance-dot must-read" /> Must read</span>
      <span><span className="importance-dot context-needed" /> Systematic context needed</span>
      <span><span className="importance-dot standalone" /> Separate non-systemic work</span>
      <span><span className="importance-dot controversial" /> Controversial but not wholly dismissible</span>
    </div>
  );
};

export default TagLegend;
