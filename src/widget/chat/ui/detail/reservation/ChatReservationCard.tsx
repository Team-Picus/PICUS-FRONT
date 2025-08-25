import styled from '@emotion/styled';
import IcNavigate from '@icon/ic-navigate.svg?react';
import ChatStateChip from '../../../component/ChatStateChip';

interface ChatReservationCardProps {
  myReservation: {
    date: string;
    state: 'on' | 'off';
    image: string;
    time: string;
    artistName: string;
    location: string;
    locationSub: string;
  };
}

const ChatReservationCard = ({ myReservation }: ChatReservationCardProps) => {
  return (
    <ChatReservationCardContainer>
      <ChatReservationCardHeader>
        <ChatReservationCardHeaderLeft>
          <ChatReservationCardHeaderDate>{myReservation.date}</ChatReservationCardHeaderDate>
          <ChatStateChip state={myReservation.state} />
        </ChatReservationCardHeaderLeft>

        <ChatReservationCardHeaderRight>
          <IcNavigate />
        </ChatReservationCardHeaderRight>
      </ChatReservationCardHeader>

      <ChatReservationCardContentContainer>
        <ChatReservationCardContentLeft>
          <img src={myReservation.image} alt="mainbanner" />
        </ChatReservationCardContentLeft>

        <ChatReservationCardContentRight>
          {/* 시간 */}
          <ChatReservationCardContent>
            <ChatReservationCardContentTitle>{'시간'}</ChatReservationCardContentTitle>
            <ChatReservationCardContentValue>{myReservation.time}</ChatReservationCardContentValue>
          </ChatReservationCardContent>
          {/* 작가 */}
          <ChatReservationCardContent>
            <ChatReservationCardContentTitle>{'작가'}</ChatReservationCardContentTitle>
            <ChatReservationCardContentValue>
              {myReservation.artistName}
            </ChatReservationCardContentValue>
          </ChatReservationCardContent>

          {/* 장소 */}
          <ChatReservationCardContent>
            <ChatReservationCardContentTitle>{'장소'}</ChatReservationCardContentTitle>
            <ChatReservationCardContentValueContainer>
              <ChatReservationCardContentValue>
                {myReservation.location}
              </ChatReservationCardContentValue>
              <ChatReservationCardContentSubValue>
                {myReservation.locationSub}
              </ChatReservationCardContentSubValue>
            </ChatReservationCardContentValueContainer>
          </ChatReservationCardContent>
        </ChatReservationCardContentRight>
      </ChatReservationCardContentContainer>

      {/* 채팅 버튼 */}
      <ChatReservationCardButton>{'채팅'}</ChatReservationCardButton>
    </ChatReservationCardContainer>
  );
};

const ChatReservationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const ChatReservationCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ChatReservationCardHeaderLeft = styled.div`
  display: flex;
  gap: 12px;
`;

const ChatReservationCardHeaderDate = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationCardHeaderRight = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

const ChatReservationCardContentContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const ChatReservationCardContentLeft = styled.div`
  display: flex;
  width: 102px;
  height: 102px;
`;

const ChatReservationCardContentRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;

const ChatReservationCardContent = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 16px;
`;

const ChatReservationCardContentTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: #7f7e7e;
  align-items: flex-start;
`;

const ChatReservationCardContentValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChatReservationCardContentValue = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationCardContentSubValue = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const ChatReservationCardButton = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  padding: 8px 0;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

export default ChatReservationCard;
