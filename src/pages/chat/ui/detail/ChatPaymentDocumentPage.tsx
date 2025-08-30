import styled from '@emotion/styled';
import { useState } from 'react';
import Header from '@shared/components/Header';
import PackageInfoContainer from '@widget/chat/component/PackageInfoContainer';
import ThemeSelector from '@widget/chat/ui/detail/payment/ThemeSelector';
import AddOptionContainer from '@widget/chat/ui/detail/payment/AddOptionContainer';
import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import { useTheme } from '@emotion/react';
import SelectLocation from '@widget/chat/ui/detail/payment/SelectLocation';
import StartTimeSelector from '@widget/chat/ui/detail/payment/StartTimeSelector';
import RequestTextArea from '@widget/chat/ui/detail/payment/RequestTextArea';
import DetailContent from '@widget/chat/component/DetailContent';
import ChatCommonContainer from '@widget/chat/component/ChatCommonContainer';

interface ChatPaymentDocumentPageProps {
  onClose?: () => void;
}

interface PackageItem {
  id: string;
  name: string;
  price: string;
  items: string[];
  info: string;
}

const ChatPaymentDocumentPage = ({ onClose }: ChatPaymentDocumentPageProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const theme = useTheme();

  const packages: PackageItem[] = [
    {
      id: 'package-a',
      name: '패키지 A',
      price: '300,000원',
      items: ['기본 촬영 1시간', '원본 파일 50장', '기본 보정본 10장'],
      info: '기본적인 촬영 서비스로 간단한 포트폴리오나 SNS용 사진에 적합합니다.',
    },
    {
      id: 'package-b',
      name: '패키지 B',
      price: '800,000원',
      items: ['모먼트 패키지 1세트', '세밀 보정본 10장', '색보정본 20장', '분할 컷 2장'],
      info: '장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본은 1시간입니다.',
    },
    {
      id: 'package-c',
      name: '패키지 C',
      price: '1,700,000원',
      items: [
        '프리미엄 촬영 2시간',
        '원본 파일 200장',
        '프리미엄 보정본 50장',
        '스튜디오 대여 포함',
        '메이크업 아티스트 포함',
      ],
      info: '프리미엄 서비스로 전문적인 포트폴리오나 상업용 촬영에 최적화되어 있습니다.',
    },
  ];

  const addOptions = [
    {
      id: '1',
      name: '시간 추가',
      option: '1시간',
      price: '10,000원',
      description: '추가 옵션에 대한 상세 설명입니다.',
    },
    {
      id: '2',
      name: '편집본 추가',
      option: '2장',
      price: '15,000원',
      description: '다른 추가 옵션에 대한 상세 설명입니다.',
    },
  ];

  const handleBackClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme);
  };

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(selectedPackage === packageName ? null : packageName);
  };

  return (
    // 결제 청구서 페이지입니다.
    <ChatPaymentDocumentPageContainer>
      <HeaderWrapper>
        <Header
          title="결제청구서 작성"
          isBack={true}
          onBackClick={handleBackClick}
          inlineButton={{ show: true, text: '초기화' }}
          backgroundColor={theme.colors.lightMode.background.bg1}
        />
      </HeaderWrapper>

      <ChatPaymentDocumentContainer>
        <ChatCommonContainer title="유입 게시글">
          <DetailContent
            imageSrc={ImgMainbannerEx}
            imageAlt="미세키서울 F/W 룩북 / 무신사 인큐베이팅 프로그램"
            title="미세키서울 F/W 룩북 / 무신사 인큐베이팅 프로그램"
            type="패션"
            authorName="작가 이름"
          />
        </ChatCommonContainer>
        <ChatPaymentDocumentMainContentContainer>
          {/* 테마 컨테이너 */}
          <ChatCommonContainer title="테마">
            <ThemeSelector
              selectedTheme={selectedTheme || ''}
              onThemeSelect={handleThemeClick}
              themes={['패션', '뷰티', '라이프스타일', '푸드', '여행']}
            />
          </ChatCommonContainer>

          {/* 기본 정보 컨테이너 */}
          <ChatCommonContainer title="기본">
            <PackageInfoContainer
              selectedPackage={selectedPackage || ''}
              onPackageSelect={handlePackageSelect}
              packages={packages}
            />
          </ChatCommonContainer>

          {/* 추가 옵션 컨테이너 */}
          <ChatCommonContainer title="추가 옵션" subTitle="(중복 선택 가능)">
            <AddOptionContainer options={addOptions} />
          </ChatCommonContainer>

          {/* 장소 컨테이너 */}
          <ChatCommonContainer title="장소">
            <SelectLocation />
          </ChatCommonContainer>

          {/* 시작 시간 컨테이너 */}
          <ChatCommonContainer title="시작 시간">
            <StartTimeSelector />
          </ChatCommonContainer>

          {/* 요청사항 컨테이너 */}
          <ChatCommonContainer title="요청사항">
            <RequestTextArea />
          </ChatCommonContainer>
        </ChatPaymentDocumentMainContentContainer>
      </ChatPaymentDocumentContainer>

      {/* 결제 버튼 컨테이너 */}
      <PaymentRequestContainer>
        <TotalPriceContainer>{'1,500,000원'}</TotalPriceContainer>
        <PaymentRequestButton>{'결제 요청하기'}</PaymentRequestButton>
      </PaymentRequestContainer>
    </ChatPaymentDocumentPageContainer>
  );
};

const ChatPaymentDocumentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  height: 100dvh;
  overflow-y: auto;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const ChatPaymentDocumentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding-bottom: 40px;
`;

const ChatPaymentDocumentMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 80px;
`;

const PaymentRequestContainer = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 0px 12px 0px 19px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  flex-shrink: 0;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const PaymentRequestButton = styled.button`
  display: flex;
  width: 150px;
  height: 40px;
  justify-content: center;
  padding: 8px 0px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightMode.neutral.neutral1000};
  border-radius: 8px;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1color};
`;

export default ChatPaymentDocumentPage;
