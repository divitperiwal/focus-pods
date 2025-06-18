import { create } from "zustand";

interface MusicSetupState {
  selectedFocus: string | null;
  selectedGenre: string | null;
  selectedDuration: string | null;
  setFocus: (focus: string) => void;
  setGenre: (genre: string) => void;
  setDuration: (duration: string) => void;
}

export const useMusicSetup = create<MusicSetupState>((set) => ({
  selectedFocus: null,
  selectedGenre: null,
  selectedDuration: null,
  setFocus: (focus) => set({ selectedFocus: focus }),
  setGenre: (genre) => set({ selectedGenre: genre }),
  setDuration: (duration) => set({ selectedDuration: duration }),
}));
