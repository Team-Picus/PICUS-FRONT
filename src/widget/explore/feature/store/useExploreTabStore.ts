import { create } from 'zustand/react';
import type { ExploreTabCategory } from '@widget/explore/feature/types/tab.ts';

export interface UseExploreTabState {
  activeTab: ExploreTabCategory;
  setActiveTab: (tab: ExploreTabCategory) => void;
  isActiveTab: (tab: ExploreTabCategory) => boolean;
}

export const useExploreTabStore = create<UseExploreTabState>((set, get) => ({
  activeTab: 'all',
  setActiveTab: (tab) => set({ activeTab: tab }),
  isActiveTab: (tab) => get().activeTab === tab,
}));
