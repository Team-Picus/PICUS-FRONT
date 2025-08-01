import { type ExploreFilter, filterItems } from '@widget/explore/feature/types/filter.ts';
import { IcArrowBottom } from '@icon/ic-arrow-bottom.tsx';
import { useExploreTabStore } from '@widget/explore/feature/store/useExploreTabStore.ts';
import { useExploreFilterStore } from '@widget/explore/feature/store/useExploreFilterStore.ts';
import styled from '@emotion/styled';
import type { ActiveProps } from '@shared/types/active.ts';
import { useModal } from '@widget/explore/feature/custom/useModal.ts';
import FilterModal from '@widget/explore/ui/modal/FilterModal.tsx';

const ExploreFilterList = () => {
  const { isActiveTab } = useExploreTabStore();
  const { filter, setFilter, clearFilter } = useExploreFilterStore();
  const { isModalOn, modalRef, offModal, onModal } = useModal();

  const handleFilterChange = (newFilter: ExploreFilter | 'all') => {
    if (newFilter === filter) {
      clearFilter();
      offModal();
    } else {
      setFilter(newFilter);
      onModal();
    }
  };

  return (
    <div style={{ position: 'relative', height: isModalOn ? '100%' : 'fit-content' }}>
      <ExploreFilterContainer>
        {/* 전체 필터 */}
        <ExploreAllFilterItem active={filter === 'all'} onClick={() => handleFilterChange('all')}>
          <img src="/src/shared/assets/icon/ic-filter.svg" alt="" />
        </ExploreAllFilterItem>
        {/* 유형 제외 필터 */}
        {filterItems.map((item) => (
          <ExploreFilterItem
            key={item.id}
            active={filter === (item.id as ExploreFilter)}
            onClick={() => {
              handleFilterChange(item.id as ExploreFilter);
            }}
          >
            <span>{item.label}</span>
            <IcArrowBottom active={filter === (item.id as ExploreFilter)} />
          </ExploreFilterItem>
        ))}
        {/* 유형 필터 - 탭이 스냅일 경우 */}
        {isActiveTab('snap') && (
          <ExploreFilterItem
            key={'type'}
            active={filter === 'type'}
            onClick={() => {
              setFilter('type');
            }}
          >
            <span>{'유형'}</span>
            <IcArrowBottom active={filter === 'type'} />
          </ExploreFilterItem>
        )}
      </ExploreFilterContainer>
      {isModalOn && <FilterModal ref={modalRef} clearFilter={clearFilter} offModal={offModal} />}
    </div>
  );
};

export default ExploreFilterList;

const ExploreFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  gap: 8px;
  z-index: 100;
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
  border: 1px solid ${({ theme, active }) => (active ? '#1d1d1d' : theme.colors.lightMode.text.text5)};
  border-radius: 8px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text2};
  padding: 4px 4px 4px 12px;
  align-items: center;
`;
