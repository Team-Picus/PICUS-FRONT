import SectionHeader from '@shared/components/SectionHeader.tsx';
import TextField from '@shared/components/TextField.tsx';
import SelectMenuOption from '@shared/components/SelectMenuOption.tsx';
import { S } from '@widget/my/ui/approval';

const ProfileForm = () => {
  return (
    <>
      <S.SectionContainer>
        <SectionHeader text="활동" />
        <TextField showLabel label="경력" placeholder="활동 경력을 입력해주세요." />
        <S.AddableField>
          <TextField showLabel label="내역" placeholder="활동 내역을 입력해주세요." />
          <SelectMenuOption text="추가하기" />
        </S.AddableField>
        <S.AddableField>
          <TextField showLabel label="지역" placeholder="주로 활동하는 지역을 입력해주세요." />
          <SelectMenuOption text="추가하기" />
        </S.AddableField>
      </S.SectionContainer>
      <S.SectionContainer>
        <SectionHeader text="보유기술" />
        <S.AddableField>
          <TextField showLabel label="카메라" placeholder="사용 중인 카메라 기종을 입력해주세요." />
          <SelectMenuOption text="추가하기" />
        </S.AddableField>
        <S.AddableField>
          <TextField
            showLabel
            label="조명"
            placeholder="사용하는 조명 장비나 방식이 있다면 적어주세요."
          />
          <SelectMenuOption text="추가하기" />
        </S.AddableField>
        <S.AddableField>
          <TextField
            showLabel
            label="편집"
            placeholder="사용하는 편집 툴이나 작업 스타일을 입력해주세요."
          />
          <SelectMenuOption text="추가하기" />
        </S.AddableField>
      </S.SectionContainer>
    </>
  );
};

export default ProfileForm;
