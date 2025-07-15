import { type ExploreFilter, filterItems } from '@widget/explore/feature/types/filter.ts';
import { IcArrowBottom } from '@icon/ic-arrow-bottom.tsx';
import styled from '@emotion/styled';
import { useExploreTabStore } from '@widget/explore/feature/store/useExploreTabStore.ts';
import type { ActiveProps } from '@shared/types/active.ts';
import { useExploreFilterStore } from '@widget/explore/feature/store/useExploreFilterStore.ts';

export const ExploreFilterList = () => {
  const { isActiveTab } = useExploreTabStore();
  const { filter, setFilter } = useExploreFilterStore();

  return (
    <ExploreFilterContainer>
      <ExploreAllFilterItem active={filter !== null} onClick={() => setFilter('all')}>
        <img src="/src/shared/assets/icon/ic-filter.svg" alt="" />
      </ExploreAllFilterItem>
      {filterItems.map((item) => (
        <ExploreFilterItem
          key={item.id}
          active={filter === (item.id as ExploreFilter)}
          onClick={() => setFilter(item.id as ExploreFilter)}
        >
          <span>{item.label}</span>
          <IcArrowBottom active={filter === (item.id as ExploreFilter)} />
        </ExploreFilterItem>
      ))}
      {isActiveTab('snap') && (
        <ExploreFilterItem
          key={'type'}
          active={filter === 'type'}
          onClick={() => setFilter('type')}
        >
          <span>{'유형'}</span>
          <IcArrowBottom active={filter === 'type'} />
        </ExploreFilterItem>
      )}
    </ExploreFilterContainer>
  );
};

const ExploreFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  gap: 8px;
`;

const ExploreAllFilterItem = styled.div<ActiveProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.text.text5};
  border-radius: 8px;
  padding: 4px;
  background-color: ${({ theme, active }) =>
    active ? '#1d1d1d10' : theme.colors.lightMode.background.bg1};
`;

const ExploreFilterItem = styled.div<ActiveProps>`
  display: flex;
  flex-direction: row;
  border: 1px solid
    ${({ theme, active }) => (active ? '#1d1d1d' : theme.colors.lightMode.text.text5)};
  border-radius: 8px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text2};
  padding: 4px 4px 4px 12px;
  align-items: center;
`;
