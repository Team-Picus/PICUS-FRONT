import styled from '@emotion/styled';
import { BottomTap } from '@shared/components';
import { useProfileEditTabs } from '@widget/my/feature/useProfileEditTabs.ts';
import Header from '@shared/components/Header.tsx';
import Tabs from '@shared/components/Tabs.tsx';
import ProfileEdit from '@widget/my/ui/main/profileEdit/ProfileEdit.tsx';
import GalleryEdit from '@widget/my/ui/main/profileEdit/GalleryEdit.tsx';
import ExpertInfoEdit from '@widget/my/ui/main/profileEdit/ExpertInfoEdit.tsx';
import PriceCompositionEdit from '@widget/my/ui/main/profileEdit/PriceCompositionEdit.tsx';

const ProfileEditPage = () => {
  const { items, activeId, onChange, indicatorStyle, setTabRef } = useProfileEditTabs();

  return (
    <ProfileEditPageContainer>
      <Header isBack title="프로필 편집" inlineButton={{ show: true, text: '미리보기' }} />

      <ContentContainer $activeId={activeId}>
        <Tabs
          items={items}
          activeId={activeId}
          onChange={onChange}
          indicatorStyle={indicatorStyle}
          setTabRef={setTabRef}
          borderColor={activeId === 'pricing' ? '#1d1d1d' : '#eeeeee'}
        />
        {activeId === 'profile' && <ProfileEdit />}
        {activeId === 'gallery' && <GalleryEdit />}
        {activeId === 'info' && <ExpertInfoEdit />}
        {activeId === 'pricing' && <PriceCompositionEdit />}
      </ContentContainer>
      <BottomTap showGhost ghostText="취소하기" secondaryText="저장하기" />
    </ProfileEditPageContainer>
  );
};

export default ProfileEditPage;

const ProfileEditPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
`;

const ContentContainer = styled.div<{ $activeId: string }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  padding-bottom: 80px;
  gap: ${({ $activeId }) => ($activeId === 'pricing' ? 'none' : '24px')};
`;
