import styled from '@emotion/styled';
import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import IcSearch from '@icon/ic-search.svg';
import IcBell from '@icon/ic-bell.svg';

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
      <HomePageContainer>HomePage</HomePageContainer>
      <Navigation />
    </>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
