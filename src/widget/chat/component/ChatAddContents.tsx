import styled from '@emotion/styled';
import IcDocument from '@shared/assets/icon/ic-document';
import IcFileBlank from '@shared/assets/icon/ic-file-blank';
import IcGallery from '@shared/assets/icon/ic-gallery';
import IcDeleteBig from '@icon/ic-delete-filled.svg?react';

const ChatAddContents = ({
  onContentTypeChange,
}: {
  onContentTypeChange?: (type: 'image' | 'file') => void;
}) => {
  const addContents = [
    { icon: IcGallery, title: '사진', type: 'image' as const },
    { icon: IcFileBlank, title: '파일', type: 'file' as const },
    { icon: IcDocument, title: '의뢰서', type: 'file' as const },
  ];

  const handleContentClick = (type: 'image' | 'file') => {
    onContentTypeChange?.(type);
  };

  return (
    <ChatAddContentsContainer>
      {addContents.map(({ icon: Icon, title, type }) => (
        <ChatAddContent key={title} onClick={() => handleContentClick(type)}>
          <AddIcon>
            <Icon />
          </AddIcon>
          <AddTitle>{title}</AddTitle>
        </ChatAddContent>
      ))}
    </ChatAddContentsContainer>
  );
};

const ChatAddContentsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 230px;
  padding: 16px;
`;

const ChatAddContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

const AddIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: #191919;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.lightMode.icon.iconColor};
`;

const AddTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const AddContentSpace = ({ contentType = 'image' }: { contentType?: 'image' | 'file' }) => {
  const headerTexts = {
    image: { text: '이미지 첨부', subtext: ['최대 10장'] },
    file: { text: '파일 첨부', subtext: ['최대 10개', '최대 50MB'] },
  };

  return (
    <AddContentSpaceContainer>
      <AddContentHeader>
        <AddContentHeaderLeft>
          <AddContentHeaderLeftText>{headerTexts[contentType].text}</AddContentHeaderLeftText>
          {headerTexts[contentType].subtext.map((text, index) => (
            <AddContentHeaderLeftSubtext key={index}>{text}</AddContentHeaderLeftSubtext>
          ))}
        </AddContentHeaderLeft>
        <AddContentHeaderRight>
          <AddContentHeaderRightButton>{'전체 삭제'}</AddContentHeaderRightButton>
        </AddContentHeaderRight>
      </AddContentHeader>

      {contentType === 'image' ? <AddImageList /> : <AddFileList />}
    </AddContentSpaceContainer>
  );
};

const AddContentSpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4px 0;
`;

const AddContentHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 3.5px 16px;
  justify-content: space-between;
`;

const AddContentHeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const AddContentHeaderLeftText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const AddContentHeaderLeftSubtext = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const AddContentHeaderRight = styled.div`
  display: flex;
  height: 24px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const AddContentHeaderRightButton = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const AddImageList = () => {
  const contentItems = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <AddImageListContainer itemCount={contentItems.length}>
      {contentItems.map(({ id }) => (
        <AddImageItem key={id}>
          <DeleteIcon>
            <IcDeleteBig width={24} height={24} />
          </DeleteIcon>
        </AddImageItem>
      ))}
    </AddImageListContainer>
  );
};

const AddImageListContainer = styled.div<{ itemCount: number }>`
  ${({ itemCount }) =>
    itemCount >= 6
      ? `
        display: grid;
        grid-template-columns: repeat(5, 40px);
        grid-auto-rows: 40px;
        justify-content: center;
        align-content: center;
        gap: 16px;
      `
      : `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 16px;
      `}
  width: 100%;
  padding: 12px 16px 0 16px;
`;

const AddImageItem = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg2};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  border-radius: 8px;
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
`;

const truncateFileName = (fileName: string, maxLength: number = 12) => {
  if (fileName.length <= maxLength) return fileName;

  const endPart = fileName.slice(-7); // 마지막 7글자
  const availableLength = maxLength - 7 - 3; // 마지막 7글자와 ... 3글자 제외

  if (availableLength <= 0) return fileName;

  return fileName.slice(0, availableLength) + '...' + endPart;
};

const AddFileList = () => {
  const fileItems = [
    { id: 1, fileName: '파일명.pdf' },
    { id: 2, fileName: '파일명ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ.pdf' },
    { id: 3, fileName: '파일명ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ.pdf' },
  ];

  return (
    <AddFileListContainer>
      {fileItems.map(({ id, fileName }) => (
        <AddFileItem key={id}>
          <AddFileItemLeft>
            <IcFileBlank />
          </AddFileItemLeft>
          <AddFileItemRightText>{truncateFileName(fileName)}</AddFileItemRightText>
          <DeleteFileIcon>
            <IcDeleteBig width={24} height={24} />
          </DeleteFileIcon>
        </AddFileItem>
      ))}
    </AddFileListContainer>
  );
};

const AddFileListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 12px 16px 0 16px;
`;

const AddFileItem = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  gap: 4px;
  flex: 0 0 auto;
  max-width: calc(50% - 8px);
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider1};
  border-radius: 12px;
  padding: 12px 8px;
  justify-content: space-between;
  align-items: center;
`;

const AddFileItemLeft = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;

const AddFileItemRightText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const DeleteFileIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
`;

export { ChatAddContents, AddContentSpace };
