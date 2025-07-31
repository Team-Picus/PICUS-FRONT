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

export const exploreFilter = {
  all: '전체',
  region: '지역',
  space: '공간',
  mood: '분위기',
  type: '유형',
} as const;

export type ExploreFilter = keyof typeof exploreFilter;

export const exploreFilterRecord: Record<ExploreFilter, string> = {
  all: '전체',
  region: '지역',
  space: '공간',
  mood: '분위기',
  type: '유형',
};

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
