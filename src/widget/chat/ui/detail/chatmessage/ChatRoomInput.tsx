import styled from '@emotion/styled';
import { useState } from 'react';
import IcPlus from '@icon/ic-plus.svg';
import IcSend from '@icon/ic-send.svg';
import IcCloseBig from '@icon/ic-close-big.svg';
import {
  AddContentSpace,
  ChatAddContents,
} from '@widget/chat/ui/detail/chatmessage/ChatAddContents';

interface ChatRoomInputProps {
  onPaymentDocumentOpen: () => void;
}

const ChatRoomInput = ({ onPaymentDocumentOpen }: ChatRoomInputProps) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [showContentSpace, setShowContentSpace] = useState(false);
  const [contentType, setContentType] = useState<'image' | 'file'>('image');

  const handleAddClick = () => {
    setIsAddMode(!isAddMode);
    if (isAddMode) {
      setShowContentSpace(false);
    }
  };

  const handleContentTypeChange = (type: 'image' | 'file' | 'document') => {
    if (type === 'document') {
      // 결제청구서일 때 모달 띄우기
      onPaymentDocumentOpen();
      setIsAddMode(false);
      setShowContentSpace(false);
      return;
    }
    setContentType(type);
    setShowContentSpace(true);
  };

  return (
    <ChatRoomInputWrapper>
      {showContentSpace && <AddContentSpace contentType={contentType} />}
      <ChatRoomInputContainer>
        <FileInput
          src={isAddMode ? IcCloseBig : IcPlus}
          alt={isAddMode ? '닫기' : '파일 추가'}
          onClick={handleAddClick}
        />
        <InputMessage placeholder="메시지를 입력하세요..." />
        <SendButton>
          <img src={IcSend} alt="전송" />
        </SendButton>
      </ChatRoomInputContainer>
      {isAddMode && <ChatAddContents onContentTypeChange={handleContentTypeChange} role="artist" />}
    </ChatRoomInputWrapper>
  );
};

export default ChatRoomInput;

const ChatRoomInputWrapper = styled.div`
  position: sticky;
  margin-top: auto;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
`;

const ChatRoomInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px 6px 12px;
  gap: 8px;
`;

const FileInput = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

const InputMessage = styled.input`
  flex: 1;
  padding: 8px 12px 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  font: ${({ theme }) => theme.fonts.body2};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightMode.text.text2};
  }
`;

const SendButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;
