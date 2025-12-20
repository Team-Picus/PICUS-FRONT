import styled from '@emotion/styled';
import { InlineButton } from '@shared/components';
import type { ThemePackage } from '@shared/components/PackageItem.tsx';
import SectionHeader from '@shared/components/SectionHeader.tsx';
import PackageList from '@widget/my/ui/main/PackageList.tsx';

type ReferenceImage = {
  id: string;
  src: string;
  alt: string;
};

interface ThemeProps {
  themeLabel: string;
  images: ReferenceImage[];
  packages: ThemePackage[];
  onRequestClick?: () => void;
}

const PriceTheme = ({ themeLabel, images, packages, onRequestClick }: ThemeProps) => {
  return (
    <ThemeContainer>
      <ThemeHeaderContainer>
        <SectionHeader text={themeLabel} />
        <InlineButton
          variant="secondary"
          size="M"
          text="요청"
          width="80px"
          onClick={onRequestClick}
        />
      </ThemeHeaderContainer>
      <ThemeMediaSection>
        <ThemeMediaScroller aria-label={`${themeLabel} 참고 이미지`}>
          {images.map((img) => (
            <ThemeMediaItem key={img.id}>
              <ThemeMediaImage src={img.src} alt={img.alt} />
            </ThemeMediaItem>
          ))}
        </ThemeMediaScroller>
      </ThemeMediaSection>
      <ThemePackagesSection>
        <PackageList packages={packages} />
      </ThemePackagesSection>
    </ThemeContainer>
  );
};

export default PriceTheme;

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const ThemeHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThemeMediaSection = styled.div`
  width: 100%;
`;

const ThemeMediaScroller = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ThemeMediaItem = styled.div`
  flex: 0 0 auto;
  width: 174px;
  height: 232px;
  overflow: hidden;
  scroll-snap-align: start;
  background: ${({ theme }) => theme.colors.lightMode.background.bg2};
`;

const ThemeMediaImage = styled.img`
  display: block;
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: 100%;
`;

const ThemePackagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
