import styled from '@emotion/styled';
import { PictureWorkCategory } from '@widget/home/ui';
import ImgMainBannerEx from '@image/img-mainbanner-ex.png';

const Gallery = () => {
  return (
    <GalleryContainer>
      <WorkCard>
        <WorkImageFrame>
          <WorkImage src={ImgMainBannerEx} alt="작품 이미지" />
        </WorkImageFrame>
        <WorkDescriptionContainer>
          <WorkTitle>{`작품명`}</WorkTitle>
          <DescriptionText>{`모든 사진에는 그 순간의 진실이 담겨 있습니다. 빛과 그림자의 균형 속에서 감정을 포착합니다.`}</DescriptionText>
        </WorkDescriptionContainer>
      </WorkCard>
      <PictureWorkCategory />
    </GalleryContainer>
  );
};

export default Gallery;

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  gap: 16px;
`;

const WorkImageFrame = styled.div`
  width: 100%;
  aspect-ratio: 1.5;
  overflow: hidden;
`;

const WorkImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

const WorkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WorkTitle = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const DescriptionText = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  color: #2c2c2c;
  line-height: 150%;
`;
