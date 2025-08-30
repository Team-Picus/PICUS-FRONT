import styled from '@emotion/styled';
import { useState } from 'react';

interface ModalProps {
  isVisible: boolean;
  title: string;
  description?: string;
  customDescription?: React.ReactNode; // 커스텀 설명을 위한 추가 prop
  leftButtonText: string;
  rightButtonText: string;
  checkBox?: boolean;
  checkBoxText?: string;
  onClose: () => void;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const Modal = ({
  isVisible,
  title,
  description,
  customDescription,
  leftButtonText,
  rightButtonText,
  checkBox,
  checkBoxText,
  onClose,
  onLeftClick,
  onRightClick,
}: ModalProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalContent>
          <ModalTextContainer>
            <ModalText>
              <ModalTitle>{title}</ModalTitle>
              {/* 밑줄을 긋는 등 커스텀을 하기 위해 만들었습니다. */}
              {customDescription ? (
                <ModalDescription>{customDescription}</ModalDescription>
              ) : (
                <ModalDescription>{description}</ModalDescription>
              )}
            </ModalText>
            {checkBox && (
              <CheckBoxContainer onClick={handleCheckBoxClick}>
                <CheckBox isChecked={isChecked}>{isChecked && <CheckBoxInner />}</CheckBox>
                <CheckBoxText>{checkBoxText}</CheckBoxText>
              </CheckBoxContainer>
            )}
          </ModalTextContainer>

          <ButtonContainer>
            <CancelButton onClick={onLeftClick}>{leftButtonText}</CancelButton>
            <ConfirmButton onClick={onRightClick} hasCheckBox={checkBox} isChecked={isChecked}>
              {rightButtonText}
            </ConfirmButton>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
`;

const ModalContent = styled.div`
  width: 326px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
`;

const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 24px 16px 24px;
`;

const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ModalTitle = styled.div`
  font: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ModalDescription = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 8px 16px;
  gap: 12px;
`;

const CancelButton = styled.button`
  flex: 1;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

interface ConfirmButtonProps {
  hasCheckBox?: boolean;
  isChecked?: boolean;
}

const ConfirmButton = styled.button<ConfirmButtonProps>`
  flex: 1;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme, hasCheckBox, isChecked }) => {
    if (hasCheckBox && !isChecked) {
      return theme.colors.lightMode.background.bg4;
    }
    return theme.colors.lightMode.neutral.neutral1000;
  }};
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme, hasCheckBox, isChecked }) => {
    if (hasCheckBox && !isChecked) {
      return theme.colors.lightMode.text.text4;
    }
    return theme.colors.lightMode.text.text1color;
  }};
`;

const CheckBoxContainer = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;

const CheckBox = styled.div<{ isChecked: boolean }>`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CheckBoxInner = styled.div`
  width: 13.33px;
  height: 13.33px;
  border-radius: 16px;
  background-color: #1d1d1d;
`;

const CheckBoxText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;
