import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@shared/components/Header';
import IcMoreVertical from '@icon/ic-more-vertical.svg';
import type { HeaderIcon } from '@shared/types/header';
import { DateChangeNoticeMessage } from '@widget/chat/component/NoticeMessageComponents';
import ChatFileGrid from '@widget/chat/ui/detail/file/ChatFileGrid';
import DropDownMenu from '@shared/components/DropDownMenu';
import Modal from '@shared/components/Modal';

interface ChatFilePageProps {
  onClose?: () => void;
  isClosing?: boolean;
}

const ChatFilePage = ({ onClose, isClosing }: ChatFilePageProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  // 파일 데이터 배열
  const fileData = [
    {
      fileType: 'file' as const,
      fileName: 'File이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요',
    },
    {
      fileType: 'document' as const,
      fileName: 'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요',
    },
    {
      fileType: 'document' as const,
      fileName: 'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요',
    },
    {
      fileType: 'document' as const,
      fileName: 'Document이름이 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ길어요 많이 길어요',
    },
  ];

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
    // replace: true로 설정하여 뒤로 돌아갈 수 없도록 함
    navigate('/chat', { replace: true });
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
    // 채팅방 파일 저장함 페이지 입니다.
    <ChatFilePageContainer>
      <HeaderWrapper isClosing={isClosing}>
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
        {/* 날짜 별 파일 리스트 영역 */}
        <ChatFileList>
          <DateChangeNoticeMessage />

          {/* 가로로 3개씩 배치됩니다 */}
          <ChatFileGrid files={fileData} />
        </ChatFileList>
      </ChatFileListContainer>

      {/* 채팅방 삭제 확인 모달 */}
      <Modal
        isVisible={isDeleteModalVisible}
        title="채팅방을 삭제할까요?"
        customDescription={
          <>
            채팅방을 삭제해도 상대에게 지속적으로 연락이 올 수 있습니다. 차단하시려면 서비스에{' '}
            {/* 추후 경로 수정해야함 */}
            <u onClick={() => navigate('/service')}>문의</u>
            해주세요.
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

const HeaderWrapper = styled.div<{ isClosing?: boolean }>`
  position: relative;
  flex-shrink: 0;
  visibility: ${({ isClosing }) => (isClosing ? 'hidden' : 'visible')};
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
