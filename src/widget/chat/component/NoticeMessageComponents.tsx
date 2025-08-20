// 다양한 안내 메시지를 관리합니다. ex) 날짜 변경, 첫 채팅 시작 시 메시지 등
import styled from '@emotion/styled';

const FirstChatNoticeMessage = () => {
  return (
    <FirstNoticeMessageContainer>
      <FirstNoticeMessage>
        {
          '{클라}가 {작가}에게 주문서를 보내며 거래를 시작했습니다. 안전하고 공정한 거래로 즐거운 시간 보내시길 바라겠습니다.'
        }
      </FirstNoticeMessage>
    </FirstNoticeMessageContainer>
  );
};

const FirstNoticeMessageContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
`;

const FirstNoticeMessage = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg3};
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  text-align: center;
`;

const DateChangeNoticeMessage = () => {
  return <DateChangeNotice>{'2025년 8월 19일'}</DateChangeNotice>;
};

const DateChangeNotice = styled.div`
  display: flex;
  padding: 8px 0;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  font: ${({ theme }) => theme.fonts.body4};
`;

export { FirstChatNoticeMessage, DateChangeNoticeMessage };
