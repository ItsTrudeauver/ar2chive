// src/App.jsx
import React from 'react';
import Home from './pages/Home';
// Make sure the path is correct - adjust if needed
import './styles/landing.css';

const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default App;