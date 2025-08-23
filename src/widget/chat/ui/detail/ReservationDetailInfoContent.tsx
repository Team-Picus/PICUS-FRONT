import React from 'react';
import styled from '@emotion/styled';

interface ReservationDetailInfoContentProps {
  dateValue?: string;
  timeValue?: string;
  locationValue?: string;
  locationSubValue?: string;
  filterValues?: string[];
  requestValue?: string;
}

const ReservationDetailInfoContent = ({
  dateValue,
  timeValue,
  locationValue,
  locationSubValue,
  filterValues,
  requestValue,
}: ReservationDetailInfoContentProps) => {
  return (
    <Container>
      <InfoSection>
        <InfoRow>
          <InfoLabel>{'날짜'}</InfoLabel>
          <DateText>{dateValue}</DateText>
        </InfoRow>

        <InfoRow>
          <InfoLabel>{'시간'}</InfoLabel>
          <InfoValue>{timeValue}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>{'장소'}</InfoLabel>
          <LocationContainer>
            <InfoValue>{locationValue}</InfoValue>

            <LocationSubText>{locationSubValue}</LocationSubText>
          </LocationContainer>
        </InfoRow>

        <InfoRow>
          <InfoLabel>{'필터'}</InfoLabel>
          <FilterContainer>
            {filterValues?.map((filter, index) => (
              <React.Fragment key={filter}>
                <InfoValue>{filter}</InfoValue>
                {index < filterValues.length - 1 && <Divider>{'/'}</Divider>}
              </React.Fragment>
            ))}
          </FilterContainer>
        </InfoRow>
      </InfoSection>

      <InfoRow>
        <InfoLabel>{'요청'}</InfoLabel>

        <RequestContent>{requestValue}</RequestContent>
      </InfoRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
`;

const InfoLabel = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: #7f7e7e;
  flex-shrink: 0;
`;

const InfoValue = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const DateText = styled(InfoValue)`
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LocationSubText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Divider = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #c4c4c4;
`;

const RequestContent = styled.div`
  display: flex;
  width: 100%;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

interface ReservationDetailPackageContentProps {
  PackageName: string;
  PackagePrice: string;
  PackageDetails: string[];
  PackageDetailMessage: string;
  PackageOptionName: string;
  PackageOptionQuantity: string;
  PackageOptionPrice: string;
  PackageOptionMessage: string;
  PackageQuantity: string;
}

const ReservationDetailPackageContent = ({
  PackageName,
  PackagePrice,
  PackageDetails,
  PackageDetailMessage,
  PackageOptionName,
  PackageOptionQuantity,
  PackageOptionPrice,
  PackageOptionMessage,
  PackageQuantity,
}: ReservationDetailPackageContentProps) => {
  return (
    <PackageContainer>
      {/* 패키지 설명 */}
      <PackageContent>
        <PackageTitle>
          <PackageTitleText>{PackageName}</PackageTitleText>
          <PackageTitleText>{PackagePrice}원</PackageTitleText>
        </PackageTitle>

        <PackageDetail>
          {PackageDetails.map((detail, index) => (
            <PackageDetailText key={index}>{detail}</PackageDetailText>
          ))}
        </PackageDetail>

        <PackageDetailText>{PackageDetailMessage}</PackageDetailText>
      </PackageContent>

      {/* 패키지 옵션 설명 */}
      <PackageContent>
        <PackageTitle>
          <PackageTitleText>{PackageOptionName}</PackageTitleText>
          <PackageTitleText>{PackageOptionQuantity}장</PackageTitleText>
          <PackageTitleText>{PackageOptionPrice}원</PackageTitleText>
        </PackageTitle>

        <PackageQuantityText>{PackageQuantity}개</PackageQuantityText>

        <PackageDetailText>{PackageOptionMessage}</PackageDetailText>
      </PackageContent>
    </PackageContainer>
  );
};

// 공통 패키지 스타일 컴포넌트들
const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PackageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bgColor};
  gap: 16px;
`;

const PackageTitle = styled.div`
  display: flex;
  gap: 24px;
`;

const PackageTitleText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const PackageQuantityText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: #454545;
`;

const PackageDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PackageDetailText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #878686;
`;

interface ReservationDetailPaymentContentProps {
  PackageName: string;
  PaymentPrice: string;
  PackageOption: string[];
}

const ReservationDetailPaymentContent = ({
  PackageName,
  PaymentPrice,
  PackageOption,
}: ReservationDetailPaymentContentProps) => {
  return (
    // 결제 상품 정보 컴포넌트
    <PaymentContainer>
      <PaymentTitle>
        <PaymentTitleText>{'서비스 가격'}</PaymentTitleText>
        <PaymentTitleText>{PaymentPrice}</PaymentTitleText>
      </PaymentTitle>

      <PaymentDetail>
        <PaymentDetailRow>
          <PaymentDetailLabel>{'기본선택'}</PaymentDetailLabel>
          <PaymentDetailValue>{PackageName}</PaymentDetailValue>
        </PaymentDetailRow>

        <PaymentDetailRow>
          <PaymentDetailLabel>{'옵션'}</PaymentDetailLabel>
          <PaymentDetailValue>{PackageOption.join(', ')}</PaymentDetailValue>
        </PaymentDetailRow>
      </PaymentDetail>
    </PaymentContainer>
  );
};

// 공통 결제 스타일 컴포넌트들
const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PaymentTitle = styled.div`
  display: flex;
  gap: 8px;
`;

const PaymentTitleText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const PaymentDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg2};
`;

const PaymentDetailRow = styled.div`
  display: flex;
  gap: 12px;
`;

const PaymentDetailLabel = styled.div`
  display: flex;
  width: 49px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const PaymentDetailValue = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #9d9d9d;
`;

interface PaymentContentTotalProps {
  PaymentPrice: string;
  PaymentCard: string;
  PaymentType: string;
}

const PaymentContentTotal = ({
  PaymentPrice,
  PaymentCard,
  PaymentType,
}: PaymentContentTotalProps) => {
  return (
    <TotalContainer>
      <TotalText>{'총 결제 금액'}</TotalText>
      <TotalPrice>{PaymentPrice}</TotalPrice>
      <TotalCard>
        {PaymentCard} / {PaymentType}
      </TotalCard>
    </TotalContainer>
  );
};

// 공통 총 결제 정보 스타일 컴포넌트들
const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TotalText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelMB};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const TotalPrice = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const TotalCard = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #878787;
`;

export {
  ReservationDetailInfoContent,
  ReservationDetailPackageContent,
  ReservationDetailPaymentContent,
  PaymentContentTotal,
};
