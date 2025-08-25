import styled from '@emotion/styled';
import IcPin from '@icon/ic-pin.svg';

interface ChatRoomCardProps {
  isPinned?: boolean;
  authorName?: string;
  lastMessage?: string;
  lastMessageTime?: string;
  messageCount?: number;
}

const ChatRoomCard = ({
  isPinned = false,
  authorName = '작가 이름',
  lastMessage = '넵! 그럼 몇 시가 좋으실까요?',
  lastMessageTime = '오후 10:15',
  messageCount = 1,
}: ChatRoomCardProps) => {
  return (
    <ChatRoomCardContainer>
      <ChatProfileImage />
      <ChatRoomInfoContainer>
        <ChatRoomProfile>
          <ChatRoomProfileName>
            {authorName} {isPinned && <PinIcon src={IcPin} alt="pin" />}
          </ChatRoomProfileName>
          <ChatRoomLatestMessageTime>{lastMessageTime}</ChatRoomLatestMessageTime>
        </ChatRoomProfile>

        <ChatRoomMessageContainer>
          <ChatRoomLatestMessage>{lastMessage}</ChatRoomLatestMessage>
          {messageCount > 0 && <ChatRoomMessageCount>{messageCount}</ChatRoomMessageCount>}
        </ChatRoomMessageContainer>
      </ChatRoomInfoContainer>
    </ChatRoomCardContainer>
  );
};

export default ChatRoomCard;

const ChatRoomCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 24px 16px;
  gap: 12px;
`;

const ChatProfileImage = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const ChatRoomInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

const ChatRoomProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ChatRoomProfileName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font: ${({ theme }) => theme.fonts.labelMB};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const PinIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ChatRoomLatestMessageTime = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const ChatRoomMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ChatRoomLatestMessage = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const ChatRoomMessageCount = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: #2d2d2d;
  border-radius: 45px;
  font: ${({ theme }) => theme.fonts.labelS};
  color: white;
  justify-content: center;
  align-items: center;
`;
