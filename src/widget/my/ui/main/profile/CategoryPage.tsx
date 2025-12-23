import styled from '@emotion/styled';
import { useMyProfileTabs } from '@widget/my/feature/useMyProfileTabs.ts';
import Tabs from '@shared/components/Tabs.tsx';
import Gallery from '@widget/my/ui/main/profile/Gallery.tsx';
import ExpertInfo from '@widget/my/ui/main/profile/ExpertInfo.tsx';
import PriceComposition from '@widget/my/ui/main/profile/PriceComposition.tsx';

const CategoryPage = () => {
  const { items, activeId, onChange, indicatorStyle, setTabRef } = useMyProfileTabs();

  return (
    <CategoryPageContainer>
      <Tabs
        items={items}
        activeId={activeId}
        onChange={onChange}
        indicatorStyle={indicatorStyle}
        setTabRef={setTabRef}
      />

      {activeId === 'gallery' && <Gallery />}
      {activeId === 'info' && <ExpertInfo />}
      {activeId === 'pricing' && <PriceComposition />}
    </CategoryPageContainer>
  );
};

export default CategoryPage;

const CategoryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  padding-bottom: 80px;
  gap: 40px;
`;
