import styled from '@emotion/styled';
import IcDocument from '@icon/ic-document.tsx';
import IcClock from '@icon/ic-clock.svg';
import IcProgress from '@icon/ic-progress.svg';

const ApprovalOverview = () => {
  return (
    <ApprovalOverviewContainer>
      <ApprovalIntroContainer>
        <ApprovalIntro>{`이제, 당신의 시선을\n세상과 나눌 차례입니다.`}</ApprovalIntro>
        <ApprovalCaption>{`이 플랫폼은 작가의 감도와 시선을 존중합니다.\n당신만의 이야기를 가진 분들을 기다리고 있어요.`}</ApprovalCaption>
      </ApprovalIntroContainer>
      <ApprovalGuideContainer>
        <SectionContainer>
          <SectionLabel>
            <img src={IcClock} alt="시간" />
            {`승인 소요 시간`}
          </SectionLabel>
          <HelperText>{`보통 영업일 기준 1~2일 이내에 검토됩니다.`}</HelperText>
        </SectionContainer>
        <SectionContainer>
          <SectionLabel>
            <DocumentIcon />
            {`필요 서류`}
          </SectionLabel>
          <div>
            <HelperText>{`작업을 확인할 수 있는 포트폴리오 링크를 첨부해주세요.`}</HelperText>
            <Example>{`ex) 인스타그램, 비핸스, 노트폴리오, 개인 웹사이트 등`}</Example>
          </div>
        </SectionContainer>
        <SectionContainer>
          <SectionLabel>
            <img src={IcProgress} alt="절차" />
            {`진행 절차`}
          </SectionLabel>
          <StepsList>
            <li>{`프로필 작성`}</li>
            <li>{`스튜디오 정보 입력 (선택)`}</li>
            <li>{`포트폴리오 링크 첨부`}</li>
            <li>{`승인 요청 완료`}</li>
          </StepsList>
        </SectionContainer>
      </ApprovalGuideContainer>
    </ApprovalOverviewContainer>
  );
};

export default ApprovalOverview;

const ApprovalOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;
  gap: 120px;
`;

const ApprovalIntroContainer = styled.div`
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 12px;
`;

const ApprovalIntro = styled.div`
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ApprovalCaption = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
`;

const ApprovalGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 8px;
`;

const SectionLabel = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelMB};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  gap: 8px;
`;

const DocumentIcon = styled(IcDocument)`
  width: 24px;
  height: 24px;
  color: #80ca14;
`;

const HelperText = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  line-height: 150%;
  padding: 0 12px;
`;

const Example = styled.div`
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  padding: 0 12px;
`;

const StepsList = styled.ol`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  margin: 0;
  padding: 0 28px;
  gap: 4px;
`;
