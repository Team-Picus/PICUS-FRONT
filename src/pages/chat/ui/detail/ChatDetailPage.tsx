import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import Header from '@shared/components/Header';
import IcMenu from '@icon/ic-menu.svg';
import type { HeaderIcon } from '@shared/types/header';
import ChatRoomInput from '@widget/chat/ui/detail/ChatRoomInput';
import ChatMessageSpace from '@widget/chat/ui/detail/ChatMessageSpace';
import ChatFilePage from './ChatFilePage';

const ChatDetailPage = () => {
  const theme = useTheme();
  const [isFilePageOpen, setIsFilePageOpen] = useState(false);

  const icons: HeaderIcon[] = [
    {
      src: IcMenu,
      alt: '메뉴',
      onClick: () => {
        setIsFilePageOpen(true);
      },
    },
  ];
  return (
    <ChatDetailPageContainer>
      <Header
        title="작가 이름"
        isBack={true}
        icons={icons}
        backgroundColor={theme.colors.lightMode.background.bg1}
      />
      <ChatMessageSpace />
      <ChatRoomInput />

      {isFilePageOpen && (
        <FilePageOverlay>
          <ChatFilePage onClose={() => setIsFilePageOpen(false)} />
        </FilePageOverlay>
      )}
    </ChatDetailPageContainer>
  );
};

export default ChatDetailPage;

const ChatDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  position: relative;
`;

const FilePageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: white;
`;
