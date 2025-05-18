import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Background: React.FC = () => {
  const { currentTheme } = useTheme();
  
  // Apply different background styles based on theme
  const getBackgroundStyles = () => {
    switch (currentTheme) {
      case 'arcade':
        return 'bg-arcade-gradient';
      case 'gameboy':
        return 'bg-gameboy-gradient';
      case 'synthwave':
        return 'bg-synthwave-gradient';
      case 'terminal':
        return 'bg-terminal-gradient';
      default:
        return 'bg-arcade-gradient';
    }
  };
  
  return (
    <div className={`absolute inset-0 ${getBackgroundStyles()}`}>
      {currentTheme === 'synthwave' && (
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="w-full h-full grid-overlay"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 city-skyline"></div>
        </div>
      )}
      
      {currentTheme === 'arcade' && (
        <div className="absolute inset-0 starfield">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="star absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      )}
      
      {currentTheme === 'terminal' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="terminal-bg w-full h-full opacity-10"></div>
        </div>
      )}
    </div>
  );
};

export default Background;