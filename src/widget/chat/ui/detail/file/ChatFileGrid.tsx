import styled from '@emotion/styled';
import IcFileBlank from '@icon/ic-file-blank';
import IcDocument from '@icon/ic-document';

interface FileData {
  fileType: 'file' | 'document';
  fileName: string;
}

interface ChatFileGridProps {
  files: FileData[];
}

const ChatFileGrid = ({ files }: ChatFileGridProps) => {
  return (
    <GridContainer>
      {files.map((file, index) => (
        <FileItem key={index} fileType={file.fileType} fileName={file.fileName} />
      ))}
    </GridContainer>
  );
};

// FileItem 컴포넌트
const FileItem = ({ fileType, fileName }: FileData) => {
  const getIcon = () => {
    switch (fileType) {
      case 'file':
        return <IcFileBlank />;
      case 'document':
        return <IcDocument />;
      default:
        return <IcFileBlank />;
    }
  };

  return (
    <FileItemContainer fileType={fileType}>
      {getIcon()}
      <FileTitle>{fileName}</FileTitle>
    </FileItemContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: 100%;
`;

const FileItemContainer = styled.div<{ fileType: 'file' | 'document' }>`
  aspect-ratio: 1;
  background-color: ${({ theme, fileType }) =>
    fileType === 'file'
      ? theme.colors.lightMode.background.bg3
      : theme.colors.lightMode.brand.primary};
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  padding: 12px;
  justify-content: space-between;
  flex-direction: column;
  svg {
    color: ${({ theme }) => theme.colors.lightMode.icon.icon};
  }
`;

const FileTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

export default ChatFileGrid;
