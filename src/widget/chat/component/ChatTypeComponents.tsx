import styled from '@emotion/styled';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import IcFileBlank from '@shared/assets/icon/ic-file-blank';
import IcDownload from '@shared/assets/icon/ic-download.svg?react';

interface NormalMessageProps {
  text: string;
  time: string;
  roleType: 'my' | 'other';
  images?: string[];
  files?: { id: number; fileName: string }[];
}

interface CheckMessageProps {
  checkType: 'payment' | 'detail' | 'reservation' | 'cancel';
  // payment: 결제하기, detail: 예약내역 상세, reservation: 예약 확정, cancel: 예약 취소내역
  roleType: 'my' | 'other';
  onButtonClick?: () => void;
}

/* 일반적인 채팅 메시지일 때 사용합니다. */
const NormalMessage = ({ text, time, roleType, images, files }: NormalMessageProps) => {
  return (
    <NormalMessageContainer>
      {roleType === 'my' ? (
        <>
          <NormalMessageTime>{time}</NormalMessageTime>
          <NormalMessageText roleType={roleType}>
            {images && images.length > 0 && <ImageGrid images={images} />}
            {files && files.length > 0 && <FileGrid files={files} />}
            {text && <MessageTextContent>{text}</MessageTextContent>}
          </NormalMessageText>
        </>
      ) : (
        <>
          <NormalMessageText roleType={roleType}>
            {images && images.length > 0 && <ImageGrid images={images} />}
            {files && files.length > 0 && <FileGrid files={files} />}
            {text && <MessageTextContent>{text}</MessageTextContent>}
          </NormalMessageText>
          <NormalMessageTime>{time}</NormalMessageTime>
        </>
      )}
    </NormalMessageContainer>
  );
};

/* 파일명 줄이기 함수 */
const truncateFileName = (fileName: string, maxLength: number = 12) => {
  if (fileName.length <= maxLength) return fileName;

  const endPart = fileName.slice(-7);
  const availableLength = maxLength - 7 - 3;

  if (availableLength <= 0) return fileName;

  return fileName.slice(0, availableLength) + '...' + endPart;
};

/* 파일 그리드 컴포넌트 */
const FileGrid = ({ files }: { files: { id: number; fileName: string }[] }) => {
  return (
    <FileGridContainer>
      {files.map(({ id, fileName }) => (
        <FileItem key={id}>
          <FileItemLeft>
            <IcFileBlank />
          </FileItemLeft>
          <FileItemText>{truncateFileName(fileName)}</FileItemText>
          <FileItemRight>
            <IcDownload />
          </FileItemRight>
        </FileItem>
      ))}
    </FileGridContainer>
  );
};

/* 이미지 그리드 컴포넌트 */
const ImageGrid = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image || `placeholder-${index}`);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ImageGridContainer imageCount={images.length}>
        {images.map((image, index) => (
          <ImageItem
            key={index}
            imageCount={images.length}
            onClick={() => handleImageClick(image, index)}
          >
            {image && image.trim() !== '' && <img src={image} alt={`채팅 이미지 ${index + 1}`} />}
          </ImageItem>
        ))}
      </ImageGridContainer>

      {/* 이미지 클릭 시 확대 화면 */}
      {selectedImage &&
        createPortal(
          <ImageModal onClick={handleCloseModal}>
            {selectedImage.startsWith('placeholder-') ? (
              <ModalPlaceholder />
            ) : (
              <ModalImage src={selectedImage} alt="확대된 이미지" />
            )}
          </ImageModal>,
          document.body,
        )}
    </>
  );
};

const NormalMessageContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const MessageTextContent = styled.div`
  display: block;
`;

const FileGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;

const FileItem = styled.div`
  display: flex;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.darkMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.darkMode.divider.divider1};
  border-radius: 12px;
  padding: 12px 8px;
  align-items: center;
  flex: 0 0 auto;
  width: fit-content;
  justify-content: space-between;
  gap: 4px;
`;

const FileItemLeft = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;

const FileItemText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.darkMode.text.text1};
  flex: 1;
  white-space: nowrap;
`;

const FileItemRight = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkMode.icon.icon2};
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const ModalImage = styled.img`
  width: 100vw;
  height: auto;
  object-fit: contain;
`;

const ModalPlaceholder = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #d0d0d0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #666;

  &::after {
    content: '이미지 없음';
  }
`;

const ImageGridContainer = styled.div<{ imageCount: number }>`
  display: grid;
  gap: 4px;
  width: 100%;

  ${({ imageCount }) => {
    if (imageCount === 1) {
      return `
        grid-template-columns: 1fr;
        aspect-ratio: 1;
      `;
    } else if (imageCount === 2) {
      return `
        grid-template-columns: 1fr 1fr;
      `;
    } else if (imageCount === 3) {
      return `
        grid-template-columns: 1fr 1fr 1fr;
      `;
    } else {
      return `
        grid-template-columns: 1fr 1fr 1fr;
      `;
    }
  }}
`;

const ImageItem = styled.div<{ imageCount: number }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background-color: #d0d0d0;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const NormalMessageText = styled.div<{ roleType: 'my' | 'other' }>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
  max-width: 280px;
  background-color: ${({ theme, roleType }) =>
    roleType === 'my'
      ? theme.colors.darkMode.background.bg1
      : theme.colors.lightMode.background.bg1};
  border-radius: ${({ roleType }) =>
    roleType === 'my' ? '12px 0px 12px 12px' : '0px 12px 12px 12px'};
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme, roleType }) =>
    roleType === 'my' ? theme.colors.darkMode.text.text1 : theme.colors.lightMode.text.text1};
`;

const NormalMessageTime = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  align-self: flex-end;
`;

/* 의뢰서 확인 메시지에 사용합니다. */
const RequestCheckMessage = ({
  roleType,
  onButtonClick,
}: {
  roleType: 'my' | 'other';
  onButtonClick?: () => void;
}) => {
  return (
    <RequestCheckMessageWrapper>
      {roleType === 'my' ? (
        <>
          <RequestCheckMessageTime>13:20</RequestCheckMessageTime>
          <RequestCheckMessageContainer roleType={roleType}>
            <PicusNoticeContent roleType={roleType}>{'피커스 Notice'}</PicusNoticeContent>
            <MessageContainer>
              <ContentImage>
                <img src={ImgMainbannerEx} alt="" />
              </ContentImage>

              <ContentTextContainer>
                <ContentTextTitle roleType={roleType}>
                  {'{클라}님이 보내신 의뢰서가 도착했습니다.'}
                </ContentTextTitle>
                <ContentTextButton onClick={onButtonClick}>{'의뢰서 확인'}</ContentTextButton>
              </ContentTextContainer>
            </MessageContainer>
          </RequestCheckMessageContainer>
        </>
      ) : (
        <>
          <RequestCheckMessageContainer roleType={roleType}>
            <PicusNoticeContent roleType={roleType}>{'피커스 Notice'}</PicusNoticeContent>
            <MessageContainer>
              <ContentImage>
                <img src={ImgMainbannerEx} alt="" />
              </ContentImage>

              <ContentTextContainer>
                <ContentTextTitle roleType={roleType}>
                  {'{클라}님이 보내신 의뢰서가 도착했습니다.'}
                </ContentTextTitle>
                <ContentTextButton onClick={onButtonClick}>{'의뢰서 확인'}</ContentTextButton>
              </ContentTextContainer>
            </MessageContainer>
          </RequestCheckMessageContainer>
          <RequestCheckMessageTime>13:20</RequestCheckMessageTime>
        </>
      )}
    </RequestCheckMessageWrapper>
  );
};

const RequestCheckMessageWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const RequestCheckMessageTime = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  align-self: flex-end;
`;

const RequestCheckMessageContainer = styled.div<{ roleType: 'my' | 'other' }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: ${({ roleType }) => (roleType === 'my' ? '12px 0 12px 12px' : '0 12px 12px 12px')};
  background-color: ${({ theme, roleType }) =>
    roleType === 'my'
      ? theme.colors.darkMode.background.bg1
      : theme.colors.lightMode.background.bg1};
  padding: 12px;
  gap: 16px;
`;

const PicusNoticeContent = styled.div<{ roleType: 'my' | 'other' }>`
  display: flex;
  border-radius: 30px;
  background-color: ${({ theme, roleType }) =>
    roleType === 'my'
      ? theme.colors.darkMode.background.bg2
      : theme.colors.lightMode.background.bg2};
  padding: 2px 8px;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme, roleType }) =>
    roleType === 'my' ? theme.colors.darkMode.text.text1 : theme.colors.lightMode.text.text1};
  align-self: flex-start;
  width: fit-content;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;

const ContentImage = styled.div`
  display: flex;
  border-radius: 8px;
  width: 94px;
  height: 94px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentTextTitle = styled.div<{ roleType: 'my' | 'other' }>`
  display: flex;
  width: 100%;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme, roleType }) =>
    roleType === 'my' ? theme.colors.darkMode.text.text1 : theme.colors.lightMode.text.text1};
`;

const ContentTextButton = styled.button`
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 4px 0px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkMode.brand.primary};
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

/* 다양한 체크 메시지에서 사용 가능합니다. ex) 결제하기, 예약내역 상세, 예약 확정 */
const CheckMessage = ({ checkType, roleType, onButtonClick }: CheckMessageProps) => {
  const getMessageContent = () => {
    switch (checkType) {
      case 'payment':
        return {
          title: '{작가}님이 보내신 결제청구서가 도착했습니다.',
          content: '결제가 완료되면 자동으로 예약이 확정됩니다.',
          button: '결제하기',
        };
      case 'detail':
        return {
          title: '{클라}님이 결제를 완료했습니다.',
          content: '예약 취소는 예약내역 상세페이지에서 가능합니다.',
          button: '예약내역 상세',
        };
      case 'reservation':
        return {
          title: '{클라}님이 결제를 완료했습니다.',
          content:
            '작가님은 예약을 확정해주세요. 예약 취소를 원할 경우 아래 버튼을 클릭 후 “예약 취소"를 선택해주세요.',
          button: '예약 확정',
        };
      case 'cancel':
        return {
          title: '예약이 취소되었습니다.',
          content: '결제하신 금액은 15일 이내로 자동 환불됩니다.',
          button: '예약 취소내역',
        };
      default:
        return {
          title: '',
          content: '',
          button: '',
        };
    }
  };

  const messageContent = getMessageContent();

  return (
    <CheckMessageWrapper>
      {roleType === 'my' ? (
        <>
          <CheckMessageTime>13:20</CheckMessageTime>
          <CheckDetailMessageContainer roleType={roleType}>
            <PicusNoticeContent roleType={roleType}>{'피커스 Notice'}</PicusNoticeContent>

            <CheckMessageContainer>
              <CheckMessageTitle roleType={roleType}>{messageContent.title}</CheckMessageTitle>
              <CheckMessageContent>{messageContent.content}</CheckMessageContent>
            </CheckMessageContainer>

            <CheckMessageButton onClick={onButtonClick}>{messageContent.button}</CheckMessageButton>
          </CheckDetailMessageContainer>
        </>
      ) : (
        <>
          <CheckDetailMessageContainer roleType={roleType}>
            <PicusNoticeContent roleType={roleType}>{'피커스 Notice'}</PicusNoticeContent>

            <CheckMessageContainer>
              <CheckMessageTitle roleType={roleType}>{messageContent.title}</CheckMessageTitle>
              <CheckMessageContent>{messageContent.content}</CheckMessageContent>
            </CheckMessageContainer>

            <CheckMessageButton onClick={onButtonClick}>{messageContent.button}</CheckMessageButton>
          </CheckDetailMessageContainer>
          <CheckMessageTime>13:20</CheckMessageTime>
        </>
      )}
    </CheckMessageWrapper>
  );
};

const CheckMessageWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const CheckMessageTime = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  align-self: flex-end;
`;

const CheckDetailMessageContainer = styled.div<{ roleType: 'my' | 'other' }>`
  display: flex;
  flex-direction: column;
  border-radius: ${({ roleType }) => (roleType === 'my' ? '12px 0 12px 12px' : '0 12px 12px 12px')};
  background-color: ${({ theme, roleType }) =>
    roleType === 'my'
      ? theme.colors.darkMode.background.bg1
      : theme.colors.lightMode.background.bg1};
  padding: 12px;
  gap: 16px;
`;

const CheckMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckMessageTitle = styled.div<{ roleType: 'my' | 'other' }>`
  display: flex;
  width: 100%;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme, roleType }) =>
    roleType === 'my' ? theme.colors.darkMode.text.text1 : theme.colors.lightMode.text.text1};
`;

const CheckMessageContent = styled.div`
  display: flex;
  width: 100%;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.darkMode.text.text3};
`;

const CheckMessageButton = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 4px 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkMode.brand.primary};
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

export { NormalMessage, RequestCheckMessage, CheckMessage };
