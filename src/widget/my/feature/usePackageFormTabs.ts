import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { RefCallback } from 'react';

export const usePackageFormTabs = (params: { count: number; activeIndex: number }) => {
  const { count, activeIndex } = params;

  const items = useMemo(() => {
    return Array.from({ length: count }, (_, idx) => ({
      id: `pkg-${idx}` as const,
      label: `패키지 ${idx + 1}`,
    }));
  }, [count]);

  const activeId = useMemo(() => `pkg-${activeIndex}` as const, [activeIndex]);

  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setTabRef =
    (id: string): RefCallback<HTMLDivElement> =>
    (el) => {
      tabRefs.current[id] = el;
    };

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const el = tabRefs.current[activeId];
    if (!el) return;

    setIndicatorStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [activeId, items.length]);

  return { items, activeId, indicatorStyle, setTabRef };
};
