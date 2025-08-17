import styled from '@emotion/styled';

type FieldState = 'default' | 'disabled' | 'error';

interface TextFieldProps {
  type: string;
  value?: string;
  states: FieldState;
  isLabel: boolean;
  isTextLength: boolean;
  isHelpText: boolean;
  label?: string;
  textLength?: number;
  helpText?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  type,
  value,
  states,
  isLabel,
  isTextLength,
  isHelpText,
  label,
  textLength,
  helpText,
  placeholder,
  onChange,
}: TextFieldProps) => {
  const isDisabled = states === 'disabled';
  const isError = states === 'error';

  return (
    <TextFieldContainer>
      {isLabel && <Label $state={states}>{label}</Label>}
      <InputContainer $state={states}>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          aria-invalid={isError}
          onChange={onChange}
          $state={states}
        />
        {isTextLength && <TextLength>{textLength}/30</TextLength>}
      </InputContainer>
      {isHelpText && <HelpText $state={states}>{helpText}</HelpText>}
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
    border-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  }
`;

const Input = styled.input<{ $state: FieldState }>`
  width: 100%;
  background-color: ${({ $state, theme }) =>
    $state === 'disabled'
      ? theme.colors.lightMode.background.bg4
      : theme.colors.lightMode.background.bg1};
  font: ${({ theme }) => theme.fonts.body2};
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
