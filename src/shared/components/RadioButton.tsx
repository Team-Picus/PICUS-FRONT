import styled from '@emotion/styled';

interface RadioButtonProps {
  selected?: boolean;
  onChange: () => void;
  label?: string;
}

const RadioButton = ({ selected, onChange, label }: RadioButtonProps) => {
  return (
    <RadioButtonContainer>
      <HiddenRadio type="radio" checked={selected} onChange={onChange} />
      <RadioMark data-selected={selected} />
      {label && <RadioLabel data-selected={selected}>{label}</RadioLabel>}
    </RadioButtonContainer>
  );
};

export default RadioButton;

const RadioButtonContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
`;

const RadioMark = styled.span<{ 'data-selected'?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 13px;
    height: 13px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
    opacity: ${({ ['data-selected']: s }) => (s === true ? 1 : 0)};
  }
`;

const RadioLabel = styled.div<{ 'data-selected'?: boolean }>`
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme, ['data-selected']: s }) =>
    s === true ? theme.colors.lightMode.text.text1 : theme.colors.lightMode.text.text3};
`;
