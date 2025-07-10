import styled from '@emotion/styled';
import { pictureWorkCategories, pictureWorkList } from '@widget/home/feature/mock.ts';

const PictureWorkList = () => {
  return (
    <PictureWorkListContainer>
      <div style={{ gap: '12px', width: '100%' }}>
        <PictureWorkListCategoryTitle>장면의 온도</PictureWorkListCategoryTitle>
        <PictureWorkListCategoriesSection>
          {pictureWorkCategories.map((category, index) => (
            <PictureWorkListCategory key={index}>{category}</PictureWorkListCategory>
          ))}
        </PictureWorkListCategoriesSection>
      </div>
      <PictureWorkListSection>
        {pictureWorkList.map((work) => (
          <PictureWorkItem key={work.id}>
            <img src={work.imageUrl} alt="" />
            <div>{work.name}</div>
            <div>{work.workName}</div>
          </PictureWorkItem>
        ))}
      </PictureWorkListSection>
      <PictureWorkListShowAllButton>전체보기</PictureWorkListShowAllButton>
    </PictureWorkListContainer>
  );
};

export default PictureWorkList;

const PictureWorkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  padding: 40px 0 80px 0;
  gap: 40px;
`;

const PictureWorkListCategoryTitle = styled.span`
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

const PictureWorkListSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  height: auto;
  gap: 11px;
  padding: 0 12px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PictureWorkItem = styled.div`
  flex: 0 0 auto;
  box-sizing: border-box;

  img {
    width: 100%;
    min-height: 239px;
    object-fit: cover;
  }

  div:first-of-type {
    font: ${({ theme }) => theme.fonts.caption};
    color: #414141;
  }

  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.lightMode.text.text1};
  }
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
