import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import Header from '@shared/components/Header';
import IcMoreVertical from '@icon/ic-more-vertical.svg';
import type { HeaderIcon } from '@shared/types/header';
import { DateChangeNoticeMessage } from '@widget/chat/component/NoticeMessageComponents';
import IcFileBlank from '@icon/ic-file-blank';
import IcDocument from '@icon/ic-document';
import DropDownMenu from '@shared/components/DropDownMenu';
import Modal from '@shared/components/Modal';

interface ChatFilePageProps {
  onClose?: () => void;
}

const ChatFilePage = ({ onClose }: ChatFilePageProps) => {
  const theme = useTheme();
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleMoreClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const handleDropDownClose = () => {
    setIsDropDownVisible(false);
  };

  const handleChatRoomDeleteAll = () => {
    setIsDropDownVisible(false);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalVisible(false);
  };

  // 채팅방 삭제 로직 구현하는 곳 입니다.
  const handleDeleteConfirm = () => {
    console.log('채팅방 삭제 확인');
    setIsDeleteModalVisible(false);
    // 실제 삭제 로직 후 채팅방 목록으로 이동
    if (onClose) {
      onClose();
    }
  };

  const icons: HeaderIcon[] = [
    {
      src: IcMoreVertical,
      alt: '더보기',
      onClick: handleMoreClick,
      isActive: isDropDownVisible,
    },
  ];
  return (
    <ChatFilePageContainer>
      <HeaderWrapper>
        <Header
          isBack={true}
          icons={icons}
          onBackClick={onClose}
          backgroundColor={theme.colors.lightMode.background.bg1}
        />
        <DropDownMenu
          isVisible={isDropDownVisible}
          onClose={handleDropDownClose}
          title="채팅방 설정"
          items={[
            {
              label: '채팅방 삭제하기',
              onClick: handleChatRoomDeleteAll,
              color: theme.colors.lightMode.semantic.error,
            },
          ]}
        />
      </HeaderWrapper>
      <ChatFileListContainer>
        <ChatFileList>
          <DateChangeNoticeMessage />

          {/* 가로로 3개씩 배치됩니다 */}
          <ChatFileGrid>
            <ChatFileItem fileType="file">
              <IcFileBlank />
              <FileTitle>{'File이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
          </ChatFileGrid>
        </ChatFileList>

        <ChatFileList>
          <DateChangeNoticeMessage />

          {/* 가로로 3개씩 배치됩니다 */}
          <ChatFileGrid>
            <ChatFileItem fileType="file">
              <IcFileBlank />
              <FileTitle>{'File이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
          </ChatFileGrid>
        </ChatFileList>

        <ChatFileList>
          <DateChangeNoticeMessage />

          {/* 가로로 3개씩 배치됩니다 */}
          <ChatFileGrid>
            <ChatFileItem fileType="file">
              <IcFileBlank />
              <FileTitle>{'File이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
            <ChatFileItem fileType="document">
              <IcDocument />
              <FileTitle>{'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요'}</FileTitle>
            </ChatFileItem>
          </ChatFileGrid>
        </ChatFileList>
      </ChatFileListContainer>

      {/* 채팅방 삭제 확인 모달 */}
      <Modal
        isVisible={isDeleteModalVisible}
        title="채팅방을 삭제할까요?"
        customDescription={
          <>
            채팅방을 삭제해도 상대에게 지속적으로 연락이 올 수 있습니다. 차단하시려면 서비스에{' '}
            <u>문의</u>해주세요.
          </>
        }
        leftButtonText="닫기"
        rightButtonText="삭제하기"
        onClose={handleDeleteModalClose}
        onLeftClick={handleDeleteModalClose}
        onRightClick={handleDeleteConfirm}
      />
    </ChatFilePageContainer>
  );
};

export default ChatFilePage;

const ChatFilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
`;

const HeaderWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const ChatFileListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  width: 100%;
  gap: 10px;
  flex: 1;
  overflow-y: auto;
`;

const ChatFileList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const ChatFileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: 100%;
`;

const ChatFileItem = styled.div<{ fileType: 'file' | 'document' }>`
  aspect-ratio: 1;
  background-color: ${({ theme, fileType }) =>
    fileType === 'file'
      ? theme.colors.lightMode.background.bg3
      : theme.colors.lightMode.brand.primary};
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  padding: 12px;
  justify-content: space-between;
  flex-direction: column;
  svg {
    color: ${({ theme }) => theme.colors.lightMode.icon.icon};
  }
`;

const FileTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;
