import { useLayoutEffect, useRef, useState } from 'react';
import type { RefCallback } from 'react';

export type ProfileEditTabId = 'profile' | 'gallery' | 'info' | 'pricing';

const PROFILE_EDIT_TABS: { id: ProfileEditTabId; label: string }[] = [
  { id: 'profile', label: '프로필' },
  { id: 'gallery', label: '갤러리' },
  { id: 'info', label: '작가 정보' },
  { id: 'pricing', label: '가격 구성' },
];

export const useProfileEditTabs = () => {
  const [activeId, setActiveId] = useState<ProfileEditTabId>('profile');

  const tabRefs = useRef<Record<ProfileEditTabId, HTMLDivElement | null>>({
    profile: null,
    gallery: null,
    info: null,
    pricing: null,
  });

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const setTabRef =
    (id: ProfileEditTabId): RefCallback<HTMLDivElement> =>
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
    items: PROFILE_EDIT_TABS,
    activeId,
    onChange: setActiveId,
    indicatorStyle,
    setTabRef,
  };
};
