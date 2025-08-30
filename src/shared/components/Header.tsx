import styled from '@emotion/styled';
import IcPicusLogo from '@icon/ic-picus-logo.svg';
import IcBack from '@icon/ic-arrow-back-up.svg';
import type { HeaderIcon } from '@shared/types/header.ts';
import { useNavigate } from 'react-router';

interface HeaderProps {
  back?: boolean;
  title?: string;
  icons?: HeaderIcon[];
}

const Header = ({ back, title, icons }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer back={back}>
      <HeaderTitleContainer>
        {back && <BackIcon src={IcBack} alt="이전" onClick={() => navigate(-1)}></BackIcon>}
        {title ? <Title>{title}</Title> : <Logo src={IcPicusLogo} alt="" />}
      </HeaderTitleContainer>
      <HeaderIconsContainer>
        {icons &&
          icons.map((icon, index) => (
            <Icon src={icon.src} alt={icon.alt} key={index} onClick={icon.onClick} />
          ))}
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header<{ back?: boolean }>`
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  padding: 8px 0;
  padding-left: ${({ back }) => (back ? '4px' : '16px')};
`;

const BackIcon = styled.img`
  cursor: pointer;
`;

const HeaderTitleContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
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

const Icon = styled.img`
  padding: 8px;
  cursor: pointer;
`;
