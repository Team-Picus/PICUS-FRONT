import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import useBannerMotion from '@widget/home/feature/useBannerMotion.ts';
import { S } from '@widget/home/ui';

const MainBanner = () => {
  const {
    isClicked,
    handleClick,
    sectionControls,
    rightControls,
    leftControls,
    titleControls,
    descriptionControls,
    imageControls,
  } = useBannerMotion();

  return (
    <>
      <S.MainBannerContainer key="notClicked" isOverview={isClicked}>
        <S.MainBannerTitleSection style={{ order: isClicked ? 1 : 0 }} isOverview={isClicked}>
          <S.MainBannerTitle initial={{ opacity: 1, x: -200 }} animate={titleControls}>
            <span>시선</span>
            <span>No.1_1w July</span>
          </S.MainBannerTitle>
          <S.MainBannerDate initial={{ opacity: 1, x: 200 }} animate={titleControls}>
            7월 1주차
          </S.MainBannerDate>
        </S.MainBannerTitleSection>
        {/* 배너 이미지 */}
        <S.MainBannerImageSection
          layoutId="main-banner-image"
          initial={{ opacity: 1, y: -500 }}
          animate={isClicked ? imageControls : sectionControls}
          exit={{ opacity: 1 }}
          isOverview={isClicked}
          onClick={handleClick}
        >
          <S.HalfBGLeft initial={{ opacity: 1, x: 0 }} animate={leftControls} />
          <S.HalfBGRight initial={{ opacity: 1, x: 0 }} animate={rightControls} />
          <S.MainBannerImage src={ImgMainbannerEx} alt="" />
          <S.Overlay />
        </S.MainBannerImageSection>
        {/* 설명 */}
        <S.MainBannerDescriptionSection style={{ order: isClicked ? 2 : 0 }}>
          <S.MainBannerDescriptionBold
            initial={{ opacity: 1, x: -500 }}
            animate={descriptionControls}
            isOverview={isClicked}
          >
            {isClicked ? '여름의 나른함을 담아내는 작가들' : '여름의 나른함을\n담아내는 작가들'}
          </S.MainBannerDescriptionBold>
          <S.MainBannerDescriptionSub
            initial={{ opacity: 1, x: 500 }}
            animate={descriptionControls}
            isOverview={isClicked}
          >
            {`모든 사진에는 그 순간의 진실이 담겨\n있습니다. 빛과 그림자의 균형 속에서\n감정을 포착합니다.`}
          </S.MainBannerDescriptionSub>
        </S.MainBannerDescriptionSection>
      </S.MainBannerContainer>
    </>
  );
};

export default MainBanner;
