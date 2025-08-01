import styled from '@emotion/styled';

interface ExploreCardProps {
  id?: number;
  authorName?: string;
  imageUrl?: string;
  title?: string;
}

const ExploreCard = ({ id, authorName, title, imageUrl }: ExploreCardProps) => {
  return (
    <ExploreCardContainer key={id}>
      <img src={imageUrl} alt="" />
      <div>{authorName}</div>
      <div>{title}</div>
    </ExploreCardContainer>
  );
};

export default ExploreCard;

const ExploreCardContainer = styled.div`
  img {
    width: 100%;
    max-height: 239px;
    object-fit: cover;
  }

  div:first-of-type {
    font: ${({ theme }) => theme.fonts.caption};
    color: #414141;
    margin-top: 12px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body3};
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
