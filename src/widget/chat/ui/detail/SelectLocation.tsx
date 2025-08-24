import styled from '@emotion/styled';

const SelectLocation = () => {
  return (
    <>
      <SelectLocationContainer>
        <SelectLocationLeftButton>{'개인스튜디오'}</SelectLocationLeftButton>
        <SelectLocationRightButton>{'외부'}</SelectLocationRightButton>
      </SelectLocationContainer>
      <SelectLocationText>{'서울시 송파구 00동 00길 182-17'}</SelectLocationText>
    </>
  );
};

const SelectLocationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 4px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  align-items: center;
  justify-content: center;
`;

const SelectLocationLeftButton = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1color};
`;

const SelectLocationRightButton = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const SelectLocationText = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  align-items: center;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

export default SelectLocation;
