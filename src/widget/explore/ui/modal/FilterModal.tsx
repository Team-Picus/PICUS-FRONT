import styled from '@emotion/styled';
import FilterDetailOption from '@widget/explore/ui/filter/FilterDetailOption.tsx';
import { useExploreFilterStore } from '@widget/explore/feature/store/useExploreFilterStore.ts';
import { forwardRef } from 'react';
import { useFilterOptionStore } from '@widget/explore/feature/store/useFilterOptionStore.ts';
import { useExploreTabStore } from '@widget/explore/feature/store/useExploreTabStore.ts';

const regionFilterOptions = ['지역'];
const spaceFilterOptions = ['실내', '실외'];
const moodFilterOptions = [
  '도회적인',
  '실험적인',
  '강렬한',
  '모던',
  '빈티지',
  '시네마틱',
  '차가운',
  '포근한',
  '몽환적인',
];
const typeFilterOptions = ['개인프로필', '우정', '가족', '입학'];

type FilterModalProps = {
  offModal: () => void;
  clearFilter: () => void;
};

const FilterModal = forwardRef<HTMLDivElement, FilterModalProps>((props, ref) => {
  const { resetSelectFilterOption } = useFilterOptionStore();
  const { filter } = useExploreFilterStore();
  const { isActiveTab } = useExploreTabStore();

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      props.clearFilter();
      props.offModal();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <FilterModalContainer ref={ref}>
        {(filter === 'all' || filter === 'region') && (
          <FilterDetailOption label="region" options={regionFilterOptions} />
        )}
        {(filter === 'all' || filter === 'space') && (
          <FilterDetailOption label="space" options={spaceFilterOptions} />
        )}
        {(filter === 'all' || filter === 'mood') && (
          <FilterDetailOption label="mood" options={moodFilterOptions} />
        )}
        {isActiveTab('snap') && (filter === 'all' || filter === 'type') && (
          <FilterDetailOption label="type" options={typeFilterOptions} />
        )}
        <FilterResetButton onClick={resetSelectFilterOption}>초기화</FilterResetButton>
      </FilterModalContainer>
    </ModalOverlay>
  );
});

export default FilterModal;

const ModalOverlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const FilterModalContainer = styled.div`
  position: sticky;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  height: fit-content;
  gap: 16px;
  background-color: white;
  z-index: 1000;
`;

const FilterResetButton = styled.button`
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  font: ${({ theme }) => theme.fonts.labelM};
  padding: 4px 12px;
  margin-top: 8px;
  margin-right: auto;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background-color: white;

  &:hover {
    border: 1px solid #e6e6e6;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
    border: 1px solid ${({ theme }) => theme.colors.lightMode.background.bg4};
  }
`;
