import { ExploreFilterList, ExploreSortingDropdown } from '@widget/explore/ui';

const ExploreFilterSection = () => {
  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <ExploreFilterList />
      <ExploreSortingDropdown />
    </div>
  );
};

export default ExploreFilterSection;
