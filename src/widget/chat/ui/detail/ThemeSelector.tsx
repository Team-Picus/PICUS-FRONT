import styled from '@emotion/styled';

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeSelect: (theme: string) => void;
  themes?: string[];
}

const ThemeSelector = ({
  selectedTheme,
  onThemeSelect,
  themes = ['패션', '뷰티', '라이프스타일', '푸드', '여행'],
}: ThemeSelectorProps) => {
  const handleThemeClick = (theme: string) => {
    onThemeSelect(theme);
  };

  return (
    <>
      <ThemeContent>
        {themes.map((theme) => (
          <ThemeItem
            key={theme}
            onClick={() => handleThemeClick(theme)}
            isSelected={selectedTheme === theme}
          >
            {theme}
          </ThemeItem>
        ))}
      </ThemeContent>

      <ThemeTextContainer>
        <ThemeText>
          클라이언트의 주문서 :&nbsp;
          <ThemeText>{selectedTheme}</ThemeText>
        </ThemeText>
      </ThemeTextContainer>
    </>
  );
};

export default ThemeSelector;

const ThemeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const ThemeItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px 0;
  border-radius: 12px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.lightMode.icon.icon : theme.colors.lightMode.background.bg2};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.lightMode.text.text1color : theme.colors.lightMode.text.text3};
  font: ${({ theme }) => theme.fonts.body2};
  align-items: center;
  justify-content: center;
  text-align: center;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;
`;

const ThemeTextContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg4};
  align-items: center;
  justify-content: start;
`;

const ThemeText = styled.div`
  display: flex;
  text-align: start;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;
