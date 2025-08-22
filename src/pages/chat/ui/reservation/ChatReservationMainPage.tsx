import Header from '@shared/components/Header';
import styled from '@emotion/styled';
import SelectMenuButton from '@shared/components/SelectMenuButton';
import ChatReservationCard from '@widget/chat/ui/reservation/ChatReservationCard';
import { useNavigate } from 'react-router-dom';

const ChatReservationMainPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <ChatReservationMainPageContainer>
      <HeaderWrapper>
        <Header title="예약내역" isBack={true} onBackClick={handleBackClick} />
      </HeaderWrapper>
      <ChatReservationMainContentContainer>
        {/* 예약 Select Menu Button */}
        <ChatReservationSelectMenuContainer>
          <SelectMenuButton
            title="6개월"
            isActive={true}
            dropDownTitle="레이블"
            contents={['6개월', '3개월', '일주일', '전체']}
          />
          <SelectMenuButton
            title="예약 상태"
            isActive={true}
            dropDownTitle="레이블"
            contents={['옵션', '옵션', '옵션', '옵션']}
          />
        </ChatReservationSelectMenuContainer>

        {/* 예약 카드 리스트 */}
        <ChatReservationCard />
        <ChatReservationCard />
      </ChatReservationMainContentContainer>
    </ChatReservationMainPageContainer>
  );
};

const ChatReservationMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

const HeaderWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const ChatReservationMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatReservationSelectMenuContainer = styled.div`
  display: flex;
  padding: 10px 16px;
  gap: 8px;
`;

export default ChatReservationMainPage;
