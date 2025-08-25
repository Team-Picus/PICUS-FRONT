import styled from '@emotion/styled';
const StartTimeSelector = () => {
  return (
    // 시작 시간 컨테이너
    <>
      <SelectTimeContainer>{'2025년 6월 6일 금요일'}</SelectTimeContainer>

      <SelectTimeContainer>{'오전 11:00'}</SelectTimeContainer>

      <ThemeTextContainer>
        <ThemeText>클라이언트의 주문서 : 2025년 6월 6일 금요일, 오전 11:00</ThemeText>
      </ThemeTextContainer>
    </>
  );
};

const SelectTimeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 8.5px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral300};
  align-items: center;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ThemeTextContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  align-items: center;
  justify-content: start;
`;

const ThemeText = styled.div`
  display: flex;
  text-align: start;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

export default StartTimeSelector;
