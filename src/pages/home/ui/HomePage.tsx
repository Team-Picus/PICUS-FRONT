import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import IcSearch from '@icon/ic-search.svg';
import IcBell from '@icon/ic-bell.svg';
import MainBanner from '@widget/home/ui/MainBanner.tsx';

const HomePage = () => {
  const icons: HeaderIcon[] = [
    {
      src: IcSearch,
      alt: '검색',
      onClick: () => {
        console.log('검색 아이콘 클릭됨');
      },
    },
    {
      src: IcBell,
      alt: '알림',
      onClick: () => {
        console.log('알림 아이콘 클릭됨');
      },
    },
  ];

  return (
    <>
      <Header icons={icons} />
      <MainBanner />
      <Navigation />
    </>
  );
};

export default HomePage;
