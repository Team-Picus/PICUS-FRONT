import { useState } from 'react';
import styled from '@emotion/styled';
import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import IcCalendar from '@icon/ic-calendar.svg';
import IcMoreVertical from '@icon/ic-more-vertical.svg';
import ChatMainSearch from '@widget/chat/ui/main/ChatMainSearch';
import ChatRoomList from '@widget/chat/ui/main/ChatRoomList';
import DropDownMenu from '@shared/components/DropDownMenu';
import BottomTap from '@shared/components/BottomTap';
import Modal from '@shared/components/Modal';

const ChatMainPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPinMode, setIsPinMode] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isPinModalVisible, setIsPinModalVisible] = useState(false);
  const [pinnedCount, setPinnedCount] = useState(0); // 현재 고정된 채팅방의 수

  const handleMoreClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleEditMode = () => {
    setIsEditMode(true);
    setIsModalVisible(false);
  };

  const handleBackClick = () => {
    // Pin 모드에서 체크된 항목이 있을 때 확인 모달 표시
    if (isPinMode && checkedCount > 0) {
      setIsPinModalVisible(true);
    } else {
      setIsEditMode(false);
      setIsPinMode(false);
      setCheckedCount(0);
    }
  };

  const handleCheckedCountChange = (count: number) => {
    setCheckedCount(count);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalVisible(false);
  };

  const handlePinModalClose = () => {
    setIsPinModalVisible(false);
  };

  const handleDeleteConfirm = () => {
    // 실제 삭제 로직 구현
    console.log(`${checkedCount}개의 채팅을 삭제합니다.`);
    setIsDeleteModalVisible(false);
    setCheckedCount(0);
  };

  const handlePinMode = () => {
    setIsPinMode(true);
    setIsModalVisible(false);
  };

  const handlePinConfirm = () => {
    console.log(`${checkedCount}개의 채팅방을 상단에 고정합니다.`);
    setPinnedCount((prev) => prev + checkedCount); // 고정된 채팅방 수 업데이트
    setIsPinMode(false);
    setCheckedCount(0);
    setIsPinModalVisible(false);
  };

  const handlePinExit = () => {
    // Pin 모드에서 변경 사항을 버리고 나가기
    setIsPinMode(false);
    setCheckedCount(0);
    setIsPinModalVisible(false);
  };

  const icons =
    isEditMode || isPinMode
      ? []
      : [
          {
            src: IcCalendar,
            alt: '캘린더',
            onClick: () => {
              console.log('캘린더 아이콘 클릭됨');
            },
          },
          {
            src: IcMoreVertical,
            alt: '더보기',
            onClick: handleMoreClick,
            isActive: isModalVisible,
          },
        ];

  return (
    <ChatPageContainer>
      <HeaderWrapper>
        <Header
          title={isEditMode ? '채팅 편집' : isPinMode ? '채팅방 상단고정' : '채팅'}
          icons={icons}
          isBack={isEditMode || isPinMode}
          onBackClick={handleBackClick}
        />
        <DropDownMenu
          isVisible={isModalVisible}
          onClose={handleModalClose}
          title="채팅 설정"
          items={[
            {
              label: '편집',
              onClick: handleEditMode,
            },
            {
              label: '채팅방 상단고정',
              onClick: handlePinMode,
            },
          ]}
        />
      </HeaderWrapper>
      <ChatMainSearch />
      <ChatRoomList
        isEditMode={isEditMode}
        isPinMode={isPinMode}
        onCheckedCountChange={handleCheckedCountChange}
      />
      {isEditMode || isPinMode ? (
        <BottomTap
          checkedCount={checkedCount}
          leftButtonText={isPinMode && checkedCount === 0 ? `${pinnedCount} 고정` : '선택 해제'}
          rightButtonText={isPinMode ? '고정하기' : '삭제하기'}
          onLeftClick={() => setCheckedCount(0)}
          onRightClick={isPinMode ? handlePinConfirm : handleDeleteClick}
        />
      ) : (
        <Navigation />
      )}
      {/* 편집 모달 */}
      <Modal
        isVisible={isDeleteModalVisible}
        title={`${checkedCount}개의 채팅을 삭제할까요?`}
        description="삭제한 채팅은 다시 복구시킬 수 없습니다."
        leftButtonText="닫기"
        rightButtonText="삭제하기"
        onClose={handleDeleteModalClose}
        onLeftClick={handleDeleteModalClose}
        onRightClick={handleDeleteConfirm}
      />
      {/* 고정 모달 */}
      <Modal
        isVisible={isPinModalVisible}
        title="설정을 삭제하고 나갈까요?"
        description={'설정을 저장하려면 "취소" 버튼 클릭 후 "완료하고 나가기"를 클릭해주세요'}
        leftButtonText="닫기"
        rightButtonText="나가기"
        onClose={handlePinModalClose}
        onLeftClick={handlePinModalClose}
        onRightClick={handlePinExit}
      />
    </ChatPageContainer>
  );
};

export default ChatMainPage;

const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

const HeaderWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;
