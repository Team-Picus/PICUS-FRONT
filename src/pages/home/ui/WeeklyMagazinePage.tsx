import styled from '@emotion/styled';
import Header from '@shared/components/Header.tsx';
import MagazineOverview from '@widget/home/ui/MagazineOverview.tsx';
import PictureWorkList from '@widget/home/ui/PictureWorkList.tsx';

const WeeklyMagazinePage = () => {
  return (
    <>
      <Header back title="시선"></Header>
      <WeeklyMagazineContainer>
        <MagazineOverview />
        <PictureWorkList />
      </WeeklyMagazineContainer>
    </>
  );
};

export default WeeklyMagazinePage;

const WeeklyMagazineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  gap: 40px;
`;
