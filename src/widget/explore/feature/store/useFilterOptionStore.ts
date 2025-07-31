import type { ExploreFilter } from '@widget/explore/feature/types/filter.ts';
import { create } from 'zustand/react';

interface SelectFilterOption {
  region: string[];
  space: string[];
  mood: string[];
  type: string[];
}

interface UseFilterOptionState {
  selectFilterOption: SelectFilterOption;
  setSelectFilterOption: (option: string, label: Exclude<ExploreFilter, 'all'>) => void;
  resetSelectFilterOption: () => void;
}

export const useFilterOptionStore = create<UseFilterOptionState>((set) => ({
  selectFilterOption: {
    region: [],
    space: [],
    mood: [],
    type: [],
  },
  setSelectFilterOption: (option, label) =>
    set((state) => {
      const updatedOptions = [...state.selectFilterOption[label]];
      const optionIndex = updatedOptions.indexOf(option);

      if (optionIndex > -1) {
        updatedOptions.splice(optionIndex, 1);
      } else {
        updatedOptions.push(option);
      }

      return {
        selectFilterOption: {
          ...state.selectFilterOption,
          [label]: updatedOptions,
        },
      };
    }),
  resetSelectFilterOption: () =>
    set(() => ({
      selectFilterOption: {
        region: [],
        space: [],
        mood: [],
        type: [],
      },
    })),
}));
