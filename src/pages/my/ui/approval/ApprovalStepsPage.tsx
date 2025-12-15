import styled from '@emotion/styled';
import { useApprovalFlow } from '@widget/my/feature/useApprovalFlow.ts';
import { approvalRequestMock } from '@widget/my/feature/mock.ts';
import Header from '@shared/components/Header.tsx';
import { ProgressBar, ProfileForm, OrganizationForm, PortfolioForm } from '@widget/my/ui/approval';
import { BottomTap } from '@shared/components';

const ApprovalStepsPage = () => {
  const { step, ghost, secondary, go } = useApprovalFlow(approvalRequestMock, (form) =>
    console.log('submit: ', form),
  );
  const ghostProps = ghost
    ? ({ showGhost: true, ghostText: ghost.label, onGhostClick: () => go(ghost.action) } as const)
    : ({ showGhost: false } as const);

  return (
    <>
      <Header isBack title="작가승인" />
      <ApprovalStepsPageContainer>
        <ContentContaner>
          <ProgressBar current={step} />
          <Intro>
            {step === 0 ? '프로필 작성' : step === 1 ? '소속 작성' : '포트폴리오 공유'}
            <Caption>
              {step === 0
                ? `작가님의 프로필을 작성해주세요`
                : step === 1
                  ? '작가님이 소속한 스튜디오를 작성해주세요'
                  : '클라이언트와 신뢰를 가지고 만날 수 있는 중요한 자료로,\n온라인 매체 링크라면 모두 공유 가능해요'}
            </Caption>
          </Intro>
          <FormContainer>
            {step === 0 && <ProfileForm />}
            {step === 1 && <OrganizationForm />}
            {step === 2 && <PortfolioForm />}
          </FormContainer>
        </ContentContaner>
        <BottomTap
          {...ghostProps}
          secondaryText={step === 2 ? '승인 요청하기' : '다음'}
          onSecondaryClick={() => go(secondary.action)}
        />
      </ApprovalStepsPageContainer>
    </>
  );
};

export default ApprovalStepsPage;

const ApprovalStepsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
`;

const ContentContaner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100dvh - 112px);
  gap: 24px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  padding: 0 16px;
  gap: 12px;
`;

const Caption = styled.div`
  white-space: pre-wrap;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  gap: 80px;
`;
