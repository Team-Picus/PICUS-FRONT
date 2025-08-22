import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import IcChevronDown from '@icon/ic-chevron-down.svg?react';
import IcChevronUp from '@icon/ic-chevron-up.svg?react';

interface SelectMenuButtonProps {
  title: string;
  isActive: boolean;
  contents: string[];
  dropDownTitle?: string;
  onSelect?: (selectedItem: string) => void;
}

const SelectMenuButton = ({
  title,
  isActive,
  contents,
  dropDownTitle,
  onSelect,
}: SelectMenuButtonProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item: string) => {
    onSelect?.(item);
    setIsDropdownOpen(false);
  };

  const handleOverlayClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <SelectMenuButtonContainer ref={containerRef} onClick={handleButtonClick} isActive={isActive}>
        <SelectMenuButtonTitle>{title}</SelectMenuButtonTitle>
        <SelectMenuButtonIcon isOpen={isDropdownOpen}>
          {isDropdownOpen ? <IcChevronUp /> : <IcChevronDown />}
        </SelectMenuButtonIcon>

        {isDropdownOpen && (
          <>
            <Overlay onClick={handleOverlayClick} />
            <DropdownContainer>
              {dropDownTitle && <DropDownMenu>{dropDownTitle}</DropDownMenu>}
              {contents.map((item, index) => (
                <DropdownItem key={index} onClick={() => handleItemClick(item)}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownContainer>
          </>
        )}
      </SelectMenuButtonContainer>
    </>
  );
};

const SelectMenuButtonContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  padding: 4px 8px;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral300};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightMode.background.bg2};
  }
`;

const SelectMenuButtonTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const SelectMenuButtonIcon = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  padding: 0 4px;
`;

const DropDownMenu = styled.div`
  display: flex;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const DropdownItem = styled.div`
  display: flex;
  padding: 8.5px 12px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

export default SelectMenuButton;
