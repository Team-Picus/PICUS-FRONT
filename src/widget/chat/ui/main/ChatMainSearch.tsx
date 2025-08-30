import { useState } from 'react';
import styled from '@emotion/styled';
import IcSearch from '@icon/ic-search.svg';
import IcDelete from '@icon/ic-delete-filled.svg';

const ChatMainSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    // 채팅 검색 컴포넌트 입니다.
    <ChatMainSearchContainer>
      <ChatMainSearchInputContainer isFocused={isFocused}>
        <SearchIcon src={IcSearch} alt="search" />
        <ChatSearchInput
          type="text"
          placeholder="채팅 검색"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {inputValue.length > 0 && (
          <DeleteIcon src={IcDelete} alt="delete" onClick={handleClearInput} />
        )}
      </ChatMainSearchInputContainer>
    </ChatMainSearchContainer>
  );
};

export default ChatMainSearch;

const ChatMainSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 8px 12px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  align-items: center;
  justify-content: center;
`;

interface ChatMainSearchInputContainerProps {
  isFocused: boolean;
}

const ChatMainSearchInputContainer = styled.div<ChatMainSearchInputContainerProps>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors.lightMode.neutral.neutral1000 : 'transparent'};
  padding: 8px 12px;
  gap: 8px;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.lightMode.icon.icon2};
`;

const ChatSearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightMode.text.text2};
  }

  &:focus {
    outline: none;
  }
`;

const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
