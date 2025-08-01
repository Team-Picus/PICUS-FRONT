import ExImg from '@image/img-mainbanner-ex.png';
import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import IcMail from '@icon/ic-mail.svg';
import IcCalendar from '@icon/ic-calendar.svg';
import IcHourGlass from '@icon/ic-hourglass.svg';

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

export interface NotificationIcon {
  src: string;
  alt: string;
}

export interface NotificationProps {
  icon: NotificationIcon;
  title: string;
  content: string;
  createdAt: string;
}

export const notification: NotificationProps[] = [
  {
    icon: { src: IcMail, alt: '의뢰' },
    title: '{유저이름}님에게 새로운 의뢰서가 도착했어요.',
    content:
      '당신의 작업에 관심 있는 클라이언트가 기다리고 있어요. 내용을 확인하고 수락 여부를 정해주세요.',
    createdAt: '2025-07-30T18:40:00+09:00',
  },
  {
    icon: { src: IcCalendar, alt: '예약' },
    title: '{유저이름}님과의 예약이 확정되었어요.',
    content: '클라이언트가 결제를 완료했어요.\n' + '일정과 촬영 준비를 차분히 시작해보세요.',
    createdAt: '2025-07-30T18:40:00+09:00',
  },
  {
    icon: { src: IcCalendar, alt: '예약' },
    title: '{유저이름}님과의 예약이 취소되었어요.',
    content:
      '클라이언트의 사정으로 촬영이 진행되지 않게 되었어요. 취소 사유는 예약 내역에서 확인하실 수 있어요.',
    createdAt: '2025-07-30T18:40:00+09:00',
  },
  {
    icon: { src: IcHourGlass, alt: '일정' },
    title: '{유저이름}님과의 촬영이 다가오고 있어요.',
    content:
      '장소와 시간을 다시 한 번 확인해주세요.\n' + '준비하신 감도가 아름답게 전달되길 바랍니다.',
    createdAt: '2025-08-01T12:10:00+09:00',
  },
];
