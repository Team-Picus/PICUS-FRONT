import { useParams, useNavigate } from 'react-router';
import { type State, ApprovalStatus } from '@widget/my/types/approvalStatus.ts';
import { ApprovedStatusLayout } from '@widget/my/ui/approval/ApprovedStatusLayout.tsx';
import { ApprovalInProgressLayout } from '@widget/my/ui/approval/ApprovalInProgressLayout.tsx';
import Header from '@shared/components/Header.tsx';

const ApprovalStatusPage = () => {
  const { state } = useParams<{ state: State }>();
  const navigate = useNavigate();
  const status = ApprovalStatus[(state ?? 'submitted') as State];

  const handlePrimaryClick = () => {
    status.primary.onClick?.();
    if (status.primary.to) navigate(status.primary.to);
  };

  const handleSecondaryClick = () => {
    if (!status.secondary) return;
    status.secondary.onClick?.();
    if (status.secondary.to) navigate(status.secondary.to);
  };

  return (
    <>
      <Header isBack title="작가승인" />
      {state === 'approved' ? (
        <ApprovedStatusLayout status={status} onPrimaryClick={handlePrimaryClick} />
      ) : (
        <ApprovalInProgressLayout
          status={status}
          onPrimaryClick={handlePrimaryClick}
          onSecondaryClick={handleSecondaryClick}
        />
      )}
    </>
  );
};

export default ApprovalStatusPage;
