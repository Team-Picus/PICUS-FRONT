import styled from '@emotion/styled';
import { useRef } from 'react';
import ImagePickerButton from '@widget/my/component/ImagePickerButton.tsx';
import ImgProfileEx from '@image/img-profile-ex.png';

type ImageVariants = 'avatar' | 'background';

interface ImagePickerProps {
  variant: ImageVariants;
  label: string;
  imageUrl?: string;
  onChange: (file: File | null) => void;
  accept?: string;
  disabled?: boolean;
  fallbackSrc?: string;
}

const ImagePicker = ({
  variant,
  label,
  imageUrl,
  onChange,
  accept = 'image/*',
  disabled,
  fallbackSrc = ImgProfileEx,
}: ImagePickerProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const src = imageUrl?.trim() ? imageUrl : fallbackSrc;

  const handleOpen = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange(file);
    e.target.value = ''; // 같은 파일 재선택 가능
  };

  return (
    <>
      <PreviewContainer>
        <PreviewLabel>{label}</PreviewLabel>
        <ProfileImage src={src} alt={`${label} 이미지`} $variant={variant} />
      </PreviewContainer>
      <ImagePickerButton onClick={handleOpen} disabled={disabled} />
      <HiddenFileInput ref={inputRef} type="file" accept={accept} onChange={handleFileChange} />
    </>
  );
};

export default ImagePicker;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PreviewLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
`;

const ProfileImage = styled.img<{ $variant: ImageVariants }>`
  width: ${({ $variant }) => ($variant === 'avatar' ? '80px' : '179px')};
  height: ${({ $variant }) => ($variant === 'avatar' ? '80px' : '239px')};
  border-radius: ${({ $variant }) => ($variant === 'avatar' ? '24px' : 'none')};
`;

const HiddenFileInput = styled.input`
  display: none;
`;
