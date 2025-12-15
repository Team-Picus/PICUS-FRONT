import styled from '@emotion/styled';

interface ProgressBarProps {
  current: 0 | 1 | 2;
}

const ProgressBar = ({ current }: ProgressBarProps) => {
  const labels = ['프로필 작성', '소속 작성', '포트폴리오 공유'];
  return (
    <BarContainer>
      {labels.map((label, i) => (
        <Item key={label}>
          <Track>
            <Fill data-active={i <= current} />
          </Track>
          <StepLabel data-active={i <= current}>{label}</StepLabel>
        </Item>
      ))}
    </BarContainer>
  );
};

export default ProgressBar;

const BarContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 12px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  flex: 1;
`;

const Track = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  overflow: hidden;
  }
`;

const Fill = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral1100};
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.35s ease;
  &[data-active='true'] {
    transform: scaleX(1);
  }
`;

const StepLabel = styled.div`
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  &[data-active='true'] {
    color: ${({ theme }) => theme.colors.lightMode.text.text1};
  }
`;
