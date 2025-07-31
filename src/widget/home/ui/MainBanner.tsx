import styled from '@emotion/styled';
import { motion, type HTMLMotionProps } from 'framer-motion';
import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import useBannerMotion from '@widget/home/feature/useBannerMotion.ts';

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
      <MainBannerContainer key="notClicked" isOverview={isClicked}>
        <MainBannerTitleSection style={{ order: isClicked ? 1 : 0 }} isOverview={isClicked}>
          <MainBannerTitle initial={{ opacity: 1, x: -200 }} animate={titleControls}>
            <span>시선</span>
            <span>No.1_1w July</span>
          </MainBannerTitle>
          <MainBannerDate initial={{ opacity: 1, x: 200 }} animate={titleControls}>
            7월 1주차
          </MainBannerDate>
        </MainBannerTitleSection>
        {/* 배너 이미지 */}
        <MainBannerImageSection
          layoutId="main-banner-image"
          initial={{ opacity: 1, y: -500 }}
          animate={isClicked ? imageControls : sectionControls}
          exit={{ opacity: 1 }}
          isOverview={isClicked}
          onClick={handleClick}
        >
          <HalfBGLeft initial={{ opacity: 1, x: 0 }} animate={leftControls} />
          <HalfBGRight initial={{ opacity: 1, x: 0 }} animate={rightControls} />
          <MainBannerImage src={ImgMainbannerEx} alt="" />
          <Overlay />
        </MainBannerImageSection>
        {/* 설명 */}
        <MainBannerDescriptionSection style={{ order: isClicked ? 2 : 0 }}>
          <MainBannerDescriptionBold
            initial={{ opacity: 1, x: -500 }}
            animate={descriptionControls}
            isOverview={isClicked}
          >
            {isClicked ? '여름의 나른함을 담아내는 작가들' : '여름의 나른함을\n담아내는 작가들'}
          </MainBannerDescriptionBold>
          <MainBannerDescriptionSub
            initial={{ opacity: 1, x: 500 }}
            animate={descriptionControls}
            isOverview={isClicked}
          >
            {`모든 사진에는 그 순간의 진실이 담겨\n있습니다. 빛과 그림자의 균형 속에서\n감정을 포착합니다.`}
          </MainBannerDescriptionSub>
        </MainBannerDescriptionSection>
      </MainBannerContainer>
    </>
  );
};

export default MainBanner;

export const MainBannerContainer = styled(motion.div)<
  HTMLMotionProps<'div'> & { isOverview: boolean }
>`
  display: flex;
  flex-direction: column;
  padding: ${({ isOverview }) => (isOverview ? '0' : '32px 16px')};
  gap: ${({ isOverview }) => (isOverview ? '16px' : '56px')};
`;

export const MainBannerTitleSection = styled.div<{ isOverview: boolean }>`
  display: flex;
  justify-content: space-between;
  height: 24px;
  padding: ${({ isOverview }) => (isOverview ? '0px 16px' : '0px')};
`;

export const MainBannerTitle = styled(motion.div)`
  span:first-of-type {
    font: ${({ theme }) => theme.fonts.labelMB};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightMode.text.text1};
  }

  span:last-of-type {
    margin-left: 10px;
    font: ${({ theme }) => theme.fonts.labelM};
    color: ${({ theme }) => theme.colors.lightMode.text.text1};
  }
`;

export const MainBannerDate = styled(motion.div)`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

export const MainBannerDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MainBannerDescriptionBold = styled(motion.div)<{ isOverview: boolean }>`
  font: ${({ theme, isOverview }) => (isOverview ? theme.fonts.title3 : theme.fonts.title1)};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  white-space: pre-wrap;
  margin-right: auto;
  padding: ${({ isOverview }) => (isOverview ? '0px 16px' : '0px')};
`;

export const MainBannerDescriptionSub = styled(motion.div)<{ isOverview: boolean }>`
  font: ${({ theme }) => theme.fonts.body4};
  font-size: ${({ isOverview }) => (isOverview ? '13px' : '14px')};
  line-height: 160%;
  color: #7b7b7b;
  white-space: pre-wrap;
  margin-left: ${({ isOverview }) => (isOverview ? 'none' : 'auto')};
  padding: ${({ isOverview }) => (isOverview ? '0px 16px' : '0px')};
`;

export const MainBannerImageSection = styled(motion.div)<{ isOverview: boolean }>`
  position: relative;
  height: ${({ isOverview }) => (isOverview ? '742px' : '573px')};
  clip-path: ${({ isOverview }) => (isOverview ? 'none' : 'ellipse(100% 50% at 50% 50%)')};
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 440px) {
    height: ${({ isOverview }) => (isOverview ? '380px' : '282px')};
  }
`;

export const MainBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`;

export const HalfBGLeft = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightMode.brand.primary};
  z-index: 1;
  clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
`;

export const HalfBGRight = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightMode.brand.primary};
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 0%, 100% 100%);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 595px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 148px;
  background: linear-gradient(180deg, rgba(128, 202, 20, 0) 0%, #80ca14 100%);
  opacity: 0.3;
  transition: opacity 0.3s ease;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 440px) {
    top: 232px;
  }
`;
