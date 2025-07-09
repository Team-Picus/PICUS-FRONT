import styled from '@emotion/styled';
import Navigation from '@shared/components/Navigation.tsx';

const HomePage = () => {
  return (
    <>
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
