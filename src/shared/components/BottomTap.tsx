import styled from '@emotion/styled';

interface BottomTapProps {
  checkedCount: number;
  leftButtonText: string;
  rightButtonText: string;
  onLeftClick: () => void;
  onRightClick: () => void;
  hideCount?: boolean;
}

const BottomTap = ({
  checkedCount,
  leftButtonText,
  rightButtonText,
  onLeftClick,
  onRightClick,
  hideCount = false,
}: BottomTapProps) => {
  const handleRightClick = () => {
    if (checkedCount > 0) {
      onRightClick();
    }
  };

  return (
    <BottomTapContainer>
      <LeftButton isActive={checkedCount > 0} onClick={onLeftClick}>
        {checkedCount > 0 && !hideCount ? `${checkedCount} ${leftButtonText}` : leftButtonText}
      </LeftButton>
      <RightButton onClick={handleRightClick}>{rightButtonText}</RightButton>
    </BottomTapContainer>
  );
};

export default BottomTap;

const BottomTapContainer = styled.div`
  position: sticky;
  margin-top: auto;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  gap: 12px;
  box-shadow: 0 -1px 14px 0 rgba(0, 0, 0, 0.05);
`;

interface LeftButtonProps {
  isActive: boolean;
}

const LeftButton = styled.button<LeftButtonProps>`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 8px 0px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.lightMode.neutral.neutral200 : 'transparent'};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.lightMode.background.bg1 : theme.colors.lightMode.background.bg4};
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text4};
  transition: all 0.2s ease;
`;

const RightButton = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 8px 0px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1color};
`;
