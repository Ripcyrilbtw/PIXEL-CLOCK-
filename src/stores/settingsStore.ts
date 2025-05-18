import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsStore {
  use24Hour: boolean;
  showSeconds: boolean;
  toggleTimeFormat: () => void;
  toggleSeconds: () => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      use24Hour: false,
      showSeconds: true,
      toggleTimeFormat: () =>
        set((state) => ({ use24Hour: !state.use24Hour })),
      toggleSeconds: () =>
        set((state) => ({ showSeconds: !state.showSeconds })),
    }),
    {
      name: 'settings-storage',
    }
  )
);