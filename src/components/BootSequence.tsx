import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const BootSequence: React.FC = () => {
  const [bootStage, setBootStage] = useState(0);
  const { currentTheme } = useTheme();
  
  // Boot sequence messages
  const bootMessages = [
    "INITIALIZING SYSTEM...",
    "LOADING PIXELCLOCK V1.0...",
    "CHECKING DISPLAY SETTINGS...",
    "CONFIGURING CRT PARAMETERS...",
    "BOOTING THEME ENGINE...",
    "SYSTEM READY"
  ];
  
  // Get theme-specific styles
  const getThemeStyles = () => {
    switch (currentTheme) {
      case 'arcade':
        return 'text-neon-blue';
      case 'gameboy':
        return 'text-gameboy-green';
      case 'synthwave':
        return 'text-neon-pink';
      case 'terminal':
        return 'text-terminal-green';
      default:
        return 'text-neon-blue';
    }
  };
  
  // Progress through boot sequence
  useEffect(() => {
    if (bootStage < bootMessages.length) {
      const timer = setTimeout(() => {
        setBootStage(prev => prev + 1);
      }, 500); // 500ms between messages
      
      return () => clearTimeout(timer);
    }
  }, [bootStage, bootMessages.length]);
  
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
      <div className={`boot-sequence ${getThemeStyles()} font-mono text-lg md:text-2xl`}>
        {bootMessages.slice(0, bootStage).map((message, index) => (
          <div key={index} className="mb-2">
            <span className="mr-2">{'>'}</span>
            <span className={index === bootStage - 1 ? 'animate-typing' : ''}>
              {message}
            </span>
            {index === bootStage - 1 && <span className="cursor animate-blink">_</span>}
            {index < bootStage - 1 && <span className="text-green-500 ml-2">OK</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootSequence;