import { useState } from 'react';
import { S } from '@widget/my/ui/main';
import { expertBasicInfoMock } from '@widget/my/feature/mock.ts';
import SectionHeader from '@shared/components/SectionHeader.tsx';
import ImagePicker from '@widget/my/component/ImagePicker.tsx';
import TextField from '@shared/components/TextField.tsx';
import TextAreaField from '@shared/components/TextAreaField.tsx';

const ProfileEdit = () => {
  const { profile_image_url, background_image_url, nickname, intro } = expertBasicInfoMock;
  const [nameValue, setNameValue] = useState(nickname ?? '');
  const [linkValue, setLinkValue] = useState('');
  const [introValue, setIntroValue] = useState(intro ?? '');

  return (
    <S.EditTapViewContainer>
      <S.Section>
        <SectionHeader text="사진 등록" />
        <ImagePicker
          variant="avatar"
          label="프로필"
          imageUrl={profile_image_url}
          onChange={() => {}}
        />
        <ImagePicker
          variant="background"
          label="배경"
          imageUrl={background_image_url}
          onChange={() => {}}
        />
      </S.Section>
      <S.Section>
        <SectionHeader text="기본 정보" />
        <TextField
          value={nameValue}
          showLabel
          label="이름"
          placeholder="이름을 입력해주세요."
          onChange={(e) => setNameValue(e.target.value)}
        />
        <TextField
          value={linkValue}
          showLabel
          label="링크"
          placeholder="링크를 추가해주세요."
          onChange={(e) => setLinkValue(e.target.value)}
        />
      </S.Section>
      <S.Section>
        <SectionHeader text="부가 정보" />
        <TextAreaField
          value={introValue}
          size="S"
          showLabel
          showTextLength
          label="소개"
          maxLength={60}
          placeholder="당신의 시선이 어디에서 왔는지 들려주세요."
          onChange={(e) => setIntroValue(e.target.value)}
        />
      </S.Section>
    </S.EditTapViewContainer>
  );
};

export default ProfileEdit;
