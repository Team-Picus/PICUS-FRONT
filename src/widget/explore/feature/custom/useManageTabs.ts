import { useLayoutEffect, useRef, useState } from 'react';
import type { ExploreTabCategory } from '@widget/explore/feature/types/tab.ts';
import { useExploreTabStore } from '@widget/explore/feature/store/useExploreTabStore.ts';

export const useManageTabs = () => {
  const { activeTab, setActiveTab } = useExploreTabStore();
  const tabRefs = useRef<Record<ExploreTabCategory, HTMLDivElement | undefined>>({
    all: undefined,
    beauty: undefined,
    event: undefined,
    fashion: undefined,
    snap: undefined,
    wedding: undefined,
  });
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  return { activeTab, setActiveTab, tabRefs, indicatorStyle };
};
