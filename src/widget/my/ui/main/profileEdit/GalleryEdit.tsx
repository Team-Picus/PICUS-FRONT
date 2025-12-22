import { S } from '@widget/my/ui/main';
import { SelectMenuButton } from '@shared/components';
import SectionHeader from '@shared/components/SectionHeader.tsx';

const GalleryEdit = () => {
  return (
    <S.Section>
      <SectionHeader text="고정 게시글 선택" />
      <SelectMenuButton
        title="게시글을 선택하거나 추가해주세요."
        isActive
        contents={['작품명 1', '작품명 2', '작품명 3']}
        dropDownTitle="게시글"
      />
    </S.Section>
  );
};

export default GalleryEdit;
