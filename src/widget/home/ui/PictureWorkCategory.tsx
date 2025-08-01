import styled from '@emotion/styled';
import { pictureWorkCategories } from '@widget/home/feature/mock.ts';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PictureWorkList from '@widget/home/ui/PictureWorkList.tsx';

const PictureWorkCategory = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <PictureWorkCategoryContainer
      ref={ref}
      initial={{ opacity: 1, y: 150 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
      transition={{ type: 'spring', stiffness: 300, damping: 80 }}
    >
      <div style={{ gap: '12px', width: '100%' }}>
        <PictureWorkCategoryTitle>장면의 온도</PictureWorkCategoryTitle>
        <PictureWorkListCategoriesSection>
          {pictureWorkCategories.map((category, index) => (
            <PictureWorkListCategory key={index}>{category}</PictureWorkListCategory>
          ))}
        </PictureWorkListCategoriesSection>
      </div>
      <PictureWorkList />
      <PictureWorkListShowAllButton>전체보기</PictureWorkListShowAllButton>
    </PictureWorkCategoryContainer>
  );
};

export default PictureWorkCategory;

const PictureWorkCategoryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  padding: 40px 0 80px 0;
  gap: 40px;
`;

const PictureWorkCategoryTitle = styled.span`
  font: ${({ theme }) => theme.fonts.labelXl};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  margin-bottom: 16px;
  margin-left: 12px;
`;

const PictureWorkListCategoriesSection = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  gap: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding: 0 12px;
`;

const PictureWorkListCategory = styled.span<{ active?: boolean }>`
  flex: 0 0 auto;
  z-index: 5;
  font: ${({ theme }) => theme.fonts.labelXl};
  color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text5};
  cursor: pointer;
  white-space: nowrap;
  scroll-snap-align: starty;
`;

const PictureWorkListShowAllButton = styled.div`
  text-align: center;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  padding: 8px 0;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin: 0 12px;
`;
