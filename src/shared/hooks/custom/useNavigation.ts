import { useLocation } from 'react-router';
import { navigationIndex } from '@shared/types/navigationIndex.ts';

function getActiveIndex(pathname: string) {
  switch (pathname) {
    case '/':
      return navigationIndex.HOME;
    case '/explore':
      return navigationIndex.EXPLORE;
    case '/chat':
      return navigationIndex.CHAT;
    case '/my':
      return navigationIndex.MY;
    default:
      return navigationIndex.HOME;
  }
}

export const useNavigation = () => {
  const location = useLocation();
  const activeIndex = getActiveIndex(location.pathname);

  return { activeIndex };
};
