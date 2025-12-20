export type SkillType = 'CAMERA' | 'LIGHT' | 'EDIT';

export type ActivityArea = '성남시 수정구' | '서울시 송파구';

// dto (상세 정보 조회 응답)
export interface ExpertDetailInfoResDTO {
  activity_career: string; // 활동경력(n년)
  projects?: ProjectItem[]; // 활동내역
  skills?: SkillItem[]; // 보유 기술
  activity_area: ActivityArea[]; // 활동 지역
  studio?: StudioInfo; // 소속 스튜디오
}

export interface ProjectItem {
  projectNo: string; // 프로젝트 인덱스
  project_name: string; // 프로젝트 명
  start_date: string; // LocalDateTime (ISO string)
  end_date: string; // LocalDateTime (ISO string)
}

export interface SkillItem {
  skillNo: string; // 기술 인덱스
  skill_type: SkillType; // CAMERA/LIGHT/EDIT
  content: string; // 기술 내용
}

export interface StudioInfo {
  studioNo: string; // 스튜디오 인덱스
  studio_name: string; // 스튜디오명
  employees_count: number; // 직원 수
  business_hours: string; // 영업 시간
  address: string; // 주소
}

export interface ExpertBasicInfoResponseDTO {
  expert_no?: string; // Required 공란 → optional 처리
  activity_duration: string; // 활동기간
  activity_count: number; // 활동 수
  last_activity_at: string; // LocalDateTime -> ISO string
  intro: string; // 한줄 소개
  background_image_url?: string; // Required 공란 → optional
  nickname: string; // 닉네임
  profile_image_url?: string; // Required 공란 → optional
  links?: string[]; // Required 공란 → optional
}
