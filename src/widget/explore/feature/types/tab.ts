export const exploreTabItems = [
  {
    id: 'all',
    label: '전체',
  },
  {
    id: 'fashion',
    label: '패션',
  },
  {
    id: 'beauty',
    label: '뷰티',
  },
  {
    id: 'event',
    label: '행사',
  },
  {
    id: 'wedding',
    label: '웨딩',
  },
  {
    id: 'snap',
    label: '스냅',
  },
] as const;

export type ExploreTabCategory = (typeof exploreTabItems)[number]['id'];
