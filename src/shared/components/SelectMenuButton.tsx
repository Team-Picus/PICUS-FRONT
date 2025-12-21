import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import IcChevronDown from '@icon/ic-chevron-down.svg?react';
import IcChevronUp from '@icon/ic-chevron-up.svg?react';

type Size = 'M' | 'L';

interface SelectMenuButtonProps {
  title: string;
  isActive: boolean;
  contents: string[];
  dropDownTitle?: string;
  onSelect?: (selectedItem: string) => void;
  onClick?: () => void;
  size?: Size;
  containerStyle?: React.CSSProperties;
}

const SelectMenuButton = ({
  title,
  isActive,
  contents,
  dropDownTitle,
  onSelect,
  onClick,
  size = 'M',
  containerStyle,
}: SelectMenuButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    onSelect?.(item);
    setIsOpen(false);
  };

  const handleOverlay = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container
        ref={containerRef}
        onClick={handleClick}
        isActive={isActive}
        $size={size}
        style={containerStyle}
      >
        <Title $size={size}>{title}</Title>
        <Icon isOpen={isOpen}>{isOpen ? <IcChevronUp /> : <IcChevronDown />}</Icon>

        {!onClick && isOpen && (
          <>
            <Overlay onClick={handleOverlay} />
            <DropdownContainer>
              {dropDownTitle && <DropDownMenu>{dropDownTitle}</DropDownMenu>}
              {contents.map((item, index) => (
                <DropdownItem key={index} onClick={() => handleSelect(item)}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownContainer>
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div<{ isActive: boolean; $size?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: ${({ $size }) => ($size === 'M' ? '4px 8px' : '8px')};
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral300};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightMode.background.bg2};
  }
`;

const Title = styled.div<{ $size?: string }>`
  font: ${({ $size, theme }) => ($size === 'M' ? theme.fonts.body3 : theme.fonts.body1)};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  line-height: 150%;
`;

const Icon = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 999;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border-radius: 8px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  z-index: 1000;
  overflow: hidden;
  padding: 4px 0;
`;

const DropDownMenu = styled.div`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

export default SelectMenuButton;
