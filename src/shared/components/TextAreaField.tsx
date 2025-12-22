import styled from '@emotion/styled';
import { useCallback, useLayoutEffect, useRef } from 'react';

type FieldState = 'default' | 'disabled' | 'error';
type FieldSize = 'S' | 'L';

interface TextAreaFieldProps {
  value?: string; // textarea 값. undefined면 빈 값으로 처리
  states?: FieldState; // textarea 상태
  size?: FieldSize; // S: 자동 높이(최대 108px) + 이후 스크롤, L: 108px 고정 + 스크롤
  showLabel?: boolean;
  showTextLength?: boolean;
  showHelpText?: boolean;
  label?: string;
  placeholder?: string;
  maxLength?: number; // 글자수 제한
  helpText?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField = ({
  value,
  states = 'default',
  size = 'S',
  label,
  placeholder,
  maxLength,
  showLabel = true,
  showHelpText = false,
  helpText,
  showTextLength = true,
  onChange,
}: TextAreaFieldProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const length = (value ?? '').length;
  const isOver = typeof maxLength === 'number' && length > maxLength;
  const isDisabled = states === 'disabled';
  const currentState: FieldState = isDisabled
    ? 'disabled'
    : states === 'error' || isOver
      ? 'error'
      : 'default';
  const MAX_HEIGHT = 108;

  const adjustHeight = useCallback(
    (el: HTMLTextAreaElement) => {
      if (size === 'L') return;
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT)}px`;
      el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? 'auto' : 'hidden';
    },
    [size],
  );

  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    adjustHeight(el);
  }, [value, adjustHeight]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight(e.currentTarget);
    onChange?.(e);
  };

  return (
    <TextAreaFieldContainer>
      {showLabel && label && <Label $state={currentState}>{label}</Label>}

      <Box $state={currentState}>
        <TextArea
          ref={textareaRef}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={maxLength}
          onChange={handleChange}
          $size={size}
          rows={1}
        />
        {showTextLength && maxLength && (
          <TextLength>
            {length}/{maxLength}
          </TextLength>
        )}
      </Box>

      {showHelpText && helpText && <HelpText $state={currentState}>{helpText}</HelpText>}
    </TextAreaFieldContainer>
  );
};

export default TextAreaField;

const TextAreaFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div<{ $state: FieldState }>`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ $state, theme }) =>
    $state === 'disabled'
      ? theme.colors.lightMode.text.text2
      : $state === 'error'
        ? theme.colors.lightMode.semantic.error
        : theme.colors.lightMode.text.text1};
`;

const Box = styled.div<{ $state: FieldState }>`
  display: flex;
  flex-direction: column;
  min-height: 40px;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 8px;

  border: 1px solid
    ${({ $state, theme }) =>
      $state === 'disabled'
        ? theme.colors.lightMode.neutral.neutral200
        : $state === 'error'
          ? theme.colors.lightMode.semantic.error
          : theme.colors.lightMode.neutral.neutral300};

  background-color: ${({ $state, theme }) =>
    $state === 'disabled'
      ? theme.colors.lightMode.background.bg4
      : theme.colors.lightMode.background.bg1};

  &:focus-within {
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.lightMode.semantic.error
        : theme.colors.lightMode.neutral.neutral1000};
  }
`;

const TextArea = styled.textarea<{ $size: FieldSize }>`
  width: 100%;
  height: ${({ $size }) => ($size === 'L' ? '108px' : 'auto')};
  overflow-y: ${({ $size }) => ($size === 'L' ? 'auto' : 'hidden')};
  scrollbar-gutter: stable;
  resize: none;
  background: transparent;
  border: none;
  outline: none;

  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  line-height: 150%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightMode.text.text2};
  }

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const TextLength = styled.div`
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const HelpText = styled.div<{ $state: FieldState }>`
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ $state, theme }) =>
    $state === 'error' ? theme.colors.lightMode.semantic.error : theme.colors.lightMode.text.text2};
`;
