import styled from '@emotion/styled';

type LabelSize = 'M' | 'L';

interface SectionHeaderProps {
  text: string;
  size?: LabelSize;
}

const SectionHeader = ({ text, size = 'L' }: SectionHeaderProps) => {
  return <Header $size={size}>{text}</Header>;
};

export default SectionHeader;

const Header = styled.div<{ $size?: LabelSize }>`
  position: relative;
  font: ${({ $size, theme }) => ($size === 'L' ? theme.fonts.labelL : theme.fonts.labelMB)};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  padding-left: 12px;

  &::before {
    content: '';
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: currentColor;
  }
`;
