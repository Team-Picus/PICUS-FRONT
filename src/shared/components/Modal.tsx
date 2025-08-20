import styled from '@emotion/styled';

interface ModalProps {
  isVisible: boolean;
  title: string;
  description?: string;
  customDescription?: React.ReactNode; // 커스텀 설명을 위한 추가 prop
  leftButtonText: string;
  rightButtonText: string;
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
  onClose,
  onLeftClick,
  onRightClick,
}: ModalProps) => {
  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalContent>
          <ModalText>
            <ModalTitle>{title}</ModalTitle>
            {/* 밑줄을 긋는 등 커스텀을 하기 위해 만들었습니다. */}
            {customDescription ? (
              <ModalDescription>{customDescription}</ModalDescription>
            ) : (
              <ModalDescription>{description}</ModalDescription>
            )}
          </ModalText>
          <ButtonContainer>
            <CancelButton onClick={onLeftClick}>{leftButtonText}</CancelButton>
            <ConfirmButton onClick={onRightClick}>{rightButtonText}</ConfirmButton>
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

const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 16px 24px;
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

const ConfirmButton = styled.button`
  flex: 1;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1color};
`;
