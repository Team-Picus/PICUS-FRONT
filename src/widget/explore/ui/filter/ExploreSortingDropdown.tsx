import { IcArrowBottom } from '@icon/ic-arrow-bottom.tsx';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useModal } from '@widget/explore/feature/custom/useModal.ts';
import { SortingDropdownModal } from '@widget/explore/ui';

const ExploreSortingDropdown = () => {
  const [sortOption, setSortOption] = useState('최근 업로드순');
  const { isModalOn, toggleModal } = useModal();

  return (
    <div style={{ position: 'relative' }}>
      <ExploreSortingFilterContainer onClick={toggleModal}>
        <div>{sortOption}</div>
        <IcArrowBottom active={isModalOn} />
      </ExploreSortingFilterContainer>
      {isModalOn && (
        <SortingDropdownModal toggleModal={toggleModal} setSortOption={setSortOption} />
      )}
    </div>
  );
};

export default ExploreSortingDropdown;

const ExploreSortingFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  gap: 4px;
  margin-right: 16px;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;
