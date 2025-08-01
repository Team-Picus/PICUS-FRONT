import { pictureWorkList } from '@widget/home/feature/mock.ts';
import styled from '@emotion/styled';

const PictureWorkList = () => {
  return (
    <PictureWorkListSection>
      {pictureWorkList.map((work) => (
        <PictureWorkItem key={work.id}>
          <img src={work.imageUrl} alt="" />
          <div>{work.name}</div>
          <div>{work.workName}</div>
        </PictureWorkItem>
      ))}
    </PictureWorkListSection>
  );
};

export default PictureWorkList;

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
