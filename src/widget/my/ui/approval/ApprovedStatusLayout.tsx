import styled from '@emotion/styled';
import { InlineButton } from '@shared/components';
import { type StatusConfig } from '@widget/my/types/approval/approvalStatus.ts';
import HeroImage from '@image/img-approved-hero.png';

interface Props {
  status: StatusConfig;
  onPrimaryClick: () => void;
}

export const ApprovedStatusLayout = ({ status, onPrimaryClick }: Props) => {
  return (
    <ApprovedStatusLayoutContainer>
      <BgImage src={HeroImage} alt="작가 승인 완료" />
      <ContentContainer>
        <Tagline>
          Show{'\n'}Your{'\n'}sight
        </Tagline>
        <StatusTextContainer>
          <StatusTitle>{status.title}</StatusTitle>
          <HelperText>{status.description}</HelperText>
        </StatusTextContainer>
        <ButtonContainer>
          <InlineButton
            variant="primary"
            size="L"
            text={status.primary.label}
            onClick={onPrimaryClick}
          />
        </ButtonContainer>
      </ContentContainer>
    </ApprovedStatusLayoutContainer>
  );
};

const ApprovedStatusLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: absolute;
  overflow: hidden;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 56px 0 195px;
  gap: 56px;
`;

const Tagline = styled.div`
  font-family: 'Pretendard', 'system-ui';
  font-weight: 600;
  font-size: 100px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  white-space: pre-line;
  transform: translateX(-24px);
`;

const StatusTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  margin-left: 32px;
  gap: 16px;
`;

const StatusTitle = styled.div`
  ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1w};
`;

const HelperText = styled.div`
  ${({ theme }) => theme.fonts.body4};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.lightMode.text.text1w};
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 361px;
`;
