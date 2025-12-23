import styled from '@emotion/styled';
import type { RefCallback } from 'react';
import type { ActiveProps } from '@shared/types/active.ts';

type TabsItem<T extends string> = {
  id: T;
  label: string;
};

interface TabsProps<T extends string> {
  items: TabsItem<T>[];
  activeId: T;
  onChange: (id: T) => void;
  indicatorStyle: { left: number; width: number }; // 훅에서 계산한 indicator 스타일
  setTabRef: (id: T) => RefCallback<HTMLDivElement>; // 훅에서 내려주는 ref setter
  borderColor?: string;
}

const Tabs = <T extends string>({
  items,
  activeId,
  onChange,
  indicatorStyle,
  setTabRef,
  borderColor,
}: TabsProps<T>) => {
  return (
    <TabsContainer $borderColor={borderColor}>
      {items.map((tab) => (
        <TabItem
          key={tab.id}
          ref={setTabRef(tab.id)}
          active={activeId === tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </TabItem>
      ))}
      <Indicator style={{ left: indicatorStyle.left, width: indicatorStyle.width }} />
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div<{ $borderColor?: string }>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-top: 8px;
  padding-left: 12px;
  border-bottom: 1px solid
    ${({ $borderColor, theme }) => $borderColor ?? theme.colors.lightMode.divider.divider1};
`;

const TabItem = styled.div<ActiveProps>`
  padding: 12px 8px;
  font: ${({ theme }) => theme.fonts.labelM};
  text-align: center;
  cursor: pointer;

  color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text2};
`;

const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.lightMode.text.text1};
  transition:
    left 0.25s ease,
    width 0.25s ease;
`;
