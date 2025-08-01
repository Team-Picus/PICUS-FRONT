import { ExploreFilterList, ExploreSortingDropdown } from '@widget/explore/ui';
import styled from '@emotion/styled';

const ExploreFilterSection = () => {
  return (
    <ExploreFilterSectionContainer>
      <ExploreFilterList />
      <ExploreSortingDropdown />
    </ExploreFilterSectionContainer>
  );
};

export default ExploreFilterSection;

const ExploreFilterSectionContainer = styled.div``;
