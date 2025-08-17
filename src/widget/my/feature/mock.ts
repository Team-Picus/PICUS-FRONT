import ImgProfileEx from '@image/img-profile-ex.png';

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
  email: 'ahgs******8@naver.com',
  phone_number: '+82 10-12**-56**',
  nickname: 'usee_pic',
  profile_image_url: ImgProfileEx,
  links: ['calendar@gmail.com'],
  reservation_count: 0,
  following_count: 0,
  moodboard_count: 0,
};
