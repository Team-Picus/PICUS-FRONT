import type { ExploreFilter } from '@widget/explore/feature/types/filter.ts';
import { create } from 'zustand/react';

export interface ExploreFilterState {
  filter: ExploreFilter | null;
  setFilter: (filter: ExploreFilter | null) => void;
  clearFilter: () => void;
}

export const useExploreFilterStore = create<ExploreFilterState>((set) => ({
  filter: null,
  setFilter: (filter) =>
    set((state) => ({
      filter: state.filter === filter ? null : filter,
    })),
  clearFilter: () =>
    set(() => ({
      filter: null,
    })),
}));
