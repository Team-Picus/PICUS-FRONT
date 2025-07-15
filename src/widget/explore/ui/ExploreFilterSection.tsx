import { ExploreFilterList, ExploreSortingDropdown } from '@widget/explore/ui/index.ts';

const ExploreFilterSection = () => {
  return (
    <div>
      <ExploreFilterList />
      <ExploreSortingDropdown />
    </div>
  );
};

export default ExploreFilterSection;
