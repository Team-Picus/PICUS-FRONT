import React from 'react';
import styled from '@emotion/styled';
import PackageInfoItem from '../ui/detail/payment/PackageInfoItem';

interface PackageItem {
  id: string;
  name: string;
  price: string;
  items: string[];
  info: string;
}

interface PackageInfoContainerProps {
  selectedPackage: string | null;
  onPackageSelect: (packageName: string) => void;
  packages: PackageItem[];
}

const PackageInfoContainer = ({
  selectedPackage,
  onPackageSelect,
  packages,
}: PackageInfoContainerProps) => {
  return (
    <>
      {/* 기본 컨테이너 입니다. */}
      <ContentContainer>
        {packages.map((pkg, index) => (
          <React.Fragment key={pkg.id}>
            <PackageInfoItem
              package={pkg}
              isSelected={selectedPackage === pkg.name}
              onPackageSelect={onPackageSelect}
            />
            {index < packages.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ContentContainer>
      <ThemeTextContainer>
        <ThemeText>
          클라이언트의 주문서 :&nbsp;
          <ThemeText>{selectedPackage}</ThemeText>
        </ThemeText>
      </ThemeTextContainer>
    </>
  );
};

export default PackageInfoContainer;

// Styled Components
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightMode.divider.divider1};
`;
const ThemeTextContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  align-items: center;
  justify-content: start;
`;

const ThemeText = styled.div`
  display: flex;
  text-align: start;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;
