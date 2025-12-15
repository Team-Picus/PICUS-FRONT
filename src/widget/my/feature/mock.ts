import ImgProfileEx from '@image/img-profile-ex.png';
import type { ApprovalRequestDTO } from '@widget/my/types/approvalForm.ts';

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
    { skill_type: 'EDIT', content: 'Adobe Photoshop' },
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
