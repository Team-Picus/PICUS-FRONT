import styled from '@emotion/styled';
import { useState } from 'react';
import Navigation from '@shared/components/Navigation.tsx';
import Header from '@shared/components/Header.tsx';
import ProfileSummary from '@widget/my/ui/ProfileSummary.tsx';
import Menu from '@widget/my/ui/Menu.tsx';
import type { HeaderIcon } from '@shared/types/header.ts';
import type { MenuItemProps } from '@widget/my/types/menu.ts';
import IcSet from '@icon/ic-set.svg';
import { DropDownMenu } from '@shared/components';

const MyPage = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleSettingClick = () => {
    setIsDropDownVisible((prev) => !prev);
  };

  const handleDropDownClose = () => {
    setIsDropDownVisible(false);
  };

  const handleWithdrawClick = () => {
    // TODO: 탈퇴 로직 구현
    console.log('회원탈퇴 클릭');
    setIsDropDownVisible(false);
  };

  const icons: HeaderIcon[] = [
    {
      src: IcSet,
      alt: '설정',
      onClick: handleSettingClick,
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
      <HeaderWrapper>
        <Header title="MY" icons={icons} />
        <DropDownMenu
          isVisible={isDropDownVisible}
          onClose={handleDropDownClose}
          title="MY 계정"
          items={[
            {
              label: '회원탈퇴',
              onClick: handleWithdrawClick,
              color: '000000',
            },
          ]}
        />
      </HeaderWrapper>
      <MyPageWrapper>
        <ProfileSummary />
        <MenuSectionWrapper style={{ border: 'none' }}>
          <Menu title="활동" menuList={activityMenu} />
        </MenuSectionWrapper>
        <MenuSectionWrapper>
          <Menu title="고객지원" menuList={supportMenu} />
        </MenuSectionWrapper>
        <MenuSectionWrapper>
          <Menu title="로그인" menuList={loginMenu} />
        </MenuSectionWrapper>
      </MyPageWrapper>
      <Navigation whiteBackgroundColor={true} />
    </>
  );
};

export default MyPage;

const HeaderWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px 16px 80px 16px;
  gap: 16px;
`;

const MenuSectionWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
`;
