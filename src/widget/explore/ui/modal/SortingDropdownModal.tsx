import { sortOptions } from '@widget/explore/feature/types/filter.ts';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface SortingDropdownModalProps {
  toggleModal: () => void;
  setSortOption: (option: string) => void;
}

const SortingDropdownModal = ({ setSortOption, toggleModal }: SortingDropdownModalProps) => {
  return (
    <FilterItemsContainer
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      onClick={toggleModal}
      style={{
        zIndex: 100,
        cursor: 'pointer',
      }}
    >
      <span>정렬</span>
      {sortOptions.map((option, index) => (
        <div key={index} onClick={() => setSortOption(option.label)}>
          {option.label}
        </div>
      ))}
    </FilterItemsContainer>
  );
};

export default SortingDropdownModal;

const FilterItemsContainer = styled(motion.div)`
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
