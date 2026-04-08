import type { ModeType, FontType, ColorType } from "@/types/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

interface SettingsStore {
  mode: ModeType;
  setMode: (mode: ModeType) => void;

  isOpen: boolean;
  open: () => void;
  close: () => void;

  time: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  setTime: (mode: ModeType, value: number) => void;

  font: FontType;
  setFont: (font: FontType) => void;

  color: ColorType;
  setColor: (color: ColorType) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    immer((set) => ({
      mode: "pomodoro",
      setMode: (mode) => set({ mode }),

      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),

      time: {
        pomodoro: 15,
        shortBreak: 5,
        longBreak: 10,
      },
      setTime: (mode, value) =>
        set((state) => {
          state.time[mode] = value;
        }),

      font: "Kumbh Sans",
      setFont: (font) => set({ font }),

      color: "red",
      setColor: (color) => set({ color }),
    })),
    {
      name: "pomodoro-storage",
      partialize: (state) => ({
        time: state.time,
        font: state.font,
        color: state.color,
      }),
    },
  ),
);
