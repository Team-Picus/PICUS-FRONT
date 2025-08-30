import styled from '@emotion/styled';
import { useState } from 'react';

const RequestTextArea = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setText(value);
    }
  };

  return (
    // 요청사항 컨테이너
    <RequestTextAreaContainer>
      <RequestTextAreaInput value={text} onChange={handleTextChange} />
      <RequestTextAreaCount>{`${text.length}`}/300</RequestTextAreaCount>
    </RequestTextAreaContainer>
  );
};

const RequestTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  border-radius: 8px;
`;

const RequestTextAreaInput = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  border: none;
  outline: none;
  resize: none;
  overflow-y: scroll;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    display: flex;
    width: 6px;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scroll-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
    border-radius: 8px;
  }
`;

const RequestTextAreaCount = styled.div`
  display: flex;
  width: 100%;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

export default RequestTextArea;
