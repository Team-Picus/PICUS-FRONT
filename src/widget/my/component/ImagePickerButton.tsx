import IcGallery from '@icon/ic-gallery.svg';
import styled from '@emotion/styled';

interface ImagePickerButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const ImagePickerButton = ({ onClick, disabled }: ImagePickerButtonProps) => {
  return (
    <PickerButton type="button" onClick={onClick} disabled={disabled}>
      <img src={IcGallery} alt="gallery" />
      <ButtonLabel>{`사진 선택`}</ButtonLabel>
    </PickerButton>
  );
};

export default ImagePickerButton;

const PickerButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
  border-radius: 8px;
  padding: 8px 16px;
  gap: 4px;

  &:active {
    background-color: #1d1d1d0d;
  }
  &:hover,
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.lightMode.divider.divider1}`};
  }
`;

const ButtonLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;
