import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import type { MenuItemProps } from '@widget/my/types/menu.ts';

interface MenuProps {
  title: string;
  menuList: MenuItemProps[];
}

const Menu = ({ title, menuList }: MenuProps) => {
  const navigate = useNavigate();

  const handleClick = (route?: string, onClick?: () => void) => {
    if (onClick) {
      onClick();
    } else if (route) {
      navigate(route);
    }
  };

  return (
    <MenuContainer>
      <MenuTitle>{title}</MenuTitle>
      <div>
        {menuList.map(({ label, route, onClick }, index) => (
          <MenuItem key={index} onClick={() => handleClick(route, onClick)}>
            {label}
          </MenuItem>
        ))}
      </div>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  gap: 16px;
`;

const MenuTitle = styled.div`
  padding-left: 4px;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const MenuItem = styled.div`
  padding: 12px 4px;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.labelM};
`;
