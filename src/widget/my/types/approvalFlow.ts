export type Step = 0 | 1 | 2;
export type StepAction = 'prev' | 'skip' | 'next' | 'submit';

type GhostAction = Extract<StepAction, 'prev' | 'skip'>;
type SecondaryAction = Extract<StepAction, 'next' | 'submit'>;

type StepConfig = {
  buttons: {
    ghost?: { label: string; action: GhostAction };
    secondary: { label: string; action: SecondaryAction };
  };

  next?: Step;
  prev?: Step;
  skip?: Step;
};

export const FLOW: Record<Step, StepConfig> = {
  0: {
    buttons: {
      secondary: { label: '다음', action: 'next' },
    },
    next: 1,
  },
  1: {
    buttons: {
      ghost: { label: '건너뛰기', action: 'skip' },
      secondary: { label: '다음', action: 'next' },
    },
    skip: 2,
    next: 2,
  },
  2: {
    buttons: {
      ghost: { label: '이전', action: 'prev' },
      secondary: { label: '승인 요청하기', action: 'submit' },
    },
    prev: 1,
  },
};
