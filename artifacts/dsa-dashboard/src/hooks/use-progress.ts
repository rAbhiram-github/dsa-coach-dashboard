import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProgressState {
  completedIds: Record<number, boolean>;
  toggleQuestion: (id: number) => void;
  getCompletedCount: () => number;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedIds: {},
      toggleQuestion: (id) =>
        set((state) => ({
          completedIds: {
            ...state.completedIds,
            [id]: !state.completedIds[id],
          },
        })),
      getCompletedCount: () => {
        const { completedIds } = get();
        return Object.values(completedIds).filter(Boolean).length;
      },
    }),
    {
      name: "dsa-progress-storage",
    }
  )
);
