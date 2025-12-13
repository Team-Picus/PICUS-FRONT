import styled from '@emotion/styled';

interface DropDownMenuItem {
  label: string;
  onClick: () => void;
  color?: string; // 폰트 색상을 지정할 수 있는 옵션
}

interface DropDownMenuProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string; // 모달 제목 (옵션)
  items: DropDownMenuItem[]; // 동적으로 생성할 메뉴 아이템들
  backgroundColor?: string; // 배경색 커스터마이징 (옵션)
}

const DropDownMenu = ({ isVisible, onClose, title, items, backgroundColor }: DropDownMenuProps) => {
  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer backgroundColor={backgroundColor}>
        {title && <ModalTitle>{title}</ModalTitle>}
        {items.map((item, index) => (
          <ModalItem key={index} onClick={item.onClick} color={item.color}>
            {item.label}
          </ModalItem>
        ))}
      </ModalContainer>
    </>
  );
};

export default DropDownMenu;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 999;
`;

const ModalContainer = styled.div<{
  backgroundColor?: string;
  borderColor?: string;
}>`
  position: absolute;
  top: calc(100% - 8px + 4px);
  right: 8px;
  width: 200px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.lightMode.background.bg1};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  padding: 4px 0;
`;

const ModalTitle = styled.div`
  padding: 8px 12px;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const ModalItem = styled.div<{ color?: string }>`
  height: 40px;
  padding: 8px 12px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme, color }) => color || theme.colors.lightMode.text.text2};
  line-height: 150%;

  &:active {
    background-color: rgba(245, 247, 247, 1);
  }
`;
