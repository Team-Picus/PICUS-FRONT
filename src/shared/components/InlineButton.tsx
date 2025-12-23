import styled from '@emotion/styled';

type ButtonSize = 'M' | 'L';
type ButtonVariants = 'primary' | 'secondary' | 'ghost' | 'text';

interface InlineButtonProps {
  variant: ButtonVariants; // 버튼 스타일 종류 (디자인 시스템 variant)
  size: ButtonSize;
  width?: string; // 버튼 고정 너비가 필요할 때 사용 (default 100%)
  text: string; // 버튼 라벨 텍스트
  textColor?: string; // 텍스트 색 지정 (default: secondary-#CAFF29, 그 외-#000000)
  disabled?: boolean;
  pushRight?: boolean; // ghost 버튼이 없을 때 사용 (true: margin-left auto 적용 → 오른쪽 끝으로 밀기)
  onClick?: () => void;
  hasCount?: boolean; // count 기능 사용 여부
  checkedCount?: number; // 선택된 개수 (hasCount=true일 때 사용)
  hideCount?: boolean; // true면 count를 숨기고 text만 표시
}

const InlineButton = ({
  variant,
  size,
  width,
  text,
  textColor,
  disabled,
  pushRight,
  onClick,
  hasCount = false,
  checkedCount,
  hideCount = false,
}: InlineButtonProps) => {
  // count 표시 규칙
  const displayText =
    hasCount && typeof checkedCount === 'number' && checkedCount > 0 && !hideCount
      ? `${checkedCount} ${text}`
      : text;

  return (
    <ButtonContainer
      $variant={variant}
      $size={size}
      $width={width}
      $textColor={textColor}
      $pushRight={pushRight}
      onClick={onClick}
      disabled={disabled}
    >
      <Text>{displayText}</Text>
    </ButtonContainer>
  );
};

export default InlineButton;

const ButtonContainer = styled.button<{
  $size: ButtonSize;
  $width?: string;
  $variant: ButtonVariants;
  $textColor?: string;
  $pushRight?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => ($width ? $width : '100%')};
  height: ${({ $size }) => ($size === 'M' ? '32px' : '40px')};
  background-color: ${({ $variant, theme }) =>
    $variant === 'secondary'
      ? theme.colors.lightMode.neutral.neutral1000
      : $variant === 'primary'
        ? theme.colors.lightMode.blue.blue500
        : theme.colors.lightMode.background.bg1};
  color: ${({ $variant, theme, $textColor }) =>
    $textColor ??
    ($variant === 'secondary'
      ? theme.colors.lightMode.text.text1color
      : theme.colors.lightMode.text.text1)};
  border: ${({ $variant, theme }) =>
    $variant === 'ghost' ? `1px solid ${theme.colors.lightMode.neutral.neutral200}` : 'none'};
  border-radius: 8px;
  margin-left: ${({ $pushRight }) => ($pushRight ? 'auto' : 0)};
  padding: 12px;

  &:active {
    background-color: ${({ $variant, theme }) =>
      $variant === 'secondary'
        ? theme.colors.lightMode.neutral.neutral1100
        : $variant === 'primary'
          ? theme.colors.lightMode.blue.blue700
          : theme.colors.lightMode.background.bg4};
    color: ${({ $variant, theme, $textColor }) =>
      $textColor ?? ($variant === 'secondary' ? theme.colors.lightMode.blue.blue700 : 'inherit')};
    border: ${({ $variant, theme }) =>
      $variant === 'ghost' || $variant === 'text'
        ? `1px solid ${theme.colors.lightMode.neutral.neutral200}`
        : 'none'};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
    color: ${({ theme }) => theme.colors.lightMode.text.text4};
  }

  &:hover,
  &:focus {
    border: ${({ $variant, theme }) =>
      $variant === 'ghost' ? `1px solid ${theme.colors.lightMode.neutral.neutral200}` : 'none'};
  }
`;

const Text = styled.span`
  font: ${({ theme }) => theme.fonts.labelM};
  color: inherit;
`;
