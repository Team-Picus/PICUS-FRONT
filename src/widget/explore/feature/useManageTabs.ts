import { useLayoutEffect, useRef, useState } from "react";
import type { ExploreTabCategory } from '@widget/explore/feature/tab.ts';

export const useManageTabs = () => {
  const [category, setCategory] = useState<ExploreTabCategory>(`all`);
  const tabRefs = useRef<Record<ExploreTabCategory, HTMLDivElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const el = tabRefs.current[category];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [category]);

  return { category, setCategory, tabRefs, indicatorStyle };
};
