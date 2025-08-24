// 결제의뢰서의 공통 컨테이너입니다.
import React from 'react';
import styled from '@emotion/styled';

interface PaymentBillCommonContainerProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

const PaymentBillCommonContainer = ({
  title,
  subTitle,
  children,
}: PaymentBillCommonContainerProps) => {
  return (
    <CommonContainer>
      <CommonTitle>
        <CommonDotIcon />
        <CommonTitleText>{title}</CommonTitleText>
        {subTitle && <CommonSubTitleText>{subTitle}</CommonSubTitleText>}
      </CommonTitle>
      {children}
    </CommonContainer>
  );
};

export default PaymentBillCommonContainer;

// Styled Components
const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 16px;
`;

const CommonTitle = styled.div`
  display: flex;
  gap: 8px;
`;

const CommonDotIcon = styled.div`
  display: flex;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.lightMode.text.text3};
  align-self: center;
`;

const CommonTitleText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const CommonSubTitleText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  align-self: center;
`;
