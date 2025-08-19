import styled from '@emotion/styled';

interface ChatSettingModalProps {
  isVisible: boolean;
  onClose: () => void;
  onEditClick: () => void;
  onPinClick: () => void;
}

const ChatSettingModal = ({
  isVisible,
  onClose,
  onEditClick,
  onPinClick,
}: ChatSettingModalProps) => {
  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ChatModalTitle>{'채팅 설정'}</ChatModalTitle>
        <ModalItem onClick={onEditClick}>편집</ModalItem>
        <ModalItem onClick={onPinClick}>채팅방 상단고정</ModalItem>
      </ModalContainer>
    </>
  );
};

export default ChatSettingModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: calc(100% - 8px + 4px);
  right: 8px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  padding: 4px 0;
`;

const ChatModalTitle = styled.div`
  padding: 8px 12px;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const ModalItem = styled.div`
  padding: 8px 12px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightMode.background.bgColor};
  }
`;
