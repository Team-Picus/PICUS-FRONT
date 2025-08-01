import ImgEx from '@image/img-mainbanner-ex.png';
import ExploreCard from '@widget/explore/ui/card/ExploreCard.tsx';
import styled from '@emotion/styled';

const data = [
  {
    id: 1,
    title: 'Explore Card 1',
    authorName: 'This is the first explore card.',
    imageUrl: ImgEx,
  },
  {
    id: 2,
    title: 'Explore Card 2',
    authorName: 'This is the second explore card.',
    imageUrl: ImgEx,
  },
  {
    id: 3,
    title: 'Explore Card 3',
    authorName: 'This is the third explore card.',
    imageUrl: ImgEx,
  },
  {
    id: 4,
    title: 'Explore Card 1',
    authorName: 'This is the first explore card.',
    imageUrl: ImgEx,
  },
  {
    id: 5,
    title: 'Explore Card 2',
    authorName: 'This is the second explore card.',
    imageUrl: ImgEx,
  },
  {
    id: 6,
    title: 'Explore Card 3',
    authorName: 'This is the third explore card.',
    imageUrl: ImgEx,
  },
];

const ExploreCardList = () => {
  return (
    <ExploreCardListContainer>
      {data.map((cardItem) => (
        <ExploreCard key={cardItem.id} {...cardItem} />
      ))}
    </ExploreCardListContainer>
  );
};

export default ExploreCardList;

const ExploreCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 4fr));
  justify-content: flex-start;
  gap: 11px;
  background-color: white;
  padding: 12px 12px 80px 12px;

  @media (max-width: 680px) {
    grid-template-columns: repeat(auto-fill, minmax(32%, 3fr));
  }
  
  @media (max-width: 440px) {
    grid-template-columns: repeat(auto-fill, minmax(48%, 2fr));
  }
`;
