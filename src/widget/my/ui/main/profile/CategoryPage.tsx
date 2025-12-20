import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import Tabs from '@shared/components/Tabs.tsx';
import { useMyProfileTabs } from '@widget/my/feature/useMyProfileTabs.ts';

type TabViewItem = {
  key: string;
  label: string;
  content: ReactNode;
};

interface TabViewProps {
  items: TabViewItem[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
}

const CategoryPage = ({ items, defaultActiveKey, onChange }: TabViewProps) => {
  const { tabs, activeKey, activeContent, handleChange, indicatorStyle, setTabRef } =
    useMyProfileTabs({ items, defaultActiveKey, onChange });

  return (
    <CategoryPageContainer>
      <Tabs
        items={tabs}
        activeId={activeKey}
        onChange={handleChange}
        indicatorStyle={indicatorStyle}
        setTabRef={setTabRef}
      />
      {activeContent}
    </CategoryPageContainer>
  );
};

export default CategoryPage;

const CategoryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  padding-bottom: 80px;
  gap: 40px;
`;
