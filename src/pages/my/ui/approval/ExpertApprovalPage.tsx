import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { ApprovalOverview } from '@widget/my/ui/approval';
import { InlineButton } from '@shared/components';
import Header from '@shared/components/Header.tsx';

const ExpertApprovalPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header isBack title="작가승인" />
      <ExpertApprovalContainer>
        <ApprovalOverview />
        <ButtonContainer>
          <InlineButton
            variant="primary"
            size="L"
            text="작가 승인 받기"
            onClick={() => navigate('steps')}
          />
        </ButtonContainer>
      </ExpertApprovalContainer>
    </>
  );
};

export default ExpertApprovalPage;

const ExpertApprovalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 40px 0 80px;
  gap: 40px;
`;

const ButtonContainer = styled.div`
  width: 361px;
`;
