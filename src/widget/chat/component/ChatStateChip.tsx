// 예약 페이지에서 쓰이는 Status Chip을 관리하는 파일입니다.

import styled from '@emotion/styled';

type ChatStateType = 'on' | 'off';

interface ChatStateChipProps {
  state: ChatStateType;
}

const ChatStateChip = ({ state }: ChatStateChipProps) => {
  return (
    <ChatStatusChipContainer state={state}>
      {state === 'on' ? '활동중' : '종료'}
    </ChatStatusChipContainer>
  );
};

const ChatStatusChipContainer = styled.div<{ state: ChatStateType }>`
  display: flex;
  height: 24px;
  border-radius: 8px;
  padding: 4px 8px;
  background-color: ${({ theme, state }) =>
    state === 'on' ? theme.colors.lightMode.brand.primary : theme.colors.lightMode.background.bg4};
  color: ${({ theme, state }) =>
    state === 'on' ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text3};
  font: ${({ theme }) => theme.fonts.labelS};
  align-items: center;
  justify-content: center;
`;

export default ChatStateChip;
