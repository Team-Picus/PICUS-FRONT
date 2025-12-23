import { useLayoutEffect, useRef, useState } from 'react';
import type { RefCallback } from 'react';

export type MyProfileTabId = 'gallery' | 'info' | 'pricing';

const MY_PROFILE_TABS: { id: MyProfileTabId; label: string }[] = [
  { id: 'gallery', label: '갤러리' },
  { id: 'info', label: '작가 정보' },
  { id: 'pricing', label: '가격 구성' },
];

export const useMyProfileTabs = () => {
  const [activeId, setActiveId] = useState<MyProfileTabId>('gallery');

  const tabRefs = useRef<Record<MyProfileTabId, HTMLDivElement | null>>({
    gallery: null,
    info: null,
    pricing: null,
  });

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const setTabRef =
    (id: MyProfileTabId): RefCallback<HTMLDivElement> =>
    (el) => {
      tabRefs.current[id] = el;
    };

  useLayoutEffect(() => {
    const el = tabRefs.current[activeId];
    if (!el) return;

    setIndicatorStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [activeId]);

  return {
    items: MY_PROFILE_TABS,
    activeId,
    onChange: setActiveId,
    indicatorStyle,
    setTabRef,
  };
};
