import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import IcSearch from '@icon/ic-search.svg';

const ExplorePage = () => {
  const icons: HeaderIcon[] = [
    {
      src: IcSearch,
      alt: '검색',
      onClick: () => {
        console.log('검색 아이콘 클릭됨');
      },
    },
  ];
  return (
    <>
      <Header title="탐색" icons={icons} />
      <div>ExplorePage</div>
      <Navigation />
    </>
  );
};

export default ExplorePage;
