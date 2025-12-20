import styled from '@emotion/styled';
import { useState } from 'react';
import type { HeaderIcon } from '@shared/types/header.ts';
import { user } from '@widget/my/feature/mock.ts';
import Header from '@shared/components/Header.tsx';
import SectionHeader from '@shared/components/SectionHeader.tsx';
import TextField from '@shared/components/TextField.tsx';
import ImgProfileEx from '@image/img-profile-ex.png';
import IcSave from '@icon/ic-save.svg';
import IcGallery from '@icon/ic-gallery.svg';
import IcKakao from '@icon/ic-kakao.svg';

const AccountSettings = () => {
  const [nickname, setNickname] = useState(user.nickname);
  const icons: HeaderIcon[] = [
    {
      src: IcSave,
      alt: '저장',
      onClick: () => {
        console.log('저장 아이콘 클릭됨');
      },
    },
  ];

  return (
    <>
      <Header isBack title="계정관리" icons={icons} />
      <AccountSettingsContainer>
        <AccountInfoContainer>
          <SectionHeader text="계정 정보" />
          <ProfileImageSection>
            <SectionLabel>{`프로필`}</SectionLabel>
            <ProfileImage src={ImgProfileEx} alt="프로필 이미지" />
          </ProfileImageSection>
          <ImageSelectButton>
            <img src={IcGallery} alt="gallery" />
            <ButtonLabel>{`사진 선택`}</ButtonLabel>
          </ImageSelectButton>
          <TextField
            type="text"
            value={nickname}
            states="default"
            isLabel
            isTextLength={false}
            isHelpText
            label="닉네임"
            helpText="이모티콘 및 특수기호, 띄어쓰기 사용이 불가능합니다."
            placeholder={user.nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </AccountInfoContainer>
        <UserInfoContainer>
          <SectionHeader text="회원 정보" />
          <TextField
            type="text"
            states="disabled"
            isLabel
            isTextLength={false}
            isHelpText={false}
            label="이름"
            placeholder={user.name}
          />
          <TextField
            type="text"
            states="disabled"
            isLabel
            isTextLength={false}
            isHelpText={false}
            label="이메일"
            placeholder={user.email}
          />
          <TextField
            type="text"
            states="disabled"
            isLabel
            isTextLength={false}
            isHelpText={false}
            label="전화번호"
            placeholder={user.phone_number}
          />
          <HelperList>
            <HelperText>{`이름과 휴대폰 번호를 설정하거나 변경하려면 본인 인증해 주세요. 인증할 때 입력한 정보로 설정 및 변경돼요.`}</HelperText>
            <HelperText>{`이동통신사에 본인 명의로 가입되어 있는지 확인해 주세요.`}</HelperText>
            <HelperText>{`개명하신 경우 다시 보인 인증하려면 자동으로 이름이 변경돼요.`}</HelperText>
          </HelperList>
        </UserInfoContainer>
        <Reauthenticate>
          <img src={IcKakao} alt="kakao" />
          {`본인 인증 다시하기`}
        </Reauthenticate>
      </AccountSettingsContainer>
    </>
  );
};

export default AccountSettings;

const AccountSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 16px 16px 80px;
  gap: 40px;
`;

const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
  padding: 16px 0 40px;
  gap: 16px;
`;

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 24px;
`;

const ImageSelectButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
  border-radius: 8px;
  padding: 8px 16px;
  gap: 4px;
`;

const ButtonLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HelperList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 0;
  gap: 4px;
`;

const HelperText = styled.li`
  position: relative;
  list-style-type: none;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  padding-left: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 4px;
    transform: scale(0.5);
    transform-origin: left center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightMode.icon.iconDisabled};
    margin: 4px;
  }
`;

const Reauthenticate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  border-radius: 8px;
  padding: 12px;
  gap: 4px;
`;
