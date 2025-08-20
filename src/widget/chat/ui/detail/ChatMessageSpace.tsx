import styled from '@emotion/styled';
import IcOtherProfile from '@icon/ic-avatars.svg';
import {
  CheckMessage,
  NormalMessage,
  RequestCheckMessage,
} from '@widget/chat/component/ChatTypeComponents';
import {
  DateChangeNoticeMessage,
  FirstChatNoticeMessage,
} from '@widget/chat/component/NoticeMessageComponents';

const ChatMessageSpace = () => {
  return (
    <ChatMessageSpaceContainer>
      <FirstChatNoticeMessage />

      <DateChangeNoticeMessage />

      {/* 유저의 메시지 */}
      <UserMessageContainer>
        <UserMessageContentContainer>
          <RequestCheckMessage roleType="my" />

          <NormalMessage roleType="my" text="안녕하세요! 잘 부탁드립니다." time="13:21" />
          <NormalMessage
            roleType="my"
            text="안녕하세요! 잘 부탁드립니다."
            time="13:21"
            images={['']}
          />
          <NormalMessage
            roleType="my"
            text="파일을 첨부해드렸습니다."
            time="13:22"
            files={[
              { id: 1, fileName: '파일명.pdf' },
              { id: 2, fileName: '파일명ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ.pdf' },
              { id: 3, fileName: '의뢰서_최종본.pdf' },
            ]}
          />
        </UserMessageContentContainer>
      </UserMessageContainer>

      {/* 상대방 메시지 */}
      <OtherMessageContainer>
        <OtherMessage>
          {/* 상대방 프로필 */}
          <OtherImage src={IcOtherProfile} />

          {/* 상대방 메시지 전체 틀 */}
          <OtherMessageContentContainer>
            {/* 각각의 메시지 내용 */}
            <CheckMessage roleType="other" checkType="payment" />

            <NormalMessage
              roleType="other"
              text="안녕하세요! 의뢰주셔서 감사합니다."
              time="13:20"
            />
          </OtherMessageContentContainer>
        </OtherMessage>
      </OtherMessageContainer>
    </ChatMessageSpaceContainer>
  );
};

export default ChatMessageSpace;

const ChatMessageSpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
`;

const UserMessageContainer = styled.div`
  display: flex;
  padding: 16px 16px 16px 40px;
  justify-content: flex-end;
`;

const OtherMessageContainer = styled.div`
  display: flex;
  padding: 16px 40px 16px 16px;
  justify-content: flex-start;
`;

const OtherMessage = styled.div`
  display: flex;
  gap: 8px;
`;

const OtherImage = styled.img`
  display: flex;
  width: 32px;
  height: 32px;
`;

const UserMessageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

const OtherMessageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 8px;
`;
