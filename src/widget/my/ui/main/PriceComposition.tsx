import styled from '@emotion/styled';
import PriceTheme from '@widget/my/ui/main/PriceTheme.tsx';
import ImgMainBannerEx from '@image/img-mainbanner-ex.png';
import { weddingPackages, friendshipPackages } from '@widget/my/feature/mock.ts';

const PriceComposition = () => {
  return (
    <PriceCompositionContainer>
      <PriceTheme
        themeLabel="웨딩"
        images={[
          { id: 'w-1', src: ImgMainBannerEx, alt: '웨딩 참고 이미지 1' },
          { id: 'w-2', src: ImgMainBannerEx, alt: '웨딩 참고 이미지 2' },
          { id: 'w-3', src: ImgMainBannerEx, alt: '웨딩 참고 이미지 3' },
          { id: 'w-4', src: ImgMainBannerEx, alt: '웨딩 참고 이미지 4' },
        ]}
        packages={weddingPackages}
        onRequestClick={() => console.log('웨딩 요청')}
      />
      <PriceTheme
        themeLabel="우정"
        images={[
          { id: 'f-1', src: ImgMainBannerEx, alt: '우정 참고 이미지 1' },
          { id: 'f-2', src: ImgMainBannerEx, alt: '우정 참고 이미지 2' },
          { id: 'f-3', src: ImgMainBannerEx, alt: '우정 참고 이미지 3' },
        ]}
        packages={friendshipPackages}
        onRequestClick={() => console.log('우정 요청')}
      />
    </PriceCompositionContainer>
  );
};

export default PriceComposition;

const PriceCompositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
