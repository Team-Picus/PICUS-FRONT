import styled from '@emotion/styled';
import { useState } from 'react';
import { S } from '@widget/my/ui/main';
import TextField from '@shared/components/TextField.tsx';
import DayPicker from '@shared/components/DayPicker.tsx';

const ProjectForm = () => {
  const [day, setDay] = useState({ year: 2025, month: 6 });

  return (
    <ProjectFormContainer>
      <TextField showLabel label="프로젝트" placeholder="프로젝트 이름을 입력해주세요." />
      <S.InputContainer>
        <S.InputLabel>{`시작일`}</S.InputLabel>
        <DayPicker mode="ym" value={day} onChange={setDay} />
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel>{`종료일`}</S.InputLabel>
        <DayPicker mode="ym" value={day} onChange={setDay} />
      </S.InputContainer>
    </ProjectFormContainer>
  );
};

export default ProjectForm;

const ProjectFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
