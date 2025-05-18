import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Monitor, Gamepad, Sparkles, Terminal } from 'lucide-react';

const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();

  const themes = [
    { id: 'arcade', icon: Gamepad, label: 'Arcade' },
    { id: 'gameboy', icon: Monitor, label: 'GameBoy' },
    { id: 'synthwave', icon: Sparkles, label: 'Synthwave' },
    { id: 'terminal', icon: Terminal, label: 'Terminal' },
  ];

  return (
    <div className="p-6 bg-black/50 rounded-lg backdrop-blur">
      <h2 className="text-2xl mb-6 text-center">Select Theme</h2>
      <div className="grid grid-cols-2 gap-4">
        {themes.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setTheme(id as any)}
            className={`
              p-4 rounded-lg flex flex-col items-center gap-2 transition-all
              ${currentTheme === id ? 'bg-white/10 scale-105' : 'bg-black/30 hover:bg-white/5'}
            `}
          >
            <Icon size={24} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;