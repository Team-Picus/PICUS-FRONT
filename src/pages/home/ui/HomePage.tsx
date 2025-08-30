import { useNavigate } from 'react-router';
import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import IcSearch from '@icon/ic-search.svg';
import IcBell from '@icon/ic-bell.svg';
import { DiscoveryBanner, HomeFooter, MainBanner, PictureWorkCategory } from '@widget/home/ui';

const HomePage = () => {
  const navigate = useNavigate();

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
        navigate('/notification');
      },
    },
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Header icons={icons} />
      <MainBanner />
      <DiscoveryBanner />
      <PictureWorkCategory />
      <HomeFooter />
      <Navigation />
    </div>
  );
};

export default HomePage;
