import styled from '@emotion/styled';
import { Link } from 'react-router';
import { navigationIndex } from '@shared/types/navigationIndex.ts';
import IcHome from '@icon/ic-home.tsx';
import IcExplore from '@icon/ic-explore.tsx';
import IcChat from '@icon/ic-chat.tsx';
import IcMy from '@icon/ic-my.tsx';
import { useNavigation } from '@shared/hooks/custom/useNavigation.ts';

interface NavigationProps {
  whiteBackgroundColor?: boolean;
}

const Navigation = ({ whiteBackgroundColor = false }: NavigationProps) => {
  const { activeIndex } = useNavigation();

  return (
    <NavigationContainer whiteBackgroundColor={whiteBackgroundColor}>
      <NavigationLink to="/">
        <IcHome
          active={activeIndex === navigationIndex.HOME}
          whiteBackgroundColor={whiteBackgroundColor}
        />
        <NavigationLabel
          isActive={activeIndex === navigationIndex.HOME}
          whiteBackgroundColor={whiteBackgroundColor}
        >
          Home
        </NavigationLabel>
      </NavigationLink>
      <NavigationLink to="/explore">
        <IcExplore
          active={activeIndex === navigationIndex.EXPLORE}
          whiteBackgroundColor={whiteBackgroundColor}
        />
        <NavigationLabel
          isActive={activeIndex === navigationIndex.EXPLORE}
          whiteBackgroundColor={whiteBackgroundColor}
        >
          탐색
        </NavigationLabel>
      </NavigationLink>
      <NavigationLink to="/chat">
        <IcChat
          active={activeIndex === navigationIndex.CHAT}
          whiteBackgroundColor={whiteBackgroundColor}
        />
        <NavigationLabel
          isActive={activeIndex === navigationIndex.CHAT}
          whiteBackgroundColor={whiteBackgroundColor}
        >
          채팅
        </NavigationLabel>
      </NavigationLink>
      <NavigationLink to="/my">
        <IcMy
          active={activeIndex === navigationIndex.MY}
          whiteBackgroundColor={whiteBackgroundColor}
        />
        <NavigationLabel
          isActive={activeIndex === navigationIndex.MY}
          whiteBackgroundColor={whiteBackgroundColor}
        >
          MY
        </NavigationLabel>
      </NavigationLink>
    </NavigationContainer>
  );
};

export default Navigation;

interface ActiveLinkProps extends NavigationProps {
  isActive: boolean;
}

const NavigationContainer = styled.div<NavigationProps>`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 16px;
  background-color: ${({ theme, whiteBackgroundColor }) =>
    whiteBackgroundColor
      ? theme.colors.lightMode.background.bg1
      : theme.colors.lightMode.brand.primary};
  gap: 28px;

  @media (max-width: 440px) {
    justify-content: space-between;
  }
`;

const NavigationLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const NavigationLabel = styled.div<ActiveLinkProps>`
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme, isActive, whiteBackgroundColor }) =>
    whiteBackgroundColor
      ? isActive
        ? theme.colors.lightMode.text.text1
        : theme.colors.lightMode.icon.iconDisabled
      : isActive
        ? theme.colors.lightMode.text.text1
        : theme.colors.lightMode.brand.dark};
  text-align: center;
  width: 15vw;

  @media (max-width: 440px) {
    width: 69px;
  }
`;
