import styled from '@emotion/styled';

type FieldState = 'default' | 'disabled' | 'error';
type TextFieldType = 'text' | 'password';

interface TextFieldProps {
  type?: TextFieldType;
  value?: string;
  states?: FieldState;
  showLabel?: boolean;
  showTextLength?: boolean;
  showHelpText?: boolean;
  label?: string;
  maxLength?: number;
  helpText?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  type = 'text',
  value,
  states = 'default',
  showLabel = false,
  showTextLength = false,
  showHelpText = false,
  label,
  maxLength,
  helpText,
  placeholder,
  onChange,
}: TextFieldProps) => {
  const length = (value ?? '').length;
  const isOver = typeof maxLength === 'number' && length > maxLength;
  const isDisabled = states === 'disabled';
  const currentState: FieldState = isDisabled
    ? 'disabled'
    : states === 'error' || isOver
      ? 'error'
      : 'default';

  return (
    <TextFieldContainer>
      {showLabel && <Label $state={currentState}>{label}</Label>}
      <InputContainer $state={currentState}>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={onChange}
          $state={currentState}
        />
        {showTextLength && (
          <TextLength>
            {length}/{maxLength}
          </TextLength>
        )}
      </InputContainer>
      {showHelpText && <HelpText $state={currentState}>{helpText}</HelpText>}
    </TextFieldContainer>
  );
};

export default TextField;

const TextFieldContainer = styled.div`
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

const InputContainer = styled.div<{ $state: FieldState }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ $state, theme }) =>
    $state === 'disabled'
      ? theme.colors.lightMode.background.bg4
      : theme.colors.lightMode.background.bg1};
  border: 1px solid
    ${({ $state, theme }) =>
      $state === 'disabled'
        ? theme.colors.lightMode.neutral.neutral200
        : $state === 'error'
          ? theme.colors.lightMode.semantic.error
          : theme.colors.lightMode.neutral.neutral300};
  border-radius: 8px;
  padding: 8px 12px;
  gap: 8px;

  &:focus-within {
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.lightMode.semantic.error
        : theme.colors.lightMode.neutral.neutral1000};
  }
`;

const Input = styled.input<{ $state: FieldState }>`
  width: 100%;
  background-color: ${({ $state, theme }) =>
    $state === 'disabled'
      ? theme.colors.lightMode.background.bg4
      : theme.colors.lightMode.background.bg1};
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  line-height: 150%;
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightMode.text.text2};
  }
  &:focus {
    outline: none;
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
