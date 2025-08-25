// 패키지 정보 아이템 컴포넌트 입니다.
import styled from '@emotion/styled';

interface PackageItem {
  id: string;
  name: string;
  price: string;
  items: string[];
  info: string;
}

interface PackageInfoItemProps {
  package: PackageItem;
  isSelected: boolean;
  onPackageSelect: (packageName: string) => void;
}

const PackageInfoItem = ({ package: pkg, isSelected, onPackageSelect }: PackageInfoItemProps) => {
  const handlePackageClick = () => {
    onPackageSelect(pkg.name);
  };

  // 패키지 정보 데이터를 배열로 구성
  const packageInfo = [
    { key: 'name', value: pkg.name },
    { key: 'price', value: pkg.price },
  ];

  if (isSelected) {
    return (
      <ClickedContainer>
        <ClickedHeader>
          <ItemTitle>
            {packageInfo.map((info) => (
              <ItemInfo key={info.key}>{info.value}</ItemInfo>
            ))}
          </ItemTitle>
          <CheckBox onClick={handlePackageClick}>
            <CheckBoxInner />
          </CheckBox>
        </ClickedHeader>

        <DetailInfo>
          {pkg.items.map((item, itemIndex) => (
            <DetailItemText key={itemIndex}>{item}</DetailItemText>
          ))}
        </DetailInfo>

        <DetailItemText>{pkg.info}</DetailItemText>
      </ClickedContainer>
    );
  }

  return (
    <ItemContainer onClick={handlePackageClick}>
      <ItemTitle>
        {packageInfo.map((info) => (
          <ItemInfo key={info.key}>{info.value}</ItemInfo>
        ))}
      </ItemTitle>
      <CheckBox />
    </ItemContainer>
  );
};

export default PackageInfoItem;

// Styled Components
const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 12px 8px;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
`;

const ItemTitle = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const ItemInfo = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const CheckBox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
`;

const ClickedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f7;
  width: 100%;
  padding: 12px 16px;
  gap: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

const ClickedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckBoxInner = styled.div`
  width: 13.33px;
  height: 13.33px;
  border-radius: 16px;
  background-color: #1d1d1d;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const DetailItemText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #878686;
`;
