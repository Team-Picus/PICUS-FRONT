import ExImg from '@image/img-mainbanner-ex.png';

export interface DiscoveryBannerCategory {
  id: number;
  name: string;
  imageUrl: string;
}

export const discoveryCategories: DiscoveryBannerCategory[] = [
  {
    id: 1,
    name: 'use_pic',
    imageUrl: ExImg,
  },
  {
    id: 2,
    name: 'kim_suyoung',
    imageUrl: ExImg,
  },
  {
    id: 3,
    name: 'yoru',
    imageUrl: ExImg,
  },
  {
    id: 4,
    name: 'dori',
    imageUrl: ExImg,
  },
  {
    id: 5,
    name: 'ain',
    imageUrl: ExImg,
  },
];
