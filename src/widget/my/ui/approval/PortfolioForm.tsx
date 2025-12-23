import SectionHeader from '@shared/components/SectionHeader.tsx';
import TextField from '@shared/components/TextField.tsx';
import { S } from '@widget/my/ui/approval';
import SelectMenuOption from '@shared/components/SelectMenuOption.tsx';

const PortfolioForm = () => {
  return (
    <S.SectionContainer>
      <SectionHeader text="포트폴리오 링크" />
      <S.AddableField>
        <TextField showLabel label="분야" placeholder="https://" />
        <SelectMenuOption text="추가하기" />
      </S.AddableField>
    </S.SectionContainer>
  );
};

export default PortfolioForm;
