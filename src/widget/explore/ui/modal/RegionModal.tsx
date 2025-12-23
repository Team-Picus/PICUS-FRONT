import { useState } from 'react';
import { type KoreaRegions, regions } from '@widget/explore/feature/const/koreaRegions.ts';
import styled from '@emotion/styled';
import type { ActiveProps } from '@shared/types/active.ts';
import IcDeleteFilled from '@icon/ic-delete-filled.svg';

interface RegionModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const RegionModal = ({ isOpen, onClose }: RegionModalProps) => {
  const [selectedRegion, setSelectedRegion] = useState<KoreaRegions>('서울');
  const [selectedSubRegions, setSelectedSubRegions] = useState<string[]>([]);

  const onClickSubRegion = (subRegion: string) => {
    if (selectedSubRegions.includes(subRegion)) {
      setSelectedSubRegions(selectedSubRegions.filter((region) => region !== subRegion));
    } else {
      setSelectedSubRegions([...selectedSubRegions, subRegion]);
    }
  };

  const deleteSelectedSubRegion = (subRegion: string) => {
    setSelectedSubRegions(selectedSubRegions.filter((region) => region !== subRegion));
  };

  const includeSubRegion = (subRegion: string): boolean => {
    return selectedSubRegions.includes(subRegion);
  };

  const onClickAllRegions = () => {
    setSelectedSubRegions(Object.values(regions).flat());
    setSelectedSubRegions([`${selectedRegion} 전체`]);
  };

  if (!isOpen) return null;
  return (
    <RegionModalOverlay>
      <RegionModalContainer>
        {/* Title */}
        <RegionModalTitle>
          <span>외부 지역 선택</span>
          <span>(중복 선택 가능)</span>
        </RegionModalTitle>
        {/* 지역 목록 */}
        <RegionListSection>
          <RegionList>
            {Object.keys(regions).map((key) => (
              <RegionListItem
                key={key}
                active={selectedRegion === key}
                onClick={() => setSelectedRegion(key as KoreaRegions)}
              >
                {key}
              </RegionListItem>
            ))}
          </RegionList>
          <SubRegionList>
            <SubRegionListItem
              onClick={() => onClickAllRegions()}
              active={selectedSubRegions.includes(`${selectedRegion} 전체`)}
            >
              전체
            </SubRegionListItem>
            {selectedRegion
              ? regions[selectedRegion].sort().map((subRegion) => (
                  <SubRegionListItem
                    key={subRegion}
                    active={includeSubRegion(subRegion)}
                    onClick={() => onClickSubRegion(subRegion)}
                  >
                    {subRegion}
                  </SubRegionListItem>
                ))
              : null}
          </SubRegionList>
        </RegionListSection>
        {/* 선택한 지역 */}
        <SelectedRegionList>
          {selectedSubRegions.map((subRegion) => (
            <SelectedRegionItem key={subRegion}>
              {subRegion}
              <img src={IcDeleteFilled} alt="" onClick={() => deleteSelectedSubRegion(subRegion)} />
            </SelectedRegionItem>
          ))}
        </SelectedRegionList>
        {/* 저장 버튼 */}
        <ButtonSection>
          <SaveButton onClick={onClose}>저장</SaveButton>
        </ButtonSection>
      </RegionModalContainer>
    </RegionModalOverlay>
  );
};

export default RegionModal;

const RegionModalOverlay = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const RegionModalContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  gap: 12px;

  @media (min-width: 768px) {
    width: 560px;
  }
`;

const RegionModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 16px 16px 16px;

  span:first-of-type {
    font: ${({ theme }) => theme.fonts.title3};
    color: ${({ theme }) => theme.colors.lightMode.text.text3};
  }

  span:last-of-type {
    margin-left: 8px;
    font: ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.lightMode.text.text3};
    line-height: 20px;
  }
`;

const RegionListSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 253px;
  padding: 0 16px;
  border-radius: 8px;
`;

const RegionList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const RegionListItem = styled.div<ActiveProps>`
  padding: 8px 24px;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.brand.primary : theme.colors.lightMode.text.text2};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.icon.icon : 'transparent'};
  text-align: center;
  cursor: pointer;
`;

const SubRegionList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg2};
`;

const SubRegionListItem = styled.div<ActiveProps>`
  padding: 8px 24px;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.lightMode.background.bg4 : 'transparent'};
  cursor: pointer;
`;

const SelectedRegionList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  white-space: nowrap;
  padding: 8px 16px;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  visibility: visible;
  min-height: 49px;
`;

const SelectedRegionItem = styled.div`
  padding: 5.5px 8px 5.5px 12px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.icon.icon};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg2};
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 18px;
    height: 18px;
    margin-left: 4px;
    cursor: pointer;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  padding: 8px 16px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const SaveButton = styled.button`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  background-color: ${({ theme }) => theme.colors.lightMode.icon.icon};
  font: ${({ theme }) => theme.fonts.labelM};
  padding: 8px 62px;
  border-radius: 8px;
`;
