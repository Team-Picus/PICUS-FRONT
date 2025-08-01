import styled from '@emotion/styled';
import Header from '@shared/components/Header.tsx';
import Notification from '@widget/home/ui/Notification.tsx';
import { notification } from '@widget/home/feature/mock.ts';
import { sortByCreatedAtDesc } from '@widget/home/feature/date.ts';

const NotificationPage = () => {
  const sorted = sortByCreatedAtDesc(notification);

  return (
    <>
      <Header back title="알림"></Header>
      <NotificationListContainer>
        {sorted.map(({ icon, title, content, createdAt }, index) => (
          <Notification
            key={index}
            icon={icon}
            title={title}
            content={content}
            createdAt={createdAt}
          />
        ))}
      </NotificationListContainer>
    </>
  );
};

export default NotificationPage;

const NotificationListContainer = styled.div`
  padding-bottom: 40px;
`;
