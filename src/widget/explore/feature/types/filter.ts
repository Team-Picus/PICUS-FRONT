export const filterItems = [
  {
    id: 'region',
    label: '지역',
  },
  {
    id: 'space',
    label: '공간',
  },
  {
    id: 'mood',
    label: '분위기',
  },
];

export type ExploreFilter = 'all' | 'region' | 'space' | 'mood' | 'type';

export const sortOptions = [
  {
    id: 'recent',
    label: '최근 업로드순',
  },
  {
    id: 'popular',
    label: '거래량순',
  },
  {
    id: 'views',
    label: '조회순',
  },
  {
    id: 'comments',
    label: '댓글순',
  },
] as const;
