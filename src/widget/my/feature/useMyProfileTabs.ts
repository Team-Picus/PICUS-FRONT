import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type TabViewItem = {
  key: string;
  label: string;
  content: ReactNode;
};

interface UseMyProfileTabsParams {
  items: TabViewItem[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
}

export const useMyProfileTabs = ({ items, defaultActiveKey, onChange }: UseMyProfileTabsParams) => {
  const firstKey = items[0]?.key ?? '';
  const [activeKey, setActiveKey] = useState(defaultActiveKey ?? firstKey);

  // items가 바뀌어서 activeKey가 사라지는 경우 방어
  useLayoutEffect(() => {
    if (!items.length) return;
    const exists = items.some((i) => i.key === activeKey);
    if (!exists) setActiveKey(defaultActiveKey ?? items[0].key);
  }, [items, activeKey, defaultActiveKey]);

  const tabs = useMemo(() => items.map(({ key, label }) => ({ id: key, label })), [items]);

  const activeContent = useMemo(
    () => items.find((i) => i.key === activeKey)?.content ?? null,
    [items, activeKey],
  );

  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const setTabRef = (id: string) => (el: HTMLDivElement | null) => {
    tabRefs.current[id] = el;
  };

  useLayoutEffect(() => {
    const el = tabRefs.current[activeKey];
    if (!el) return;
    setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeKey, tabs.length]); // 탭 개수/레이아웃 변동 시 보정

  const handleChange = (key: string) => {
    setActiveKey(key);
    onChange?.(key);
  };

  return {
    activeKey,
    tabs,
    activeContent,
    handleChange,
    indicatorStyle,
    setTabRef,
  };
};
