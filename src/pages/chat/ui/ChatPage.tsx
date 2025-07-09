import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import IcCalendar from '@icon/ic-calendar.svg';
import IcMoreVertical from '@icon/ic-more-vertical.svg';

const ChatPage = () => {
  const icons = [
    {
      src: IcCalendar,
      alt: '캘린더',
      onClick: () => {
        console.log('캘린더 아이콘 클릭됨');
      },
    },
    {
      src: IcMoreVertical,
      alt: '더보기',
      onClick: () => {
        console.log('더보기 아이콘 클릭됨');
      },
    },
  ];
  return (
    <>
      <Header title="채팅" icons={icons} />
      <div>ChatPage</div>
      <Navigation />
    </>
  );
};

export default ChatPage;
