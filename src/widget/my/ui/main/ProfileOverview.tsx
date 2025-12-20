import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { expertBasicInfoMock } from '@widget/my/feature/mock.ts';
import Stats from '@widget/my/ui/main/Stats.tsx';
import ShapeButton from '@shared/components/ShapeButton.tsx';
import LinksModal from '@widget/my/ui/main/LinksModal.tsx';
import IcProgress from '@icon/ic-progress.tsx';
import IcMail from '@icon/ic-mail.svg';

const ProfileOverview = () => {
  const navigate = useNavigate();
  const [isLinksModalVisible, setIsLinksModalVisible] = useState(false);

  const {
    activity_duration,
    activity_count,
    // last_activity_at, // TODO: 날짜 포맷 유틸 구현 및 적용 (YY. MM. DD)
    intro,
    background_image_url,
    nickname,
    profile_image_url,
    links,
  } = expertBasicInfoMock;

  return (
    <ProfileOverviewContainer $bgUrl={background_image_url}>
      <ProfileInfoContainer>
        <ProfileFrame>
          <ProfileImage src={profile_image_url} alt={nickname} />
        </ProfileFrame>
        <ProfileHeader>
          <MetaContainer>
            <Nickname>{nickname}</Nickname>
            <LinksButton onClick={() => setIsLinksModalVisible(true)}>
              <IconWrapper>
                <IcProgress />
              </IconWrapper>
              {`Instagram 외 2개`}
            </LinksButton>
          </MetaContainer>
          <ActionButtons>
            <ShapeButton
              variant="ellips"
              icon={{ icon: IcMail, alt: '채팅' }}
              isShadow
              onClick={() => navigate('/chat')}
            />
            <TextButton>{`팔로우`}</TextButton>
          </ActionButtons>
        </ProfileHeader>
      </ProfileInfoContainer>
      <Stats
        stats={[
          { label: '활동 기간', value: activity_duration },
          { label: '활동 수', value: activity_count },
          { label: '마지막 활동', value: '25. 09. 11' },
        ]}
      />
      <Intro>{intro}</Intro>

      <LinksModal
        isVisible={isLinksModalVisible}
        onClose={() => setIsLinksModalVisible(false)}
        links={Array.isArray(links) ? links : []}
      />
    </ProfileOverviewContainer>
  );
};

export default ProfileOverview;

const ProfileOverviewContainer = styled.div<{ $bgUrl?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 253px 12px 40px;
  gap: 56px;

  /* 커버 이미지 */
  ${({ $bgUrl }) =>
    $bgUrl &&
    `
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 0;
    }
    
    &::before {
      height: 480px;
      background: url(${$bgUrl}) center/cover;
    }

    /* 피그마 그라데이션 + blur */
    &::after {
      height: 616px;
      background: linear-gradient(
        0deg,
        #ffffff 49.11%,
        rgba(255, 255, 255, 0.7) 63.49%,
        rgba(255, 255, 255, 0) 100%
      );
      backdrop-filter: blur(2px);
    }
  `}

  // 컨텐츠
  > * {
    position: relative;
    z-index: 2;
  }
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.div`
  font: ${({ theme }) => theme.fonts.title2};
`;

const LinksButton = styled.button`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  gap: 4px;
  line-height: 150%;
`;

const IconWrapper = styled.span`
  color: #000000;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TextButton = styled.button`
  white-space: nowrap;
  align-items: center;
  width: fit-content;
  height: 36px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  line-height: 150%;
  border-radius: 50px;
  box-shadow: 0 7.2px 21.6px 0 rgba(0, 0, 0, 0.1);
  padding: 8px 24px;

  &:active {
    background-color: rgba(29, 29, 29, 0.05);
  }
`;

const Intro = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  line-height: 150%;
  white-space: pre-line;
`;
