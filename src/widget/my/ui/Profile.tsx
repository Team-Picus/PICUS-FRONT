import styled from '@emotion/styled';
import ImgProfileEx from '@image/img-profile-ex.png';
import IcUnapproval from '@icon/ic-unapproval.svg';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileInfoSection>
        <ProfileImageSection>
          <ProfileImage src={ImgProfileEx} alt="" />
        </ProfileImageSection>
        <InfoSection>
          <Nickname>{`usee_pic`}</Nickname>
          <Email>{`calendar@gmail.com`}</Email>
        </InfoSection>
      </ProfileInfoSection>
      <ActivityAccessSection>
        <ActivityItem>
          <ActivityTitle>{`예약 내역`}</ActivityTitle>
          <ActivityCount>{`0`}</ActivityCount>
        </ActivityItem>
        <ActivityDivider />
        <ActivityItem>
          <ActivityTitle>{`팔로우`}</ActivityTitle>
          <ActivityCount>{`0`}</ActivityCount>
        </ActivityItem>
        <ActivityDivider />
        <ActivityItem>
          <ActivityTitle>{`내 무드보드`}</ActivityTitle>
          <ActivityCount>{`0`}</ActivityCount>
        </ActivityItem>
      </ActivityAccessSection>
      <ExpertApprovalSection>
        <Icon src={IcUnapproval} alt="unapproval"></Icon>
        {`작가승인 하기`}
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

const ProfileInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.lightMode.text3};
  line-height: 150%;
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
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
  border-radius: 8px;
  padding: 18px 16px;
  gap: 8px;
`;

const Icon = styled.img``;
