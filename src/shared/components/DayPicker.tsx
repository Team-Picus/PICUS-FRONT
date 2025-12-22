import { Root, Trigger, TriggerText, Panel, Row } from '@shared/components/TimePicker.tsx';
import { useMemo, useRef, useState } from 'react';
import { SelectMenuButton } from '@shared/components/index.ts';
import { useOutsideClose } from '@shared/hooks/custom/useOutsideClose.ts';

// 공통 props
type CommonProps = {
  disabled?: boolean;
  yearRange?: { start: number; end: number }; // 연도 옵션 범위 start, end 포함
};

export type YearMonthValue = { year: number; month: number };
export type YearMonthDayValue = { year: number; month: number; day: number };

// 년/월만 선택
type YMProps = CommonProps & {
  mode?: 'ym';
  value: YearMonthValue;
  onChange: (next: YearMonthValue) => void;
};

// 년/월/일 선택
type YMDProps = CommonProps & {
  mode: 'ymd';
  value: YearMonthDayValue;
  onChange: (next: YearMonthDayValue) => void;
};

type DayPickerProps = YMProps | YMDProps;

// 2자리 패딩 (ex. 1 -> 01)
const pad2 = (n: number) => String(n).padStart(2, '0');

// 특정 year/month에서 유효한 일(day) 범위로 보정
const clampDay = (year: number, month: number, day: number) => {
  const last = new Date(year, month, 0).getDate();
  return Math.min(Math.max(day, 1), last);
};

const formatDayLabel = (props: DayPickerProps) => {
  if (props.mode !== 'ymd') return `${props.value.year}년 ${props.value.month}월`;

  const v = props.value;
  const date = new Date(v.year, v.month - 1, v.day);
  const weekday = date.toLocaleDateString('ko-KR', { weekday: 'long' });
  return `${v.year}년 ${v.month}월 ${v.day}일 ${weekday}`;
};

const DayPicker = ({ disabled, ...props }: DayPickerProps) => {
  const isYmd = props.mode === 'ymd';

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

  const label = useMemo(() => formatDayLabel(props), [props]);

  const years = useMemo(() => {
    const now = new Date();
    const start = props.yearRange?.start ?? now.getFullYear() - 10;
    const end = props.yearRange?.end ?? now.getFullYear() + 10;

    const ys: number[] = [];
    for (let y = start; y <= end; y += 1) ys.push(y);
    return ys;
  }, [props.yearRange]);

  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  const days = useMemo(() => {
    if (!isYmd) return [];
    const last = new Date(props.value.year, props.value.month, 0).getDate();
    return Array.from({ length: last }, (_, i) => i + 1);
  }, [isYmd, props.value.year, props.value.month]);

  const handleYearChange = (selected: string) => {
    const nextYear = Number(selected);

    if (isYmd) {
      const prev = props.value; // 여기선 YearMonthDayValue로 좁혀짐
      const nextDay = clampDay(nextYear, prev.month, prev.day);
      props.onChange({ year: nextYear, month: prev.month, day: nextDay });
      return;
    }

    props.onChange({ year: nextYear, month: props.value.month });
  };

  const handleMonthChange = (selected: string) => {
    const nextMonth = Number(selected);

    if (isYmd) {
      const prev = props.value;
      const nextDay = clampDay(prev.year, nextMonth, prev.day);
      props.onChange({ year: prev.year, month: nextMonth, day: nextDay });
      return;
    }

    props.onChange({ year: props.value.year, month: nextMonth });
  };

  const handleDayChange = (selected: string) => {
    if (!isYmd) return;
    const prev = props.value;
    props.onChange({ ...prev, day: Number(selected) });
  };

  return (
    <Root ref={rootRef}>
      <Trigger type="button" onClick={toggle} disabled={disabled} aria-expanded={open}>
        <TriggerText>{label}</TriggerText>
      </Trigger>

      {open && (
        <Panel role="dialog">
          <Row>
            <SelectMenuButton
              title={`${props.value.year}`}
              isActive
              contents={years.map(String)}
              onSelect={handleYearChange}
              containerStyle={{ flex: 1 }}
            />
            <SelectMenuButton
              title={pad2(props.value.month)}
              isActive
              contents={months.map(pad2)}
              onSelect={handleMonthChange}
              containerStyle={{ flex: 1 }}
            />

            {isYmd && (
              <SelectMenuButton
                title={pad2(props.value.day)}
                isActive
                contents={days.map(pad2)}
                onSelect={handleDayChange}
                containerStyle={{ flex: 1 }}
              />
            )}
          </Row>
        </Panel>
      )}
    </Root>
  );
};

export default DayPicker;
