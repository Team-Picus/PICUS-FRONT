import styled from '@emotion/styled';
import { useRef } from 'react';
import ImagePickerButton from '@widget/my/component/ImagePickerButton.tsx';
import ImgProfileEx from '@image/img-profile-ex.png';

interface ProfileImagePickerProps {
  imageUrl?: string;
  onChange: (file: File | null) => void;
  accept?: string;
  disabled?: boolean;
  fallbackSrc?: string;
}

const ProfileImagePicker = ({
  imageUrl,
  onChange,
  accept = 'image/*',
  disabled,
  fallbackSrc = ImgProfileEx,
}: ProfileImagePickerProps) => {
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
        <PreviewLabel>{`프로필`}</PreviewLabel>
        <ProfileImage src={src} alt="프로필 이미지" />
      </PreviewContainer>
      <ImagePickerButton onClick={handleOpen} disabled={disabled} />
      <HiddenFileInput ref={inputRef} type="file" accept={accept} onChange={handleFileChange} />
    </>
  );
};

export default ProfileImagePicker;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PreviewLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelM};
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 24px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
