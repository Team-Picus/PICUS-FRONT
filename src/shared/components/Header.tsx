import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import IcPicusLogo from '@icon/ic-picus-logo.svg';
import IcBack from '@icon/ic-arrow-back-up.svg';
import type { HeaderIcon } from '@shared/types/header.ts';
import { useNavigate } from 'react-router';

interface HeaderProps {
  back?: boolean;
  title?: string;
  icons?: HeaderIcon[];
  isBack?: boolean; // 뒤로가기 아이콘 활성화 시 사용합니다. true로 지정 시 활성화 됩니다.
  onBackClick?: () => void; // 뒤로가기 버튼 클릭 시 호출되는 콜백 함수입니다.
  backgroundColor?: string; // 헤더 배경색을 지정합니다. 기본값은 primary입니다.
  isLogo?: boolean; // 로고 표시 여부를 지정합니다. true로 지정 시 로고가 표시됩니다.
  inlineButton?: { show: boolean; text: string }; // 인라인 버튼 표시 여부와 텍스트를 지정합니다.
}

const Header = ({
  title,
  icons,
  isBack,
  onBackClick,
  backgroundColor,
  isLogo,
  inlineButton,
}: HeaderProps) => {
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
        {inlineButton?.show && <InlineButton>{inlineButton.text}</InlineButton>}
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
  font: ${({ theme }) => theme.fonts.body2};
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

const InlineButton = styled.button`
  display: flex;
  heigth: 40px;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;
