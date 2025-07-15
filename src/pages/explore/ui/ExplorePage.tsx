import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import IcSearch from '@icon/ic-search.svg';
import { ExploreTabs } from '@widget/explore/ui';
import { ExploreFilterList } from "@widget/explore/ui/ExploreFilterList.tsx";

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
      <ExploreTabs />
      <ExploreFilterList />
      <Navigation whiteBackgroundColor={true} />
    </>
  );
};

export default ExplorePage;
