import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import { BottomTap, Header, InlineButton, SelectMenuButton } from '@shared/components';
import { usePackageFormTabs } from '@widget/my/feature/usePackageFormTabs.ts';
import ProgressBar from '@widget/my/component/ProgressBar.tsx';
import TextField from '@shared/components/TextField.tsx';
import TextAreaField from '@shared/components/TextAreaField.tsx';
import Tabs from '@shared/components/Tabs.tsx';
import ShapeButton from '@shared/components/ShapeButton.tsx';
import IcPlus from '@icon/ic-plus.svg';

const THEME_OPTIONS = ['패션', '뷰티', '행사', '웨딩', '스냅'] as const;

const AddThemePage = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [theme, setTheme] = useState<string>('');
  const [activePackageIndex, setActivePackageIndex] = useState(0);
  const [packages, setPackages] = useState([{ name: '', price: '', contents: [''], notice: '' }]);
  const { items, activeId, indicatorStyle, setTabRef } = usePackageFormTabs({
    count: packages.length,
    activeIndex: activePackageIndex,
  });
  const currentPkg = packages[activePackageIndex];

  const canSave = useMemo(() => {
    // UI 기준 최소 validation (필요하면 늘리면 됨)
    if (!theme) return false;
    if (!currentPkg.name.trim()) return false;
    if (!currentPkg.price.trim()) return false;
    return !currentPkg.contents.some((c) => !c.trim());
  }, [theme, currentPkg]);

  const handleSelectTheme = (selected: string) => {
    setTheme(selected);
    setStep(1);
  };

  const handleAddPackageTab = () => {
    setPackages((prev) => [...prev, { name: '', price: '', contents: [''], notice: '' }]);
    setActivePackageIndex(packages.length); // append된 index
  };

  const handleChangePackageField = (patch: Partial<(typeof packages)[number]>) => {
    setPackages((prev) => prev.map((p, i) => (i === activePackageIndex ? { ...p, ...patch } : p)));
  };

  const handleChangeContent = (idx: number, next: string) => {
    setPackages((prev) =>
      prev.map((p, i) => {
        if (i !== activePackageIndex) return p;
        const nextContents = p.contents.map((c, j) => (j === idx ? next : c));
        return { ...p, contents: nextContents };
      }),
    );
  };

  const handleAddContentLine = () => {
    setPackages((prev) =>
      prev.map((p, i) => (i === activePackageIndex ? { ...p, contents: [...p.contents, ''] } : p)),
    );
  };

  const handleSave = () => {
    // TODO: API 연결
    console.log('save (UI draft):', { theme, packages });
  };

  return (
    <AddThemePageContainer>
      <Header isBack title="가격 구성 추가" />
      <ContentContainer>
        <ProgressBar labels={['테마', '기본', '추가 옵션']} current={step} />
        <Content>
          <StepSection>
            <StepHeader>
              <StepBadge>1</StepBadge>
              <StepTitle>테마</StepTitle>
            </StepHeader>

            <FieldGroup>
              <FieldLabel>
                테마 <Required>*</Required>
              </FieldLabel>

              <SelectMenuButton
                title={theme ? theme : '테마를 선택해주세요.'}
                isActive={!!theme}
                contents={THEME_OPTIONS as unknown as string[]}
                dropDownTitle="테마"
                onSelect={handleSelectTheme}
                size="L"
              />
            </FieldGroup>
          </StepSection>

          <StepSection>
            <StepHeader>
              <StepBadge>2</StepBadge>
              <StepTitle>기본</StepTitle>
            </StepHeader>
            <TabsWrapper>
              <Tabs
                items={items}
                activeId={activeId}
                onChange={(id) => {
                  const idx = Number(id.replace('pkg-', ''));
                  setActivePackageIndex(idx);
                  setStep(1);
                }}
                indicatorStyle={indicatorStyle}
                setTabRef={(id) => setTabRef(id)}
                borderColor="none" // 필요 없으면 제거
              />

              <AddTabButton type="button" onClick={handleAddPackageTab}>
                +
              </AddTabButton>
            </TabsWrapper>

            <FormBlock>
              <ContentsBlock>
                <FieldLabel>
                  패키지명 <Required>*</Required>
                </FieldLabel>
                <TextField
                  placeholder="패키지명을 입력해주세요."
                  value={currentPkg.name}
                  onChange={(e) => handleChangePackageField({ name: e.target.value })}
                />
              </ContentsBlock>
              <ContentsBlock>
                <FieldLabel>
                  가격 <Required>*</Required>
                </FieldLabel>
                <TextField
                  placeholder="해당 패키지의 가격을 숫자로 입력해주세요."
                  value={currentPkg.price}
                  onChange={(e) =>
                    handleChangePackageField({ price: e.target.value.replace(/\D/g, '') })
                  }
                />
              </ContentsBlock>

              <ContentsBlock>
                <FieldLabel>
                  패키지 내용 <Required>*</Required>
                </FieldLabel>
                <Hint>ex) 셀렉 보정본 10장</Hint>

                {currentPkg.contents.map((c, idx) => (
                  <TextField
                    key={`content-${idx}`}
                    placeholder="제공 구성을 입력해주세요."
                    value={c}
                    onChange={(e) => handleChangeContent(idx, e.target.value)}
                  />
                ))}
                <ShapeButton
                  variant="rectangle"
                  icon={{ icon: IcPlus, alt: '추가' }}
                  onClick={handleAddContentLine}
                />
              </ContentsBlock>

              <TextAreaField
                showLabel
                label="비고"
                placeholder="패키지 내용에 대한 추가 설명을 입력해주세요."
                value={currentPkg.notice}
                onChange={(e) => handleChangePackageField({ notice: e.target.value })}
              />
            </FormBlock>
          </StepSection>

          <StepSection>
            <StepHeader>
              <StepBadge>3</StepBadge>
              <StepTitle>추가 옵션</StepTitle>
            </StepHeader>

            <ButtonWrapper>
              <InlineButton
                variant="ghost"
                size="L"
                text="추가하기"
                width="80px"
                onClick={() => setStep(2)}
              />
            </ButtonWrapper>
          </StepSection>
        </Content>

        {/* 하단 고정 */}
        <BottomTap
          showGhost={false}
          secondaryText="저장하기"
          secondaryDisabled={!canSave}
          onSecondaryClick={handleSave}
          isPushRight={false}
        />
      </ContentContainer>
    </AddThemePageContainer>
  );
};

export default AddThemePage;

const AddThemePageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 80px;
`;

const StepSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
`;

const StepBadge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1w};
  line-height: 150%;
`;

const StepTitle = styled.div`
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 8px;
`;

const FieldLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.lightMode.semantic.error};
`;

const Hint = styled.div`
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const TabsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #eeeeee;
  gap: 12px;
`;

const AddTabButton = styled.button`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
  padding: 12px 8px;
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 24px;
`;

const ContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonWrapper = styled.div`
  padding: 0 16px;
`;
