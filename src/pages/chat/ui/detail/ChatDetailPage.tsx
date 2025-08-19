import Header from '@shared/components/Header';

const ChatDetailPage = () => {
  return (
    <ChatDetailPageContainer>
      <HeaderWrapper>
        <Header title="작가 이름" isBack={true}></Header>
      </HeaderWrapper>
    </ChatDetailPageContainer>
  );
};

export default ChatDetailPage;
