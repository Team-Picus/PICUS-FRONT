import styled from '@emotion/styled';
import IcPicusLogo from '@icon/ic-picus-logo.svg';
import type { HeaderIcon } from '@shared/types/header.ts';

interface HeaderProps {
  title?: string;
  icons?: HeaderIcon[];
}

const Header = ({ title, icons }: HeaderProps) => {
  return (
    <HeaderContainer>
      {title ? <Title>{title}</Title> : <Logo src={IcPicusLogo} alt="" />}
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

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  padding: 8px 8px 8px 16px;
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

const Icon = styled.img`
  padding: 8px;
`;
