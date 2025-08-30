import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import { S } from '@widget/home/ui';

const MagazineOverview = () => {
  return (
    <S.MainBannerContainer isOverview>
      {/* 배너 이미지 */}
      <S.MainBannerImageSection isOverview style={{ cursor: 'default' }}>
        <S.MainBannerImage src={ImgMainbannerEx} alt="" />
        <S.Overlay />
      </S.MainBannerImageSection>
      {/* 타이틀 */}
      <S.MainBannerTitleSection isOverview>
        <S.MainBannerTitle>
          <span>시선</span>
          <span>No.1_1w July</span>
        </S.MainBannerTitle>
        <S.MainBannerDate>7월 1주차</S.MainBannerDate>
      </S.MainBannerTitleSection>
      {/* 설명 */}
      <S.MainBannerDescriptionBold isOverview>
        {'여름의 나른함을 담아내는 작가들'}
      </S.MainBannerDescriptionBold>
      <S.MainBannerDescriptionSub isOverview>
        {`모든 사진에는 그 순간의 진실이 담겨\n있습니다. 빛과 그림자의 균형 속에서\n감정을 포착합니다.`}
      </S.MainBannerDescriptionSub>
    </S.MainBannerContainer>
  );
};

export default MagazineOverview;
