import styled from '@emotion/styled';
import type { ActiveProps } from '@shared/types/active.ts';
import { useFilterOptionStore } from '@widget/explore/feature/store/useFilterOptionStore.ts';
import { exploreFilterRecord } from '@widget/explore/feature/types/filter.ts';

interface FilterDetailItemProps {
  label: 'region' | 'space' | 'mood' | 'type';
  options: string[];
}

const FilterDetailOption = ({ label, options }: FilterDetailItemProps) => {
  const { selectFilterOption, setSelectFilterOption } = useFilterOptionStore();
  const formatedLabel = exploreFilterRecord[label];

  return (
    <div>
      <FilterDetailOptionLabel>{formatedLabel}</FilterDetailOptionLabel>
      {formatedLabel === '유형' && (
        <FilterTypeNotice>
          <img src="/src/shared/assets/icon/ic-notice.svg" alt="" />
          <span>유형 필터는 스냅에만 포함돼요</span>
        </FilterTypeNotice>
      )}
      <FilterDetailOptionItemsContainer>
        {options.map((option) => (
          <FilterDetailOptionItem
            key={option}
            active={selectFilterOption[label].includes(option)}
            onClick={() => setSelectFilterOption(option, label)}
          >
            {option}
          </FilterDetailOptionItem>
        ))}
      </FilterDetailOptionItemsContainer>
    </div>
  );
};

export default FilterDetailOption;

const FilterDetailOptionLabel = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.darkMode.background.bg3};
`;

const FilterDetailOptionItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 12px;
  gap: 8px;
`;

const FilterDetailOptionItem = styled.div<ActiveProps>`
  padding: 5px 12px;
  width: fit-content;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme, active }) => (active ? 'white' : theme.colors.lightMode.text.text1)};
  border: 1px solid
    ${({ theme, active }) => (active ? theme.colors.lightMode.icon.icon : '#e6e6e6')};
  border-radius: 24px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.icon.icon : theme.colors.lightMode.background.bg2};
  cursor: pointer;
`;

const FilterTypeNotice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 4px;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  span {
    font: ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.lightMode.text.text1};
  }
`;
