import React, { useState } from 'react';
import styled from '@emotion/styled';
import AddOptionItem from '../ui/detail/AddOptionItem';

interface Option {
  id: string;
  name: string;
  option: string;
  price: string;
  description: string;
}

interface AddOptionContainerProps {
  options: Option[];
}

const AddOptionContainer = ({ options }: AddOptionContainerProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptionId(selectedOptionId === optionId ? null : optionId);
  };

  // 선택된 옵션의 이름을 가져오는 함수
  const getSelectedOptionName = () => {
    if (selectedOptionId) {
      const selectedOption = options.find((option) => option.id === selectedOptionId);
      return selectedOption ? selectedOption.name : '';
    }
    return '';
  };

  return (
    <>
      <ContentContainer>
        {options.map((option, index) => (
          <React.Fragment key={option.id}>
            <AddOptionItem
              option={option}
              isSelected={selectedOptionId === option.id}
              onOptionSelect={handleOptionSelect}
            />
            {index < options.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ContentContainer>

      <ThemeTextContainer>
        <ThemeText>
          클라이언트의 주문서 :&nbsp;
          <ThemeText>{getSelectedOptionName()}</ThemeText>
        </ThemeText>
      </ThemeTextContainer>
    </>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightMode.divider.divider1};
`;

const ThemeTextContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  align-items: center;
  justify-content: start;
`;

const ThemeText = styled.div`
  display: flex;
  text-align: start;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

export default AddOptionContainer;
