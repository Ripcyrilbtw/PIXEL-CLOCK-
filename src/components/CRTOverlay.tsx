import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CRTOverlay: React.FC = () => {
  const { currentTheme } = useTheme();
  
  // Apply different scanline opacity based on theme
  const getScanlineOpacity = () => {
    switch (currentTheme) {
      case 'arcade':
        return 'opacity-20';
      case 'gameboy':
        return 'opacity-15';
      case 'synthwave':
        return 'opacity-25';
      case 'terminal':
        return 'opacity-30';
      default:
        return 'opacity-20';
    }
  };
  
  // Apply different glow colors based on theme
  const getGlowColor = () => {
    switch (currentTheme) {
      case 'arcade':
        return 'from-blue-500/10 to-transparent';
      case 'gameboy':
        return 'from-green-500/10 to-transparent';
      case 'synthwave':
        return 'from-pink-500/10 to-transparent';
      case 'terminal':
        return 'from-green-500/10 to-transparent';
      default:
        return 'from-blue-500/10 to-transparent';
    }
  };
  
  return (
    <div className="crt-effects absolute inset-0 pointer-events-none z-20">
      {/* Scanlines */}
      <div className={`scanlines absolute inset-0 ${getScanlineOpacity()}`}>
        <div className="scanline-animation"></div>
      </div>
      
      {/* CRT rounded corners */}
      <div className="absolute inset-0 rounded-2xl border-t-8 border-l-8 border-r-8 border-b-8 border-gray-950 overflow-hidden"></div>
      
      {/* CRT glow */}
      <div className={`absolute inset-0 bg-gradient-radial ${getGlowColor()} opacity-50`}></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 mix-blend-overlay opacity-[0.03]">
        <div className="noise-animation"></div>
      </div>
      
      {/* CRT flicker effect */}
      <div className="absolute inset-0 flicker-animation opacity-5 bg-white mix-blend-overlay"></div>
    </div>
  );
};

export default CRTOverlay;