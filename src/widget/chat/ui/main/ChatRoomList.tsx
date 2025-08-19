import { useState } from 'react';
import styled from '@emotion/styled';
import ChatRoomCard from '@widget/chat/component/ChatRoomCard';
import IcCheckNone from '@icon/ic-circle-check.svg';
import IcCheck from '@icon/ic-circle-check-filled.svg';

interface ChatRoomListProps {
  isEditMode?: boolean;
  isPinMode?: boolean;
  onCheckedCountChange?: (count: number) => void;
}

const ChatRoomList = ({ isEditMode, isPinMode, onCheckedCountChange }: ChatRoomListProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onCheckedCountChange?.(newChecked ? 1 : 0);
  };

  const showCheckbox = isEditMode || isPinMode;

  return (
    <ChatRoomListContainer>
      <ChatRoomCardContainer>
        {showCheckbox && (
          <ChatRoomEditCheck
            src={isChecked ? IcCheck : IcCheckNone}
            alt="check"
            onClick={handleCheckClick}
          />
        )}
        <ChatRoomCard isPinned={false} />
      </ChatRoomCardContainer>
    </ChatRoomListContainer>
  );
};

export default ChatRoomList;

const ChatRoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg3};
`;

const ChatRoomCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const ChatRoomEditCheck = styled.img`
  margin-left: 16px;
  cursor: pointer;
`;
