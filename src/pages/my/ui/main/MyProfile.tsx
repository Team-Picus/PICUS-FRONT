import styled from '@emotion/styled';
import { useState } from 'react';
import { DropDownMenu, Header } from '@shared/components';
import type { HeaderIcon } from '@shared/types/header.ts';
import ProfileOverview from '@widget/my/ui/main/profile/ProfileOverview.tsx';
import CategoryPage from '@widget/my/ui/main/profile/CategoryPage.tsx';
import IcMoreVertical from '@icon/ic-more-vertical.svg';

const MyProfile = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleSettingClick = () => {
    setIsDropDownVisible((prev) => !prev);
  };

  const handleDropDownClose = () => {
    setIsDropDownVisible(false);
  };

  const icons: HeaderIcon[] = [
    {
      src: IcMoreVertical,
      alt: '더보기',
      onClick: handleSettingClick,
    },
  ];

  return (
    <>
      <HeaderContainer>
        <Header isBack title="내 프로필" icons={icons} />
        <DropDownMenu
          isVisible={isDropDownVisible}
          onClose={handleDropDownClose}
          title="내 프로필"
          items={[
            {
              label: '게시글 추가',
              onClick: () => {},
              color: '000000',
            },
            {
              label: '프로필 편집',
              onClick: () => {},
              color: '000000',
            },
          ]}
        />
      </HeaderContainer>
      <ProfileOverview />
      <CategoryPage />
    </>
  );
};

export default MyProfile;

const HeaderContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;
