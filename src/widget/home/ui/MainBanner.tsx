import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import useBannerMotion from '@widget/home/feature/useBannerMotion.ts';

const MainBanner = () => {
  const { sectionControls, rightControls, leftControls } = useBannerMotion();

  return (
    <MainBannerContainer>
      {/* 타이틀 */}
      <MainBannerTitleSection>
        <MainBannerTitle
          initial={{ opacity: 1, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 80 }}
        >
          <span>시선</span>
          <span>No.1_1w Junly</span>
        </MainBannerTitle>
        <MainBannerDate
          initial={{ opacity: 1, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 80 }}
        >
          7월 1주차
        </MainBannerDate>
      </MainBannerTitleSection>
      {/* 배너 이미지 */}
      <MainBannerImageSection initial={{ opacity: 1, y: -500 }} animate={sectionControls}>
        <HalfBGLeft initial={{ opacity: 1, x: 0 }} animate={leftControls} />
        <HalfBGRight initial={{ opacity: 1, x: 0 }} animate={rightControls} />
        <MainBannerImage src={ImgMainbannerEx} alt="" />
      </MainBannerImageSection>
      {/* 설명 */}
      <MainBannerDescriptionSection>
        <MainBannerDescriptionBold
          initial={{ opacity: 1, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 80 }}
        >
          {'여름의 나른함을\n담아내는 작가들'}
        </MainBannerDescriptionBold>
        <MainBannerDescriptionSub
          initial={{ opacity: 1, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 80 }}
        >
          {`모든 사진에는 그 순간의 진실이 담겨\n있습니다. 빛과 그림자의 균형 속에서\n감정을 포착합니다.`}
        </MainBannerDescriptionSub>
      </MainBannerDescriptionSection>
    </MainBannerContainer>
  );
};

export default MainBanner;

const MainBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  gap: 56px;
`;

const MainBannerTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainBannerTitle = styled(motion.div)`
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

const MainBannerDate = styled(motion.div)`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const MainBannerDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainBannerDescriptionBold = styled(motion.div)`
  font: ${({ theme }) => theme.fonts.title1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  white-space: pre-wrap;
  margin-right: auto;
`;

const MainBannerDescriptionSub = styled(motion.div)`
  font: ${({ theme }) => theme.fonts.body4};
  font-size: 14px;
  line-height: 160%;
  color: #7b7b7b;
  white-space: pre-wrap;
  margin-left: auto;
`;

const MainBannerImageSection = styled(motion.div)`
  position: relative;
  height: 573px;
  clip-path: ellipse(100% 50% at 50% 50%);
  overflow: hidden;

  @media (max-width: 440px) {
    height: 282px;
  }
`;

const MainBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`;

const HalfBGLeft = styled(motion.div)`
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

const HalfBGRight = styled(motion.div)`
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
