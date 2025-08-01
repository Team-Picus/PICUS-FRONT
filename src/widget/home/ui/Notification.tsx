import styled from '@emotion/styled';
import type { NotificationProps } from '@widget/home/feature/mock.ts';
import { useTimeAgo } from '@widget/home/feature/useTimeAgo.ts';

const Notification = ({ icon, title, content, createdAt }: NotificationProps) => {
  const timeAgo = useTimeAgo(createdAt);

  return (
    <NotificationContainer>
      <Icon src={icon.src} alt={icon.alt} />
      <NotificationContentSection>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationContent>{content}</NotificationContent>
        <NotificationTimesAgo>{timeAgo}</NotificationTimesAgo>
      </NotificationContentSection>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 16px;
  gap: 12px;
`;

const Icon = styled.img`
  align-self: start;
`;

const NotificationContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NotificationTitle = styled.div`
  font: ${({ theme }) => theme.fonts.labelMB};
  line-height: 20px;
`;

const NotificationContent = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  word-break: keep-all;
`;

const NotificationTimesAgo = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  font-size: 13px;
  color: #878787;
  line-height: 20px;
`;

export default Notification;
