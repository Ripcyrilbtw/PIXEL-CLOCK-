import React from 'react';
import { useSettingsStore } from '../stores/settingsStore';
import { Clock2 as Clock24, Clock, Timer } from 'lucide-react';

const Settings: React.FC = () => {
  const { use24Hour, showSeconds, toggleTimeFormat, toggleSeconds } = useSettingsStore();

  return (
    <div className="p-6 bg-black/50 rounded-lg backdrop-blur">
      <h2 className="text-2xl mb-6 text-center">Settings</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
          <div className="flex items-center gap-3">
            {use24Hour ? <Clock24 size={20} /> : <Clock size={20} />}
            <span>24-hour format</span>
          </div>
          <button
            onClick={toggleTimeFormat}
            className={`w-12 h-6 rounded-full transition-colors ${
              use24Hour ? 'bg-white/20' : 'bg-black/20'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                use24Hour ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
          <div className="flex items-center gap-3">
            <Timer size={20} />
            <span>Show seconds</span>
          </div>
          <button
            onClick={toggleSeconds}
            className={`w-12 h-6 rounded-full transition-colors ${
              showSeconds ? 'bg-white/20' : 'bg-black/20'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                showSeconds ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;