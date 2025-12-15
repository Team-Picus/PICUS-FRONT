import SectionHeader from '@shared/components/SectionHeader.tsx';
import TextField from '@shared/components/TextField.tsx';
import { S } from '@widget/my/ui/approval';

const OrganizationForm = () => {
  return (
    <S.SectionContainer>
      <SectionHeader text="소속" />
      <TextField
        type="text"
        states="default"
        isLabel
        isTextLength={false}
        isHelpText={false}
        label="소속"
        placeholder="소속 스튜디오가 있다면 입력해주세요."
      />
      <TextField
        type="text"
        states="default"
        isLabel
        isTextLength={false}
        isHelpText={false}
        label="직원 수"
        placeholder="함께 일하는 인원 수를 숫자로 입력해주세요."
      />
      <TextField
        type="text"
        states="default"
        isLabel
        isTextLength={false}
        isHelpText
        label="영업 시간"
        helpText="중간 휴식 시간이 있다면 함께 입력해주세요."
        placeholder="촬영이 가능한 시간을 입력해주세요."
      />
      <TextField
        type="text"
        states="default"
        isLabel
        isTextLength={false}
        isHelpText={false}
        label="주소"
        placeholder="촬영 장소나 스튜디오의 주소를 입력해주세요."
      />
    </S.SectionContainer>
  );
};

export default OrganizationForm;
