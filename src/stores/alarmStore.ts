import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Alarm {
  id: string;
  time: string;
  enabled: boolean;
  days: string[];
}

interface AlarmStore {
  alarms: Alarm[];
  addAlarm: (alarm: Omit<Alarm, 'id'>) => void;
  removeAlarm: (id: string) => void;
  toggleAlarm: (id: string) => void;
  updateAlarm: (id: string, alarm: Partial<Alarm>) => void;
}

export const useAlarmStore = create<AlarmStore>()(
  persist(
    (set) => ({
      alarms: [],
      addAlarm: (alarm) =>
        set((state) => ({
          alarms: [...state.alarms, { ...alarm, id: crypto.randomUUID() }],
        })),
      removeAlarm: (id) =>
        set((state) => ({
          alarms: state.alarms.filter((alarm) => alarm.id !== id),
        })),
      toggleAlarm: (id) =>
        set((state) => ({
          alarms: state.alarms.map((alarm) =>
            alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
          ),
        })),
      updateAlarm: (id, updatedAlarm) =>
        set((state) => ({
          alarms: state.alarms.map((alarm) =>
            alarm.id === id ? { ...alarm, ...updatedAlarm } : alarm
          ),
        })),
    }),
    {
      name: 'alarm-storage',
    }
  )
);