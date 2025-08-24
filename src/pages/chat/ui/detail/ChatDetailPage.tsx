import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
import Header from '@shared/components/Header';
import IcMenu from '@icon/ic-menu.svg';
import type { HeaderIcon } from '@shared/types/header';
import ChatRoomInput from '@widget/chat/ui/detail/ChatRoomInput';
import ChatMessageSpace from '@widget/chat/ui/detail/ChatMessageSpace';
import ChatFilePage from './ChatFilePage';
import ChatReservationDetailPage from './ChatReservationDetailPage';
import ChatPaymentDocumentPage from './ChatPaymentDocumentPage';

const ChatDetailPage = () => {
  const theme = useTheme();
  const [isFilePageOpen, setIsFilePageOpen] = useState(false);
  const [isFilePageClosing, setIsFilePageClosing] = useState(false);
  const [isReservationDetailOpen, setIsReservationDetailOpen] = useState(false);
  const [isReservationDetailClosing, setIsReservationDetailClosing] = useState(false);
  const [isPaymentDocumentOpen, setIsPaymentDocumentOpen] = useState(false);
  const [reservationDetailType, setReservationDetailType] = useState<
    'request' | 'payment' | 'receipt'
  >('request');

  const handleFilePageClose = () => {
    setIsFilePageClosing(true);
  };

  const handleReservationDetailOpen = (type: 'request' | 'payment' | 'receipt') => {
    setReservationDetailType(type);
    setIsReservationDetailOpen(true);
  };

  const handleReservationDetailClose = () => {
    setIsReservationDetailClosing(true);
  };

  const handlePaymentDocumentOpen = () => {
    setIsPaymentDocumentOpen(true);
  };

  const handlePaymentDocumentClose = () => {
    setIsPaymentDocumentOpen(false);
  };

  useEffect(() => {
    if (isFilePageClosing) {
      const timer = setTimeout(() => {
        setIsFilePageOpen(false);
        setIsFilePageClosing(false);
      }, 800); // 애니메이션 시간과 동일하게 설정

      return () => clearTimeout(timer);
    }
  }, [isFilePageClosing]);

  useEffect(() => {
    if (isReservationDetailClosing) {
      const timer = setTimeout(() => {
        setIsReservationDetailOpen(false);
        setIsReservationDetailClosing(false);
      }, 150); // 애니메이션 시간과 동일하게 설정

      return () => clearTimeout(timer);
    }
  }, [isReservationDetailClosing]);

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
    // 채팅방 상세 페이지 입니다
    <ChatDetailPageContainer>
      <Header
        title="작가 이름"
        isBack={true}
        icons={icons}
        backgroundColor={theme.colors.lightMode.background.bg1}
      />

      {/* 채팅방 메시지 영역 */}
      <ChatMessageSpace onReservationDetailClick={handleReservationDetailOpen} />

      {/* 채팅방 입력 컴포넌트 영역 */}
      <ChatRoomInput onPaymentDocumentOpen={handlePaymentDocumentOpen} />

      {isFilePageOpen && (
        <FilePageOverlay isClosing={isFilePageClosing}>
          <ChatFilePage onClose={handleFilePageClose} isClosing={isFilePageClosing} />
        </FilePageOverlay>
      )}

      {isReservationDetailOpen && (
        <ReservationDetailOverlay isClosing={isReservationDetailClosing}>
          <ChatReservationDetailPage
            reservationDetailType={reservationDetailType}
            onClose={handleReservationDetailClose}
          />
        </ReservationDetailOverlay>
      )}

      {isPaymentDocumentOpen && (
        <PaymentDocumentOverlay>
          <ChatPaymentDocumentPage onClose={handlePaymentDocumentClose} />
        </PaymentDocumentOverlay>
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

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const FilePageOverlay = styled.div<{ isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: white;
  animation: ${({ isClosing }) => (isClosing ? slideOutToRight : slideInFromRight)} 0.8s ease-out;
`;

const ReservationDetailOverlay = styled.div<{ isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: white;
  animation: ${({ isClosing }) => (isClosing ? slideOutToRight : slideInFromRight)} 0.15s
    ease-in-out;
`;

const PaymentDocumentOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: white;
`;
