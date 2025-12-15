import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import type { ApprovalRequestDTO } from '@widget/my/types/approvalForm.ts';
import { FLOW, type Step, type StepAction } from '@widget/my/types/approvalFlow.ts';

export const useApprovalFlow = (
  initialForm: ApprovalRequestDTO,
  onSubmitted?: (form: ApprovalRequestDTO) => void,
) => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [form, setForm] = useState<ApprovalRequestDTO>(initialForm);
  const navigate = useNavigate();

  const current = FLOW[step];

  const go = useCallback(
    (action: StepAction) => {
      if (action === 'submit') {
        // TODO: API 연동
        onSubmitted?.(form);
        navigate('/my/expert-approval/status/submitted');
      }
      setStep((s) => {
        const target = FLOW[s][action as Exclude<StepAction, 'submit'>];
        return (target ?? s) as Step;
      });
    },
    [form, navigate, onSubmitted],
  );

  const ghost = current.buttons.ghost;
  const secondary = current.buttons.secondary;

  return {
    step,
    form,
    setForm,
    ghost,
    secondary,
    go,
  };
};
