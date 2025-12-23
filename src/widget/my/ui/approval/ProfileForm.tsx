import SectionHeader from '@shared/components/SectionHeader.tsx';
import TextField from '@shared/components/TextField.tsx';
import SelectMenuOption from '@shared/components/SelectMenuOption.tsx';
import { S } from '@widget/my/ui/approval';
import SkillsForm from '@widget/my/component/SkillsForm.tsx';

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
      <SkillsForm />
    </>
  );
};

export default ProfileForm;
