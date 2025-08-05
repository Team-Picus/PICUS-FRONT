import ImgProfileEx from '@image/img-profile-ex.png';

interface User {
  nickname: string;
  profile_image_url?: string;
  links?: string[];
  reservation_count: number;
  following_count: number;
  moodboard_count: number;
}

export const user: User = {
  nickname: 'usee_pic',
  profile_image_url: ImgProfileEx,
  links: ['calendar@gmail.com'],
  reservation_count: 0,
  following_count: 0,
  moodboard_count: 0,
};
