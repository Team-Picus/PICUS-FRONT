import styled from '@emotion/styled';
import IcPlus from '@icon/ic-plus.svg';

interface SelectMenuProps {
  text: string;
  onClick?: () => void;
}

const SelectMenuOption = ({ text, onClick }: SelectMenuProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <img src={IcPlus} alt="추가" />
      <Label>{text}</Label>
    </ButtonContainer>
  );
};

export default SelectMenuOption;

const ButtonContainer = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  padding: 8px 12px;
  gap: 8px;

  &:active {
    background-color: ${({ theme }) => theme.colors.lightMode.background.bgColor};
  }
`;

const Label = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  line-height: 150%;
`;
