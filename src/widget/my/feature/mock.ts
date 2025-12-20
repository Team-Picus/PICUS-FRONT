import ImgProfileEx from '@image/img-profile-ex.png';
import ImgMyProfileCoverEx from '@image/img-my-profile-cover-ex.png';
import type { ApprovalRequestDTO } from '@widget/my/types/approvalForm.ts';
import type { ExpertBasicInfoResponseDTO, ExpertDetailInfoResDTO } from '../types/expertInfo';
import type { ThemePackage } from '@shared/components/PackageItem.tsx';

interface User {
  name: string;
  email: string;
  phone_number?: string;
  nickname: string;
  profile_image_url?: string;
  links?: string[];
  reservation_count: number;
  following_count: number;
  moodboard_count: number;
}

export const user: User = {
  name: '홍길동',
  email: 'ahgsoooooo8@naver.com',
  phone_number: '+82 10-1234-5678',
  nickname: 'usee_pic',
  profile_image_url: ImgProfileEx,
  links: ['calendar@gmail.com'],
  reservation_count: 0,
  following_count: 0,
  moodboard_count: 0,
};

export const approvalRequestMock: ApprovalRequestDTO = {
  activity_duration: '3개월',
  projects: [
    {
      project_name: '개인스튜디오운영',
      start_date: '2025-04-01T10:00:00',
      end_date: '2025-05-02T18:00:00',
    },
    {
      project_name: '무신사 룩북',
      start_date: '2024-10-10T09:30:00',
      end_date: '2024-12-12T19:00:00',
    },
  ],
  activity_area: ['서울시 송파구', '성남시 수정구'],
  skills: [
    { skill_type: 'CAMERA', content: '카메라 기종 1' },
    { skill_type: 'CAMERA', content: '카메라 기종 2' },
    { skill_type: 'LIGHT', content: '조명 기종 1' },
    { skill_type: 'LIGHT', content: '조명 기종 2' },
    { skill_type: 'LIGHT', content: '조명 기종 3' },
    { skill_type: 'EDIT', content: 'Adobe Photoshop' },
    { skill_type: 'EDIT', content: 'Adobe Lightroom' },
  ],
  studio: {
    studio_name: '스튜디오 시선',
    employees_count: 3,
    business_hours: '00:00-00:00 00:00-00:00 (Break Time)',
    address: '서울시 송파구 00동 00길 182-17',
  },
  portfolio_links: [
    'https://www.instagram.com/your_handle',
    'https://behance.net/your_portfolio',
    'https://yourdomain.com',
  ],
};

export const expertDetailInfoMock: ExpertDetailInfoResDTO = {
  activity_career: '3개월',

  projects: [
    {
      projectNo: 'PJT-001',
      project_name: '개인스튜디오운영',
      start_date: '2025-04-01T10:00:00',
      end_date: '2025-05-02T18:00:00',
    },
    {
      projectNo: 'PJT-002',
      project_name: '무신사 룩북',
      start_date: '2024-10-10T09:30:00',
      end_date: '2024-12-12T19:00:00',
    },
  ],

  skills: [
    {
      skillNo: 'SKL-001',
      skill_type: 'CAMERA',
      content: '카메라 기종 1',
    },
    {
      skillNo: 'SKL-002',
      skill_type: 'CAMERA',
      content: '카메라 기종 2',
    },
    {
      skillNo: 'SKL-003',
      skill_type: 'LIGHT',
      content: '조명 기종 1',
    },
    {
      skillNo: 'SKL-004',
      skill_type: 'LIGHT',
      content: '조명 기종 2',
    },
    {
      skillNo: 'SKL-005',
      skill_type: 'LIGHT',
      content: '조명 기종 3',
    },
    {
      skillNo: 'SKL-006',
      skill_type: 'EDIT',
      content: 'Adobe Photoshop',
    },
    {
      skillNo: 'SKL-007',
      skill_type: 'EDIT',
      content: 'Adobe Lightroom',
    },
  ],

  activity_area: ['서울시 송파구', '성남시 수정구'],

  studio: {
    studioNo: 'STD-001',
    studio_name: 'usee_pic',
    employees_count: 8,
    business_hours: '10:00 - 19:00 (월~금)',
    address: '서울시 송파구 00동 00길 182-17',
  },
};

export const expertBasicInfoMock: ExpertBasicInfoResponseDTO = {
  expert_no: 'EXP-001',
  activity_duration: '3개월',
  activity_count: 32,
  last_activity_at: '2025-09-11T18:30:00',
  intro:
    '저는 빛과 순간이 만나 만들어내는 이야기를 기록합니다.\n사진을 통해 세상의 본질과 사람의 내면을 포착하고자 합니다.',
  background_image_url: ImgMyProfileCoverEx,
  nickname: 'usee_pic',
  profile_image_url: ImgProfileEx,
  links: ['instagram.com/username', 'behance.net/username', 'www.myphotowork.com'],
};

export const weddingPackages: ThemePackage[] = [
  {
    id: 'w-pkg-a',
    name: '패키지 A',
    price: 300000,
    contents: [
      { label: '모먼트 패키지', value: '1세트' },
      { label: '분할 컷', value: '2장' },
    ],
    notice: '장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본은 1시간입니다.',
  },
  {
    id: 'w-pkg-b',
    name: '패키지 B',
    price: 450000,
    meta: '2장',
    contents: [
      { label: '모먼트 패키지', value: '1세트' },
      { label: '분할 컷', value: '2장' },
    ],
    notice: '장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본은 1시간입니다.',
  },
];

export const friendshipPackages: ThemePackage[] = [
  {
    id: 'f-pkg-a',
    name: '패키지 A',
    price: 200000,
    contents: [
      { label: '모먼트 패키지', value: '1세트' },
      { label: '분할 컷', value: '2장' },
    ],
    notice: '장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본은 1시간입니다.',
  },
  {
    id: 'f-pkg-b',
    name: '패키지 B',
    price: 320000,
    contents: [
      { label: '모먼트 패키지', value: '1세트' },
      { label: '분할 컷', value: '2장' },
    ],
    notice: '장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본은 1시간입니다.',
  },
  {
    id: 'f-pkg-c',
    name: '패키지 C',
    price: 1700000,
    contents: [
      { label: '모먼트 패키지', value: '1세트' },
      { label: '분할 컷', value: '2장' },
    ],
    notice: '장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본은 1시간입니다.',
  },
];
