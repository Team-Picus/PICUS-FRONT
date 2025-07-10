import styled from '@emotion/styled';
import ExImg from '@image/img-mainbanner-ex.png';
import { discoveryCategories } from '@widget/home/feature/mock.ts';
import IcArrowRight from '@icon/ic-arrow-right.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const DiscoveryBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const [selected, setSelected] = useState(1);
  const changeSelected = (id: number) => {
    if (selected === id) return;
    setSelected(id);
  };

  return (
    <DiscoveryBannerContainer
      ref={ref}
      initial={{ opacity: 1, y: 150 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
      transition={{ type: 'spring', stiffness: 300, damping: 80 }}
    >
      <DiscoveryBannerTitle>뜻밖의 발견</DiscoveryBannerTitle>
      <DiscoveryBannerGridCategorySection>
        {discoveryCategories.map((category) => (
          <DiscoveryBannerCategory
            key={category.id}
            onClick={() => changeSelected(category.id)}
            active={selected === category.id}
          >
            <DiscoveryBannerCategoryImage src={category.imageUrl} alt="" />
            <DiscoveryBannerCategoryText>{category.name}</DiscoveryBannerCategoryText>
          </DiscoveryBannerCategory>
        ))}
        <DiscoveryBannerCategory>{`Random\nSwitch`}</DiscoveryBannerCategory>
      </DiscoveryBannerGridCategorySection>
      <DiscoveryBannerCategorySelectedSection>
        <div style={{ position: 'relative' }}>
          <DiscoveryBannerCategorySelectedImage src={ExImg} alt="" />
          <DiscoveryBannerCategorySelectedArrow>
            <img src={IcArrowRight} alt="" />
          </DiscoveryBannerCategorySelectedArrow>
        </div>
        <div>use_pic</div>
        <div>
          {`모든 사진에는 그 순간의 진실이 담겨 있습니다.\n빛과 그림자의 균형 속에서 감정을 포착합니다.`}
        </div>
      </DiscoveryBannerCategorySelectedSection>
    </DiscoveryBannerContainer>
  );
};

export default DiscoveryBanner;

const DiscoveryBannerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 80px 12px;
  gap: 24px;
`;

const DiscoveryBannerTitle = styled.div`
  font: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const DiscoveryBannerGridCategorySection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;

  @media (max-width: 630px) {
    grid-template-columns: repeat(3, 2fr);
  }
`;

const DiscoveryBannerCategory = styled.div<{ active?: boolean }>`
  position: relative;
  width: 100%;
  height: 58px;
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  text-align: center;
  font: ${({ theme }) => theme.fonts.labelMB};
  line-height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ active }) => (active ? '0.4' : '1')};
`;

const DiscoveryBannerCategoryImage = styled.img`
  position: sticky;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: fill;
  filter: brightness(0.7);
`;

const DiscoveryBannerCategoryText = styled.div`
  position: absolute;
  bottom: 4px;
  text-align: center;
  font: ${({ theme }) => theme.fonts.labelMB};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const DiscoveryBannerCategorySelectedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    font: ${({ theme }) => theme.fonts.labelXl};
    color: ${({ theme }) => theme.colors.lightMode.text.text1};
  }

  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.lightMode.text.text1};
    white-space: pre-wrap;
  }
}
`;

const DiscoveryBannerCategorySelectedImage = styled.img`
  position: sticky;
  top: 0;
  height: 558px;
  object-fit: cover;
  width: 100%;

  @media (max-width: 440px) {
    height: 277px;
  }
`;

const DiscoveryBannerCategorySelectedArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  background-color: #e6e6e6;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 8px;
  cursor: pointer;
  opacity: 0.5;
`;
