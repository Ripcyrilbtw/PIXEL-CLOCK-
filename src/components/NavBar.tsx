import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Clock, Palette, Bell, Settings } from 'lucide-react';

interface NavBarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, setCurrentView }) => {
  const { currentTheme } = useTheme();
  
  const getNavStyles = () => {
    switch (currentTheme) {
      case 'arcade':
        return 'bg-gray-900 border-t-2 border-neon-blue';
      case 'gameboy':
        return 'bg-gameboy-dark border-t-2 border-gameboy-green';
      case 'synthwave':
        return 'bg-synthwave-dark border-t-2 border-neon-pink';
      case 'terminal':
        return 'bg-black border-t-2 border-terminal-green';
      default:
        return 'bg-gray-900 border-t-2 border-neon-blue';
    }
  };
  
  const navItems = [
    { id: 'clock', label: 'Clock', icon: Clock },
    { id: 'themes', label: 'Themes', icon: Palette },
    { id: 'alarms', label: 'Alarms', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];
  
  return (
    <div className={`${getNavStyles()} w-full py-2`}>
      <div className="arcade-buttons flex justify-around items-center px-2">
        {navItems.map(item => {
          const IconComponent = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              className={`
                nav-button flex flex-col items-center px-2 py-1 rounded-md
                transition-all duration-200 ${isActive ? 'scale-110' : 'scale-100'}
                ${isActive ? 'text-white' : 'text-gray-400'}
                hover:text-white hover:scale-110
              `}
              onClick={() => setCurrentView(item.id)}
            >
              <IconComponent 
                size={24} 
                className={`
                  ${isActive ? 'animate-pulse' : ''}
                  ${currentTheme === 'arcade' && isActive ? 'text-neon-blue' : ''}
                  ${currentTheme === 'gameboy' && isActive ? 'text-gameboy-green' : ''}
                  ${currentTheme === 'synthwave' && isActive ? 'text-neon-pink' : ''}
                  ${currentTheme === 'terminal' && isActive ? 'text-terminal-green' : ''}
                `}
              />
              <span className="text-xs mt-1 font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;