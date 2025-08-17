import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import IcApproval from '@icon/ic-approval.svg';
import IcUnapproval from '@icon/ic-unapproval.svg';
import { user } from '@widget/my/feature/mock.ts';

const Profile = () => {
  const [isApproved, setIsApproved] = useState(false);
  const navigate = useNavigate();

  const {
    profile_image_url,
    nickname,
    links,
    reservation_count,
    following_count,
    moodboard_count,
  } = user;

  return (
    <ProfileContainer>
      <ProfileInfoContainer>
        <ProfileInfoSection
          isApproved={isApproved}
          onClick={() => {
            if (!isApproved) {
              navigate('/my/settings');
            }
          }}
        >
          <ProfileImageSection>
            <ProfileImage src={profile_image_url} alt={nickname} />
          </ProfileImageSection>
          <InfoSection>
            <Nickname>{nickname}</Nickname>
            <Email>{links}</Email>
          </InfoSection>
        </ProfileInfoSection>
        {isApproved && <ExpertProfileDetail>{`내 프로필`}</ExpertProfileDetail>}
      </ProfileInfoContainer>
      <ActivityAccessSection>
        <ActivityItem>
          <ActivityTitle>{`예약 내역`}</ActivityTitle>
          <ActivityCount>{reservation_count}</ActivityCount>
        </ActivityItem>
        <ActivityDivider />
        <ActivityItem>
          <ActivityTitle>{`팔로우`}</ActivityTitle>
          <ActivityCount>{following_count}</ActivityCount>
        </ActivityItem>
        <ActivityDivider />
        <ActivityItem>
          <ActivityTitle>{`내 무드보드`}</ActivityTitle>
          <ActivityCount>{moodboard_count}</ActivityCount>
        </ActivityItem>
      </ActivityAccessSection>
      <ExpertApprovalSection
        onClick={() => {
          if (!isApproved) setIsApproved(true);
        }}
      >
        <img src={isApproved ? IcApproval : IcUnapproval} alt={isApproved ? '승인' : '미승인'} />
        <ApprovalLabel>{isApproved ? '작가승인 완료' : '작가승인 하기'}</ApprovalLabel>
      </ExpertApprovalSection>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfileInfoSection = styled.div<{ isApproved: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ isApproved }) => (isApproved ? 'fit-content' : '100%')};
  cursor: ${({ isApproved }) => (isApproved ? 'default' : 'pointer')};
  gap: 12px;
`;

const ProfileImageSection = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 24px;
  border: 4px solid ${({ theme }) => theme.colors.lightMode.icon.iconW};
  box-shadow: 0 8px 24px 0 #0000001a;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.div`
  font: ${({ theme }) => theme.fonts.title3};
`;

const Email = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
`;

const ExpertProfileDetail = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  width: fit-content;
  height: 40px;
  font: ${({ theme }) => theme.fonts.labelM};
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  padding: 12px;

  &:active {
    background-color: #1d1d1d0d;
  }
`;

const ActivityAccessSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const ActivityItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  padding: 0 8px;
  gap: 4px;
`;

const ActivityTitle = styled.div`
  font: ${({ theme }) => theme.fonts.labelS};
  color: #6f6f6f;
`;

const ActivityCount = styled.div`
  font: ${({ theme }) => theme.fonts.title3};
`;

const ActivityDivider = styled.div`
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider2};
`;

const ExpertApprovalSection = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
  border-radius: 8px;
  cursor: pointer;
  padding: 18px 16px;
  gap: 4px;
`;

const ApprovalLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelMB};
  font-size: 16px;
`;
