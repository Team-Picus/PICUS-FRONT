export type SkillType = 'CAMERA' | 'LIGHT' | 'EDIT';

export type ActivityArea = string;

export interface ProjectDTO {
  project_name: string;
  start_date: string;
  end_date: string;
}

export interface SkillDTO {
  skill_type: SkillType;
  content: string;
}

export interface StudioDTO {
  studio_name: string;
  employees_count: number;
  business_hours: string;
  address: string;
}

export interface ApprovalRequestDTO {
  activity_duration: string;
  projects: ProjectDTO[];
  activity_area: ActivityArea[];
  skills: SkillDTO[];
  studio: StudioDTO;
  portfolio_links: string[];
}
