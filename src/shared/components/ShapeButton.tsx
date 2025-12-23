import styled from '@emotion/styled';

type ButtonVariants = 'rectangle' | 'ellips' | 'icon';

type Icon = {
  icon: string;
  alt: string;
};

interface ShapeButtonProps {
  variant: ButtonVariants; // 버튼 스타일 종류
  icon: Icon;
  isShadow?: boolean;
  onClick?: () => void;
}

const ShapeButton = ({ variant, icon, isShadow = false, onClick }: ShapeButtonProps) => {
  return (
    <ButtonContainer $variant={variant} $isShadow={isShadow} onClick={onClick}>
      <Icon src={icon.icon} alt={icon.alt}></Icon>
    </ButtonContainer>
  );
};

export default ShapeButton;

const ButtonContainer = styled.button<{
  $variant: ButtonVariants;
  $isShadow: boolean;
}>`
  width: 40px;
  height: 40px;
  border: ${({ $variant, $isShadow, theme }) =>
    $variant === 'icon' || $isShadow
      ? 'none'
      : `1px solid ${theme.colors.lightMode.neutral.neutral200}`};
  border-radius: ${({ $variant }) => ($variant === 'ellips' ? '50%' : '8px')};
  box-shadow: ${({ $isShadow }) =>
    $isShadow ? '0px 7.2px 21.6px 0px rgba(0, 0, 0, 0.1)' : 'none'};
  padding: 8px;

  &:active,
  &:hover {
    background-color: rgba(29, 29, 29, 0.05);
  }
  &:hover,
  &:focus {
    border: ${({ $variant, $isShadow, theme }) =>
      $variant === 'icon' || $isShadow
        ? 'none'
        : `1px solid ${theme.colors.lightMode.neutral.neutral200}`};
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
