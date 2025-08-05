import styled from '@emotion/styled';
import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import Profile from '@widget/my/ui/Profile.tsx';
import Menu from '@widget/my/ui/Menu.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import type { MenuItemProps } from '@widget/my/types/menu.ts';
import IcSet from '@icon/ic-set.svg';

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
  const activityMenu: MenuItemProps[] = [
    {
      label: '댓글',
      route: '/comments',
    },
  ];
  const supportMenu: MenuItemProps[] = [
    {
      label: '고객센터',
      route: '/customer_support',
    },
    {
      label: '약관 및 정책',
    },
  ];
  const loginMenu: MenuItemProps[] = [
    {
      label: '로그아웃',
    },
  ];
  return (
    <>
      <Header title="MY" icons={icons} />
      <MyPageContainer>
        <Profile />
        <MenuSectionContainer style={{ border: 'none' }}>
          <Menu title="활동" menuList={activityMenu} />
        </MenuSectionContainer>
        <MenuSectionContainer>
          <Menu title="고객지원" menuList={supportMenu} />
        </MenuSectionContainer>
        <MenuSectionContainer>
          <Menu title="로그인" menuList={loginMenu} />
        </MenuSectionContainer>
      </MyPageContainer>
      <Navigation whiteBackgroundColor={true} />
    </>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px 16px 80px 16px;
  gap: 16px;
`;

const MenuSectionContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
`;
