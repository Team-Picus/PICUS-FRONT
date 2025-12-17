import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import IcApproval from '@icon/ic-approval.svg';
import IcUnapproval from '@icon/ic-unapproval.svg';
import { user } from '@widget/my/feature/mock.ts';
import Stats from '@widget/my/ui/main/Stats.tsx';

const ProfileSummary = () => {
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
    <ProfileSummaryContainer>
      <ProfileInfoContainer>
        <ProfileSummaryButton isApproved={isApproved} onClick={() => navigate('/my/settings')}>
          <ProfileFrame>
            <ProfileImage src={profile_image_url} alt={nickname} />
          </ProfileFrame>
          <UserMeta>
            <Nickname>{nickname}</Nickname>
            <Email>{links}</Email>
          </UserMeta>
        </ProfileSummaryButton>
        {isApproved && <ExpertProfileButton>{`내 프로필`}</ExpertProfileButton>}
      </ProfileInfoContainer>
      <Stats
        stats={[
          { label: '예약 내역', value: reservation_count },
          { label: '팔로우', value: following_count },
          { label: '내 무드보드', value: moodboard_count },
        ]}
      />
      <ExpertApprovalCard
        onClick={() => {
          if (!isApproved) setIsApproved(true);
        }}
      >
        <img src={isApproved ? IcApproval : IcUnapproval} alt={isApproved ? '승인' : '미승인'} />
        <ApprovalLabel>{isApproved ? '작가승인 완료' : '작가승인 하기'}</ApprovalLabel>
      </ExpertApprovalCard>
    </ProfileSummaryContainer>
  );
};

export default ProfileSummary;

const ProfileSummaryContainer = styled.div`
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

const ProfileSummaryButton = styled.button<{ isApproved: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ isApproved }) => (isApproved ? 'fit-content' : '100%')};
  gap: 12px;
`;

const ProfileFrame = styled.div`
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

const UserMeta = styled.div`
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

const ExpertProfileButton = styled.button`
  display: flex;
  white-space: nowrap;
  align-items: center;
  width: fit-content;
  height: 40px;
  font: ${({ theme }) => theme.fonts.labelM};
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 12px;

  &:active {
    background-color: #1d1d1d0d;
  }
`;

const ExpertApprovalCard = styled.div`
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
