import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';
import IcCloseBig from '@icon/ic-close-big.tsx';

interface LinksModalProps {
  isVisible: boolean;
  onClose: () => void;
  links: string[];
}

type LinkItem = {
  title: string;
  subtitle: string;
  href: string;
};

const getDomainLabel = (hostname: string) => {
  if (hostname.includes('instagram.com')) return 'Instagram';
  if (hostname.includes('behance.net')) return 'Behance';
  if (hostname.includes('youtube.com')) return 'YouTube';
  if (hostname.includes('notion.so')) return 'Notion';
  return '개인 웹사이트';
};

const toLinkItem = (raw: string): LinkItem => {
  try {
    const url = new URL(raw.startsWith('http') ? raw : `https://${raw}`);
    const title = getDomainLabel(url.hostname);
    const subtitle = `${url.hostname}${url.pathname === '/' ? '' : url.pathname}`;
    return { title, subtitle, href: url.toString() };
  } catch {
    return { title: '링크', subtitle: raw, href: raw };
  }
};

const LinksModal = ({ isVisible, onClose, links }: LinksModalProps) => {
  const items = useMemo(() => links.map(toLinkItem), [links]);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <LinksModalContainer role="dialog" aria-modal="true" aria-label="링크">
        <ModalHeader>
          <ModalTitle>링크</ModalTitle>
          <CloseButton type="button" onClick={onClose} aria-label="닫기">
            <IcCloseBig />
          </CloseButton>
        </ModalHeader>

        {items.map((item) => (
          <LinkCard key={item.href}>
            <LinkIconContainer>
              <IcCloseBig />
            </LinkIconContainer>

            <TextContainer>
              <LinkTitle>{item.title}</LinkTitle>
              <Address>{item.subtitle}</Address>
            </TextContainer>

            <LinkOverlay
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} 바로가기`}
            />
          </LinkCard>
        ))}
      </LinksModalContainer>
    </>
  );
};

export default LinksModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2000;
`;

const LinksModalContainer = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 2001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 326px;
  max-width: 560px;
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border-radius: 12px;
  padding-bottom: 16px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
`;

const ModalTitle = styled.div`
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.lightMode.icon.icon2};

  &:active {
    background: rgba(29, 29, 29, 0.05);
  }
`;

const LinkCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 24px 16px;
  gap: 16px;
`;

const LinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  color: ${({ theme }) => theme.colors.lightMode.icon.iconColor};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkTitle = styled.div`
  font: ${({ theme }) => theme.fonts.labelMB};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const Address = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LinkOverlay = styled.a`
  position: absolute;
  inset: 0;
`;
