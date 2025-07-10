import ExImg from '@image/img-mainbanner-ex.png';
import ImgMainbannerEx from "@image/img-mainbanner-ex.png";

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

export const pictureWorkCategories = [
  '도희적인',
  '실험적인',
  '강렬한',
  '모던',
  '빈티지',
  '시네마틱',
  '차가운',
  '포근한',
  '몽환적인',
];

export interface PictureWork {
  id: number;
  name: string;
  workName: string;
  workType: string;
  imageUrl: string;
}

export const pictureWorkList: PictureWork[] = [
  {
    id: 1,
    name: 'use_pic',
    workName: 'use_pic',
    workType: '도희적인',
    imageUrl: ImgMainbannerEx,
  },
  {
    id: 2,
    name: 'kim_suyoung',
    workName: 'kim_suyoung',
    workType: '강렬한',
    imageUrl: ImgMainbannerEx,
  },
  {
    id: 3,
    name: 'yoru',
    workName: 'yoru',
    workType: '시네마틱',
    imageUrl: ImgMainbannerEx,
  },
  {
    id: 4,
    name: 'dori',
    workName: 'dori',
    workType: '실험적인',
    imageUrl: ImgMainbannerEx,
  },
  {
    id: 5,
    name: 'ain',
    workName: 'ain',
    workType: '모던',
    imageUrl: ImgMainbannerEx,
  },
  {
    id: 6,
    name: 'example',
    workName: 'example',
    workType: '빈티지',
    imageUrl: ImgMainbannerEx,
  },
  {
    id: 7,
    name: 'example2',
    workName: 'example2',
    workType: '차가운',
    imageUrl: ImgMainbannerEx,
  },
  {
    id: 8,
    name: 'example3',
    workName: 'example3',
    workType: '포근한',
    imageUrl: ImgMainbannerEx,
  },
];
