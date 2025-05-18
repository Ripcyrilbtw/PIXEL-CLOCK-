import React, { useState } from 'react';
import { useAlarmStore, Alarm } from '../stores/alarmStore';
import { format } from 'date-fns';
import { Bell, Trash2, Plus } from 'lucide-react';

const AlarmManager: React.FC = () => {
  const { alarms, addAlarm, removeAlarm, toggleAlarm } = useAlarmStore();
  const [showNewAlarm, setShowNewAlarm] = useState(false);
  const [newAlarmTime, setNewAlarmTime] = useState('12:00');

  const handleAddAlarm = () => {
    addAlarm({
      time: newAlarmTime,
      enabled: true,
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    });
    setShowNewAlarm(false);
  };

  return (
    <div className="p-6 bg-black/50 rounded-lg backdrop-blur">
      <h2 className="text-2xl mb-6 text-center">Alarms</h2>
      
      <div className="space-y-4">
        {alarms.map((alarm) => (
          <div
            key={alarm.id}
            className="flex items-center justify-between p-4 bg-black/30 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleAlarm(alarm.id)}
                className={`p-2 rounded-full transition-colors ${
                  alarm.enabled ? 'bg-white/20' : 'bg-black/20'
                }`}
              >
                <Bell size={20} className={alarm.enabled ? 'text-white' : 'text-gray-500'} />
              </button>
              <span className="text-xl">{alarm.time}</span>
            </div>
            <button
              onClick={() => removeAlarm(alarm.id)}
              className="p-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      {showNewAlarm ? (
        <div className="mt-4 p-4 bg-black/30 rounded-lg">
          <input
            type="time"
            value={newAlarmTime}
            onChange={(e) => setNewAlarmTime(e.target.value)}
            className="w-full p-2 bg-black/30 rounded border border-white/20 text-white"
          />
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAddAlarm}
              className="flex-1 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
            >
              Add
            </button>
            <button
              onClick={() => setShowNewAlarm(false)}
              className="flex-1 py-2 bg-black/30 rounded hover:bg-black/40 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowNewAlarm(true)}
          className="mt-4 w-full py-3 flex items-center justify-center gap-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
        >
          <Plus size={20} />
          <span>Add Alarm</span>
        </button>
      )}
    </div>
  );
};

export default AlarmManager;