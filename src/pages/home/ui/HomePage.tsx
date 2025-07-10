import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import IcSearch from '@icon/ic-search.svg';
import IcBell from '@icon/ic-bell.svg';
import { DiscoveryBanner, HomeFooter, MainBanner, PictureWorkList } from '@widget/home/ui';

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
    <div style={{ backgroundColor: 'white' }}>
      <Header icons={icons} />
      <MainBanner />
      <DiscoveryBanner />
      <PictureWorkList />
      <HomeFooter />
      <Navigation />
    </div>
  );
};

export default HomePage;
