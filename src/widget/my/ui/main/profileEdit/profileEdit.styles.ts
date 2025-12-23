import styled from '@emotion/styled';

export const EditTapViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;
