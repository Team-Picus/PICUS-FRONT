import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import IcPicusLogo from '@icon/ic-picus-logo.svg';
import IcBack from '@icon/ic-arrow-back-up.svg';
import type { HeaderIcon } from '@shared/types/header.ts';

interface HeaderProps {
  title?: string;
  icons?: HeaderIcon[];
  isBack?: boolean; // 뒤로가기 아이콘 활성화 시 사용합니다. true로 지정 시 활성화 됩니다.
  onBackClick?: () => void; // 뒤로가기 버튼 클릭 시 호출되는 콜백 함수입니다.
  backgroundColor?: string; // 헤더 배경색을 지정합니다. 기본값은 primary입니다.
  isLogo?: boolean; // 로고 표시 여부를 지정합니다. true로 지정 시 로고가 표시됩니다.
}

const Header = ({ title, icons, isBack, onBackClick, backgroundColor, isLogo }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <HeaderContainer isBack={isBack} backgroundColor={backgroundColor}>
      <HeaderLeftSection>
        {isBack && (
          <BackIconWrapper onClick={handleBackClick}>
            <BackIcon src={IcBack} alt="back" />
          </BackIconWrapper>
        )}
        {title && <Title>{title}</Title>}
        {isLogo && <Logo src={IcPicusLogo} alt="" />}
      </HeaderLeftSection>
      <HeaderIconsContainer>
        {icons &&
          icons.map((icon, index) => (
            <Icon
              src={icon.src}
              alt={icon.alt}
              key={index}
              onClick={icon.onClick}
              isActive={icon.isActive || false}
            />
          ))}
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;

interface HeaderContainerProps {
  isBack?: boolean;
  backgroundColor?: string;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.lightMode.brand.primary};
  padding: ${({ isBack }) => (isBack ? '8px 4px 8px 4px' : '8px 8px 8px 16px')};
`;

const HeaderLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const BackIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.div`
  font: ${({ theme }) => theme.fonts.labelMB};
  font-size: 16px;
  margin: 8px 0;
`;

const Logo = styled.img`
  padding: 3px 0;
`;

const HeaderIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

interface IconProps {
  isActive: boolean;
}

const Icon = styled.img<IconProps>`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? 'rgba(29, 29, 29, 0.05)' : 'transparent')};

  &:active {
    background-color: rgba(29, 29, 29, 0.05);
  }
`;
