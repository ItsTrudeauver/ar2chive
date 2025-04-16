import React, { useState, useEffect } from 'react';
// Note: Make sure this CSS file is properly loaded
import '../styles/landing.css';

const Landing = ({ onContinue }) => {
  const [floatingElements, setFloatingElements] = useState([]);
  
  // Create floating elements on component mount
  useEffect(() => {
    const createFloatingElements = () => {
      const newElements = [];
      
      // Create dots
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: `dot-${i}`,
          type: 'dot',
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 6 + 4}px`,
          duration: `${Math.random() * 20 + 10}s`,
          delay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.3,
          animation: `float-up ${Math.random() * 20 + 10}s linear ${Math.random() * 5}s infinite`
        });
      }
      
      // Create text symbols
      const symbols = ['✦', '✧', '✺', '✵', '✴', '⌘', '⦿', '◎', '◉'];
      for (let i = 0; i < 105; i++) {
        newElements.push({
          id: `symbol-${i}`,
          type: 'symbol',
          content: symbols[Math.floor(Math.random() * symbols.length)],
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 10 + 12}px`,
          animation: `${Math.random() > 0.5 ? 'float-diagonal' : 'float-zigzag'} ${Math.random() * 25 + 15}s linear ${Math.random() * 5}s infinite`
        });
      }
      
      // Create lines
      for (let i = 0; i < 10; i++) {
        newElements.push({
          id: `line-${i}`,
          type: 'line',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 30 + 20}px`,
          height: '2px',
          rotation: `${Math.random() * 180}deg`,
          animation: `float-up ${Math.random() * 20 + 15}s linear ${Math.random() * 5}s infinite`
        });
      }
      
      // Create squares and circles
      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: `square-${i}`,
          type: 'square',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 15 + 10}px`,
          animation: `float-zigzag ${Math.random() * 25 + 15}s linear ${Math.random() * 5}s infinite`
        });
        
        newElements.push({
          id: `circle-${i}`,
          type: 'circle',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 25 + 15}px`,
          animation: `${i % 2 === 0 ? 'float-up' : 'pulse'} ${Math.random() * 20 + 10}s linear ${Math.random() * 5}s infinite`
        });
      }
      
      setFloatingElements(newElements);
    };
    
    createFloatingElements();
  }, []);

  // Handle continue button click with animations
  const handleContinue = () => {
    // Add the hidden class to trigger the CSS transition

    
    const landingElement = document.querySelector('.landing-overlay');
    if (landingElement) {
      landingElement.classList.add('hidden');
    }
    
    // Create flying books effect
    
    
    // Fade in the main content
    const mainContent = document.querySelector('.container');
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.transition = 'opacity 1.5s ease-in';
      
      setTimeout(() => {
        mainContent.style.opacity = '1';
      }, 300);
    }
    
    // Call the parent component's onContinue with a delay
    if (onContinue) {
      setTimeout(() => onContinue(), 800);
    }
    
  };

  // Render floating element based on its type
  const renderFloatingElement = (element) => {
    switch (element.type) {
      case 'dot':
        return (
          <div 
            key={element.id}
            className="dot"
            style={{
              left: element.left,
              width: element.size,
              height: element.size,
              opacity: element.opacity,
              animation: element.animation
            }}
          />
        );
      case 'symbol':
        return (
          <div 
            key={element.id}
            className="floating-symbol"
            style={{
              left: element.left,
              top: element.top,
              fontSize: element.size,
              animation: element.animation
            }}
          >
            {element.content}
          </div>
        );
      case 'line':
        return (
          <div 
            key={element.id}
            className="floating-line"
            style={{
              left: element.left,
              top: element.top,
              width: element.width,
              height: element.height,
              transform: `rotate(${element.rotation})`,
              animation: element.animation
            }}
          />
        );
      case 'square':
        return (
          <div 
            key={element.id}
            className="floating-square"
            style={{
              left: element.left,
              top: element.top,
              width: element.size,
              height: element.size,
              animation: element.animation
            }}
          />
        );
      case 'circle':
        return (
          <div 
            key={element.id}
            className="floating-circle"
            style={{
              left: element.left,
              top: element.top,
              width: element.size,
              height: element.size,
              animation: element.animation
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="landing-overlay">
    
      
      {/* Enhanced Floating Elements */}
      <div className="floating-elements">
        {floatingElements.map(element => renderFloatingElement(element))}
      </div>
      
      <div className="landing-content">
        <div className="library-graphic">
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
        </div>
        
        <h1 className="landing-logo">
          ar<span className="highlight">2</span>chive
        </h1>
        
        <p className="landing-tagline">
          Community knowledge repertoire
        </p>
        
        <div className="decorative-line"></div>
        
        <button className="continue-button" onClick={handleContinue}>
          Continue <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;