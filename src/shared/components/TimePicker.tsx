import styled from '@emotion/styled';
import { useMemo, useRef, useState } from 'react';
import { SelectMenuButton } from '@shared/components/index.ts';
import { useOutsideClose } from '@shared/hooks/custom/useOutsideClose.ts';

export type TimePeriod = 'AM' | 'PM';

export type TimeValue = {
  period: TimePeriod;
  hour: number; // 1~12
  minute: number; // 0~59
};

type TimePickerProps = {
  value: TimeValue;
  onChange: (next: TimeValue) => void;
  minuteStep?: number; // 1, 5, 10...
  disabled?: boolean;
};

// 2자리 패딩 (ex. 1 -> 01)
const pad2 = (n: number) => String(n).padStart(2, '0');

const formatTimeLabel = (v: TimeValue) => {
  const periodLabel = v.period === 'AM' ? '오전' : '오후';
  return `${periodLabel} ${v.hour}:${pad2(v.minute)}`;
};

const TimePicker = ({ value, onChange, minuteStep = 1, disabled }: TimePickerProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useOutsideClose({
    isOpen: open,
    rootRef,
    onClose: close,
  });

  const toggle = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
  };

  const label = useMemo(() => formatTimeLabel(value), [value]);

  const periods = useMemo(() => ['오전', '오후'], []);

  const hours = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  const minutes = useMemo(() => {
    const step = Math.max(1, minuteStep);
    const ms: number[] = [];
    for (let m = 0; m < 60; m += step) ms.push(m);
    return ms;
  }, [minuteStep]);

  return (
    <Root ref={rootRef}>
      <Trigger type="button" onClick={toggle} disabled={disabled} aria-expanded={open}>
        <TriggerText>{label}</TriggerText>
      </Trigger>
      {open && (
        <Panel role="dialog">
          <Row>
            <SelectMenuButton
              title={value.period === 'AM' ? '오전' : '오후'}
              isActive
              contents={periods}
              onSelect={(selected) =>
                onChange({ ...value, period: selected === '오전' ? 'AM' : 'PM' })
              }
              containerStyle={{ flex: 1 }}
            />
            <SelectMenuButton
              title={pad2(value.hour)}
              isActive
              contents={hours.map(pad2)}
              onSelect={(selected) => onChange({ ...value, hour: Number(selected) })}
              containerStyle={{ flex: 1 }}
            />
            <SelectMenuButton
              title={pad2(value.minute)}
              isActive
              contents={minutes.map(pad2)}
              onSelect={(selected) => onChange({ ...value, minute: Number(selected) })}
              containerStyle={{ flex: 1 }}
            />
          </Row>
        </Panel>
      )}
    </Root>
  );
};

export default TimePicker;

export const Root = styled.div`
  position: relative;
  width: 100%;
`;

export const Trigger = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral300};
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  padding: 8px;

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.lightMode.background.bg4};
    border-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  }
  &:active,
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.lightMode.background.bg2};
    border: ${({ theme }) => `1px solid ${theme.colors.lightMode.neutral.neutral300}`};
  }
`;

export const TriggerText = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

export const Panel = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  z-index: 1000;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  padding: 16px 12px;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
`;
