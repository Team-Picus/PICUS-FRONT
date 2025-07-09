import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import IcSet from '@icon/ic-set.svg';
import type { HeaderIcon } from '@shared/types/header.ts';

const MyPage = () => {
  const icons: HeaderIcon[] = [
    {
      src: IcSet,
      alt: '설정',
      onClick: () => {
        console.log('설정 아이콘 클릭됨');
      },
    },
  ];
  return (
    <>
      <Header title="MY" icons={icons} />
      <div>Mypage</div>
      <Navigation whiteBackgroundColor={true} />
    </>
  );
};

export default MyPage;
