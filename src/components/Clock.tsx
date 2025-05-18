import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSettingsStore } from '../stores/settingsStore';
import { format } from 'date-fns';

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const { currentTheme } = useTheme();
  const { use24Hour, showSeconds } = useSettingsStore();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setIsBlinking(prev => !prev);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const getThemeStyles = () => {
    switch (currentTheme) {
      case 'arcade':
        return 'text-neon-blue drop-shadow-[0_0_10px_rgba(0,230,255,0.7)]';
      case 'gameboy':
        return 'text-gameboy-green';
      case 'synthwave':
        return 'text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,230,0.7)]';
      case 'terminal':
        return 'text-terminal-green';
      default:
        return 'text-neon-blue drop-shadow-[0_0_10px_rgba(0,230,255,0.7)]';
    }
  };

  const timeFormat = use24Hour ? 'HH:mm' : 'hh:mm';
  const formattedTime = format(time, timeFormat);
  const formattedSeconds = format(time, 'ss');
  const ampm = use24Hour ? '' : format(time, 'aa');

  return (
    <div className="crt-frame p-8 m-4 relative">
      <div className={`clock-display ${getThemeStyles()} text-7xl md:text-9xl flex items-center justify-center`}>
        <span>{formattedTime}</span>
        {!use24Hour && <span className="text-4xl md:text-6xl ml-4 self-start mt-4">{ampm}</span>}
      </div>
      {showSeconds && (
        <div className={`seconds ${getThemeStyles()} text-3xl md:text-4xl text-center mt-2 opacity-75`}>
          {formattedSeconds}
        </div>
      )}
      <div className={`date ${getThemeStyles()} text-xl md:text-2xl text-center mt-6 opacity-80`}>
        {format(time, 'EEE, MMM d')}
      </div>
    </div>
  );
};

export default Clock;