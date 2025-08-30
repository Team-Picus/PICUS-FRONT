import styled from '@emotion/styled';
import IcCircleCheckFilled from '@shared/assets/icon/ic-circle-check-filled.svg?react';
import IcMinusButton from '@shared/assets/icon/ic-minus-button.svg?react';
import IcPlusButton from '@shared/assets/icon/ic-plus-button.svg?react';

interface AddOptionItemProps {
  option: {
    id: string;
    name: string;
    option: string;
    price: string;
    description: string;
  };
  isSelected: boolean;
  onOptionSelect?: (optionId: string) => void;
}

const AddOptionItem = ({ option, isSelected, onOptionSelect }: AddOptionItemProps) => {
  const optionInfo = [
    { key: 'name', value: option.name },
    { key: 'option', value: option.option },
    { key: 'price', value: option.price },
  ];

  const handleClick = () => {
    if (onOptionSelect) {
      onOptionSelect(option.id);
    }
  };

  if (isSelected) {
    return (
      <ClickedContainer onClick={handleClick}>
        <ClickedHeader>
          <ItemTitle>
            {optionInfo.map((info) => (
              <ItemInfo key={info.key}>{info.value}</ItemInfo>
            ))}
          </ItemTitle>
          <IcCircleCheckFilled />
        </ClickedHeader>

        <DetailItemText>{option.description}</DetailItemText>

        <CountUpDownContainer>
          <IcMinusButton />
          <CountNumber>1</CountNumber>
          <IcPlusButton />
        </CountUpDownContainer>
      </ClickedContainer>
    );
  }
  return (
    <ItemContainer onClick={handleClick}>
      <ItemTitle>
        {optionInfo.map((info) => (
          <ItemInfo key={info.key}>{info.value}</ItemInfo>
        ))}
      </ItemTitle>
      <CheckBox />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 12px 8px;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
`;

const ItemTitle = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const ItemInfo = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const CheckBox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
`;

const ClickedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f7;
  width: 100%;
  padding: 12px 16px;
  gap: 8px;
  transition: background-color 0.2s ease;
`;

const ClickedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailItemText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #878686;
`;

const CountUpDownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 3.5px 0;
`;

const CountNumber = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: #454545;
`;

export default AddOptionItem;
