import { IcArrowBottom } from '@icon/ic-arrow-bottom.tsx';
import { sortOptions } from '@widget/explore/feature/types/filter.ts';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const ExploreSortingDropdown = () => {
  const [sortOption, setSortOption] = useState('최근 업로드순');
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <ExploreSortingFilterContainer onClick={() => setDropdown(!dropdown)}>
        <div>{sortOption}</div>
        <IcArrowBottom active={dropdown} />
      </ExploreSortingFilterContainer>
      {dropdown && (
        <FilterItemsContainer
          ref={dropdownRef}
          onClick={() => setDropdown(false)}
          style={{ zIndex: 1000, cursor: 'pointer' }}
        >
          <span>정렬</span>
          {sortOptions.map((option, index) => (
            <div key={index} onClick={() => setSortOption(option.label)}>
              {option.label}
            </div>
          ))}
        </FilterItemsContainer>
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

const FilterItemsContainer = styled.div`
  width: 175px;
  margin-top: 8px;
  right: 16px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  span {
    font: ${({ theme }) => theme.fonts.labels};
    color: ${({ theme }) => theme.colors.lightMode.text.text4};
    font-size: 12px;
    padding: 8px 12px;
  }

  div {
    position: relative;
    overflow: hidden;
    padding: 8px 12px;
    font: ${({ theme }) => theme.fonts.body1};
    color: #888888;
    cursor: pointer;

    &:hover {
      color: #333;
    }

    /* 가상 요소: 확장될 원 */

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #f5f5f5;
      transform: translate(-50%, -50%);
      opacity: 0.6;
    }

    &:hover::before {
      animation: ripple 0.6s ease-out forwards;
    }
  }

  @keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 0.6;
    }
    100% {
      width: 250%;
      height: 250%;
      opacity: 0;
    }
  }
`;
