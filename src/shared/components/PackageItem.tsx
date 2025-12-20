import styled from '@emotion/styled';
import { useMemo } from 'react';
import RadioButton from '@shared/components/RadioButton.tsx';
import IcCircleMinusFilled from '@icon/ic-circle-minus-filled.tsx';
import IcCirclePlusFilled from '@icon/ic-circle-plus-filled.tsx';
import IcChevronDown from '@icon/ic-chevron-down.svg';
import IcCheckNone from '@icon/ic-circle-check.svg';
import IcCheck from '@icon/ic-circle-check-filled.svg';

type PackageContent = {
  label: string;
  value?: string;
};

export interface ThemePackage {
  id: string;
  name: string;
  price: number;
  meta?: string;
  contents?: PackageContent[];
  notice?: string;
}

type SelectionType = 'radio' | 'checkbox' | 'done' | 'drop';

interface PackageItemProps {
  pkg: ThemePackage;
  selectionType: SelectionType;
  selected?: boolean;
  onToggle: () => void;
  meta?: string;
  showSettingsCount?: boolean;
  showQuantitySelector?: boolean;
}

const formatPrice = (value: number) => new Intl.NumberFormat('ko-KR').format(value);

const PackageItem = ({
  pkg,
  selectionType,
  selected = false,
  onToggle,
  meta,
  showSettingsCount = false,
  showQuantitySelector = false,
}: PackageItemProps) => {
  const isDrop = selectionType === 'drop';
  const metaText = meta ?? pkg.meta;

  const hasPanel =
    showSettingsCount ||
    showQuantitySelector ||
    Boolean(pkg.notice) ||
    Boolean(pkg.contents?.length);

  const settingsCountText = useMemo(() => {
    // TODO: 실제 설정 개수 계산 로직 연결
    return '1개';
  }, []);

  const handleHeaderClick = () => {
    onToggle();
  };

  return (
    <PackageItemContainer data-expanded={selected}>
      <PackageHeader
        type="button"
        onClick={handleHeaderClick}
        data-expanded={selected}
        aria-expanded={selected}
      >
        <HeaderLeft>
          <HeaderText data-expanded={selected}>{pkg.name}</HeaderText>
          {metaText && <HeaderText data-expanded={selected}>{metaText}</HeaderText>}
          <HeaderText data-expanded={selected}>{`${formatPrice(pkg.price)}원`}</HeaderText>
        </HeaderLeft>

        <HeaderRight>
          {(selectionType === 'radio' || selectionType === 'checkbox') && (
            <SelectionIcon>
              {selectionType === 'radio' ? (
                <RadioButton selected={selected} onChange={onToggle} />
              ) : (
                <CheckMark src={selected ? IcCheck : IcCheckNone} alt="check" />
              )}
            </SelectionIcon>
          )}

          {isDrop && (
            <Chevron data-expanded={selected}>
              <img src={IcChevronDown} alt="" />
            </Chevron>
          )}
        </HeaderRight>
      </PackageHeader>

      {selected && hasPanel && (
        <PackageDetailContainer>
          {showSettingsCount && <SettingsCount>{settingsCountText}</SettingsCount>}

          {pkg.contents && (
            <ContentList>
              {pkg.contents.map((d, idx) => (
                <ContentItem key={`${d.label}-${idx}`}>
                  {d.label} {d.value}
                </ContentItem>
              ))}
            </ContentList>
          )}

          {pkg.notice && <PackageNotice>{pkg.notice}</PackageNotice>}

          {showQuantitySelector && (
            <QuantityRow>
              <QtyButton type="button" aria-label="감소">
                <IcCircleMinusFilled />
              </QtyButton>
              <QtyValue>1</QtyValue>
              <QtyButton type="button" aria-label="증가">
                <IcCirclePlusFilled />
              </QtyButton>
            </QuantityRow>
          )}
        </PackageDetailContainer>
      )}
    </PackageItemContainer>
  );
};

export default PackageItem;

const PackageItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  &[data-expanded='true'] {
    background: ${({ theme }) => theme.colors.lightMode.background.bgColor};
  }
`;

const PackageHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;

  &[data-expanded='true'] {
    padding: 12px 16px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderText = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};

  &[data-expanded='true'] {
    font: ${({ theme }) => theme.fonts.title3};
  }
`;

const SelectionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PackageDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 16px 12px;
  gap: 16px;
`;

const CheckMark = styled.img`
  cursor: pointer;
`;

const Chevron = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;

  &[data-expanded='true'] {
    transform: rotate(-180deg);
  }
`;

const SettingsCount = styled.div`
  font: ${({ theme }) => theme.fonts.title3};
  color: #454545;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContentItem = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  color: #878686;
  line-height: 150%;
`;

const PackageNotice = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  color: #878686;
  line-height: 150%;
  white-space: pre-line;
`;

const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const QtyButton = styled.button`
  width: 19px;
  height: 19px;
  color: #454545;

  &:active {
    background: rgba(29, 29, 29, 0.05);
  }
`;

const QtyValue = styled.div`
  text-align: center;
  font: ${({ theme }) => theme.fonts.title3};
  color: #454545;
`;
