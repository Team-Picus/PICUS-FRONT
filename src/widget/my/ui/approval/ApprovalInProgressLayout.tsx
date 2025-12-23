import { InlineButton } from '@shared/components';
import { type StatusConfig } from '@widget/my/types/approval/approvalStatus.ts';
import styled from '@emotion/styled';

interface Props {
  status: StatusConfig;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
}

export const ApprovalInProgressLayout = ({ status, onPrimaryClick, onSecondaryClick }: Props) => {
  return (
    <ApprovalInProgressContainer>
      <ApprovalStatusContent>
        {status.icon && <Icon src={status.icon} alt={status.iconAlt} />}
        <StatusTextContainer>
          <StatusTitle>{status.title}</StatusTitle>
          <HelperText>{status.description}</HelperText>
        </StatusTextContainer>
        <Buttons>
          <InlineButton
            variant="primary"
            size="L"
            text={status.primary.label}
            onClick={onPrimaryClick}
          />
          {status.secondary && (
            <InlineButton
              variant="text"
              size="M"
              text={status.secondary.label}
              textColor="#B2B2B2"
              onClick={onSecondaryClick}
            />
          )}
        </Buttons>
      </ApprovalStatusContent>
    </ApprovalInProgressContainer>
  );
};

const ApprovalInProgressContainer = styled.div`
  margin: 0 auto;
  padding: 120px 24px;
`;

const ApprovalStatusContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  gap: 40px;
`;

const Icon = styled.img`
  width: fit-content;
  height: 56px;
`;

const StatusTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StatusTitle = styled.div`
  font: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const HelperText = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
