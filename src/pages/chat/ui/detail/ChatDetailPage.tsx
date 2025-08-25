import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@shared/components/Header';
import IcMenu from '@icon/ic-menu.svg';
import type { HeaderIcon } from '@shared/types/header';
import ChatRoomInput from '@widget/chat/ui/detail/chatmessage/ChatRoomInput';
import ChatMessageSpace from '@widget/chat/ui/detail/chatmessage/ChatMessageSpace';
import ChatFilePage from './ChatFilePage';
import ChatPaymentDocumentPage from './ChatPaymentDocumentPage';
import ChatDocumentDetailPage from './ChatDocumentDetailPage';

const ChatDetailPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [view, setView] = useState<'chat' | 'file' | 'reservation' | 'payment'>('chat');
  const [reservationDetailType, setReservationDetailType] = useState<
    'request' | 'payment' | 'receipt'
  >('request');

  const goToFile = () => setView('file');
  const goToReservation = (type: 'request' | 'payment' | 'receipt') => {
    setReservationDetailType(type);
    setView('reservation');
  };
  const goToPayment = () => setView('payment');
  const goBack = () => setView('chat');
  const handleBackClick = () => navigate('/chat');

  const icons: HeaderIcon[] = [
    {
      src: IcMenu,
      alt: '메뉴',
      onClick: goToFile,
    },
  ];

  return (
    <ChatDetailPageContainer>
      {view === 'chat' && (
        <>
          <Header
            title="작가 이름"
            isBack={true}
            onBackClick={handleBackClick}
            icons={icons}
            backgroundColor={theme.colors.lightMode.background.bg1}
          />
          <ChatMessageSpace onReservationDetailClick={goToReservation} />
          <ChatRoomInput onPaymentDocumentOpen={goToPayment} />
        </>
      )}

      {/* 파일함 페이지 */}
      {view === 'file' && <ChatFilePage onClose={goBack} />}

      {/* 예약 상세 페이지 */}
      {view === 'reservation' && (
        <ChatDocumentDetailPage reservationDetailType={reservationDetailType} onClose={goBack} />
      )}

      {/* 결제 청구서 페이지 */}
      {view === 'payment' && <ChatPaymentDocumentPage onClose={goBack} />}
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
