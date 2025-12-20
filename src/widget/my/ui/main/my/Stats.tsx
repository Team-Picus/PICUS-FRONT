import styled from '@emotion/styled';
import { Fragment, type ReactNode } from 'react';

type StatItem = {
  label: string;
  value: ReactNode;
  onClick?: () => void;
};

interface ProfileOverviewCardProps {
  stats?: StatItem[];
  labelColor?: string;
}

const Stats = ({ stats = [], labelColor }: ProfileOverviewCardProps) => {
  return (
    <StatsContainer>
      {stats.map((s, idx) => (
        <Fragment key={`${s.label}-${idx}`}>
          <Stat type="button" onClick={s.onClick} data-clickable={Boolean(s.onClick)}>
            <Label $labelColor={labelColor}>{s.label}</Label>
            <StatValue>{s.value}</StatValue>
          </Stat>
          {idx !== stats.length - 1 && <Divider aria-hidden />}
        </Fragment>
      ))}
    </StatsContainer>
  );
};

export default Stats;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Stat = styled.button`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 0 8px;
  gap: 4px;

  &[data-clickable='true'] {
    cursor: pointer;
  }
`;

const Label = styled.div<{
  $labelColor?: string;
}>`
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ $labelColor }) => $labelColor ?? '#6f6f6f'};
`;

const StatValue = styled.div`
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const Divider = styled.div`
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider2};
`;
