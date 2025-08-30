// 예약 진행 단계를 표시하는 타이틀 컴포넌트입니다.

import styled from '@emotion/styled';

export type ReservationStepType = 'request' | 'payment' | 'receipt';

interface ChatReservationTypeTitleProps {
  currentStep: ReservationStepType;
}

const ChatReservationTypeTitle = ({ currentStep }: ChatReservationTypeTitleProps) => {
  return (
    <ChatReservationDetailType>
      <ChatReservationDetailTypeTitle isActive={currentStep === 'request'}>
        {'1. 의뢰서 확인'}
      </ChatReservationDetailTypeTitle>
      <ChatReservationDetailTypeTitle isActive={currentStep === 'payment'}>
        {'2. 결제청구서 확인'}
      </ChatReservationDetailTypeTitle>
      <ChatReservationDetailTypeTitle isActive={currentStep === 'receipt'}>
        {'3. 예약 완료'}
      </ChatReservationDetailTypeTitle>
    </ChatReservationDetailType>
  );
};

const ChatReservationDetailType = styled.div`
  display: flex;
  gap: 8px;
`;

const ChatReservationDetailTypeTitle = styled.div<{ isActive: boolean }>`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.lightMode.brand.dark : theme.colors.lightMode.text.text5};
`;

export default ChatReservationTypeTitle;
