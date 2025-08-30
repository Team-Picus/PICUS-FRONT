// 제품 상세 내용을 표시하는 컴포넌트입니다.

import styled from '@emotion/styled';

interface ReservationDetailContentProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  type: string;
  authorName: string;
}

const ReservationDetailContent = ({
  imageSrc,
  imageAlt = '',
  title,
  type,
  authorName,
}: ReservationDetailContentProps) => {
  return (
    <Container>
      {/* 이미지 */}
      <ImageContainer>
        <img src={imageSrc} alt={imageAlt} />
      </ImageContainer>

      <TextContainer>
        <Title>{title}</Title>

        <SubTextContainer>
          <Type>{type}</Type>
          <AuthorName>{authorName}</AuthorName>
        </SubTextContainer>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 126px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bgColor};
  border-radius: 4px;
  gap: 13px;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 102px;
  height: 102px;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const SubTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
`;

const Type = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const AuthorName = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

export default ReservationDetailContent;
