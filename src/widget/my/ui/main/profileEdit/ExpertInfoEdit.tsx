import { useState } from 'react';
import { S } from '@widget/my/ui/main';
import { OrganizationForm, S as approvalS } from '@widget/my/ui/approval';
import { SelectMenuButton } from '@shared/components';
import SectionHeader from '@shared/components/SectionHeader.tsx';
import TextField from '@shared/components/TextField.tsx';
import SelectMenuOption from '@shared/components/SelectMenuOption.tsx';
import ProjectForm from '@widget/my/ui/main/profileEdit/ProjectForm.tsx';
import SkillsForm from '@widget/my/component/SkillsForm.tsx';
import RegionModal from '@shared/components/RegionModal.tsx';

const ExpertInfoEdit = () => {
  const [isRegionModalOn, setIsRegionModalOn] = useState(false);

  return (
    <S.EditTapViewContainer>
      <S.Section>
        <SectionHeader text="활동" />
        <TextField showLabel label="경력" placeholder="경력을 입력해주세요." />
        <approvalS.AddableField>
          <S.InputLabel>{`지역`}</S.InputLabel>
          <SelectMenuButton
            title="지역을 선택해주세요."
            isActive={false}
            contents={[]}
            size="L"
            onClick={() => setIsRegionModalOn(true)}
          />
          <SelectMenuOption text="추가하기" />
        </approvalS.AddableField>
      </S.Section>
      <S.Section>
        <SectionHeader text="활동 내역" />
        <approvalS.AddableField>
          <ProjectForm />
          <SelectMenuOption text="추가하기" />
        </approvalS.AddableField>
      </S.Section>
      <SkillsForm />
      <OrganizationForm />

      <RegionModal isOpen={isRegionModalOn} onClose={() => setIsRegionModalOn(false)} />
    </S.EditTapViewContainer>
  );
};

export default ExpertInfoEdit;
