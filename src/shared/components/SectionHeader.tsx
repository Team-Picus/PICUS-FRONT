import styled from '@emotion/styled';

interface SectionHeaderProps {
  text: string;
}

const SectionHeader = ({ text }: SectionHeaderProps) => {
  return <Header>{text}</Header>;
};

export default SectionHeader;

const Header = styled.div`
  position: relative;
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  padding-left: 12px;

  &::before {
    content: '';
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: currentColor;
  }
`;
