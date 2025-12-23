import styled from '@emotion/styled';
import { S } from '@widget/my/ui/main';
import { InlineButton } from '@shared/components';
import PackageList from '@widget/my/ui/main/profile/PackageList.tsx';
import { friendshipPackages, weddingPackages } from '@widget/my/feature/mock.ts';
import type { ThemePackage } from '@shared/components/PackageItem.tsx';
import SectionHeader from '@shared/components/SectionHeader.tsx';
import { useNavigate } from 'react-router';

type Theme = {
  id: string;
  label: string;
  packages: ThemePackage[];
};

const MOCK_THEMES: Theme[] = [
  {
    id: 'wedding',
    label: '웨딩',
    packages: weddingPackages,
  },
  {
    id: 'friendship',
    label: '우정',
    packages: friendshipPackages,
  },
];

const PriceCompositionEdit = () => {
  const navigate = useNavigate();
  const handleAddTheme = () => {
    navigate('theme/create');
  };

  const handleThemeSetting = (themeId: string) => {
    // TODO: 테마 설정 모달/페이지 연결
    console.log('theme setting:', themeId);
  };

  return (
    <S.EditTapViewContainer>
      <AddThemeCard>
        <AddThemeTitle>{`테마 추가`}</AddThemeTitle>
        <AddThemeDesc>
          {`작가님이 활동할 서비스의 종류와 가격을 설정합니다.\n테마를 개설하고 패키지와 옵션을 설정하세요.`}
        </AddThemeDesc>
        <InlineButton variant="primary" size="L" text="추가하기" onClick={handleAddTheme} />
      </AddThemeCard>

      <ThemeList>
        {MOCK_THEMES.map((theme) => (
          <ThemeSection key={theme.id}>
            <ThemeHeader>
              <ThemeTitle>{theme.label}</ThemeTitle>
              <ThemeSettingButton type="button" onClick={() => handleThemeSetting(theme.id)}>
                {`설정`}
              </ThemeSettingButton>
            </ThemeHeader>

            <PackageGroup>
              <SectionHeader text="기본" size="M" />
              <PackageList packages={theme.packages} />
            </PackageGroup>

            <PackageGroup>
              <GroupHeader>
                <SectionHeader text="추가 옵션" size="M" />
                <GroupCaption>{`(중복 선택 가능)`}</GroupCaption>
              </GroupHeader>
              <PackageList packages={theme.packages} />
            </PackageGroup>
          </ThemeSection>
        ))}
      </ThemeList>
    </S.EditTapViewContainer>
  );
};

export default PriceCompositionEdit;

const AddThemeCard = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  padding: 16px;
  gap: 16px;
`;

const AddThemeTitle = styled.div`
  font: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1w};
`;

const AddThemeDesc = styled.div`
  white-space: pre-line;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
`;

const ThemeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const ThemeSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 24px;
`;

const ThemeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ThemeTitle = styled.div`
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ThemeSettingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider2};
  border-radius: 8px;
  padding: 12px;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  }
  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider2};
  }
`;

const PackageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fonts.labelMB};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  gap: 8px;
`;

const GroupCaption = styled.span`
  font-family: 'Pretendard', 'system-ui';
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;
