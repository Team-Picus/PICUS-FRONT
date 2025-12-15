import IcCircleCheckFilled from '@icon/ic-circle-check-filled.svg';
import IcSymbolBrand from '@icon/ic-symbol-brand.svg';

export type State = 'submitted' | 'review' | 'approved';

export interface StatusConfig {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  primary: { label: string; to: string; onClick?: () => void };
  secondary?: { label: string; to: string; onClick?: () => void };
}

export const ApprovalStatus: Record<State, StatusConfig> = {
  submitted: {
    icon: IcCircleCheckFilled,
    iconAlt: '요청 완료',
    title: '승인 요청 완료',
    description:
      '보내주신 자료를 통해 작가 여부를 확인하고 승인을 도와드릴게요. 승인 과정은 마이페이지에서 확인 가능해요',
    primary: {
      label: '알림 받기',
      to: '/my/expert-approval/status/review',
      onClick: () => {
        console.log('알림 받기 설정');
      },
    },
    secondary: { label: '다음에 하기', to: '/my/expert-approval/status/review' },
  },
  review: {
    icon: IcSymbolBrand,
    iconAlt: '검토 중',
    title: '승인 요청 검토 중',
    description:
      '보내주신 자료를 통해 작가 여부를 확인하고 승인을 도와드릴게요. 정보가 잘못되었다면 취소 후 다시 신청해주세요',
    primary: { label: '작성 내용 확인', to: '/my/expert-approval/status/approved' },
    secondary: {
      label: '승인 완료 알림 받기',
      to: '/my/expert-approval/status/approved',
      onClick: () => {
        console.log('알림 받기 설정');
      },
    },
  },
  approved: {
    icon: IcCircleCheckFilled,
    iconAlt: '승인 완료',
    title: '작가승인 완료',
    description: 'PICUS 작가로서의 여정을 응원합니다\n당신의 시선을 기다릴 이들과 만나보세요',
    primary: { label: '작가프로필로 시작하기', to: '/my/expert/profile' },
  },
};
