import { exploreTabItems } from '@widget/explore/feature/tab.ts';
import styled from '@emotion/styled';
import type { ActiveProps } from '@shared/types/active.ts';
import { useManageTabs } from '@widget/explore/feature/useManageTabs.ts';

const ExploreTabs = () => {
  const { category, setCategory, indicatorStyle, tabRefs } = useManageTabs();

  return (
    <ExploreTabsContainer>
      {exploreTabItems.map((tab) => (
        <ExploreTabItem
          key={tab.id}
          ref={(el) => {
            tabRefs.current[tab.id] = el;
          }}
          active={category === tab.id}
          onClick={() => setCategory(tab.id)}
        >
          {tab.label}
        </ExploreTabItem>
      ))}
      <Indicator style={{ left: indicatorStyle.left, width: indicatorStyle.width }} />
    </ExploreTabsContainer>
  );
};

export default ExploreTabs;

const ExploreTabsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-top: 8px;
  padding-left: 12px;
  border-bottom: 1px solid #eeeeee;
`;

const ExploreTabItem = styled.div<ActiveProps>`
  padding: 12px 8px;
  font: ${({ theme }) => theme.fonts.labelM};
  text-align: center;
  color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text2};
`;

const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background: #1d1d1d;
  transition:
    left 0.25s ease,
    width 0.25s ease;
`;
