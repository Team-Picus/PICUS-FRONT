import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import Header from '@shared/components/Header';
import DropDownMenu from '@shared/components/DropDownMenu';
import Modal from '@shared/components/Modal';
import IcMoreVertical from '@icon/ic-more-vertical.svg';
import IcChevronDown from '@icon/ic-chevron-down.svg';
import ImgMainbannerEx from '@image/img-mainbanner-ex.png';
import BottomTap from '@shared/components/BottomTap';
import { useTheme } from '@emotion/react';
import ChatReservationTypeTitle from '@widget/chat/ui/detail/ChatReservationTypeTitle';
import ReservationDetailContent from '@widget/chat/ui/detail/ReservationDetailContent';
import {
  PaymentContentTotal,
  ReservationDetailInfoContent,
  ReservationDetailPackageContent,
  ReservationDetailPaymentContent,
} from '@widget/chat/ui/detail/ReservationDetailInfoContent';

interface ChatReservationDetailPageProps {
  reservationDetailType: 'request' | 'payment' | 'receipt';
  onClose?: () => void;
  isClosing?: boolean;
}

const getReservationTitle = (type: 'request' | 'payment' | 'receipt'): string => {
  const titles = {
    request: '의뢰서 확인',
    payment: '결제청구서 확인',
    receipt: '예약 완료',
  };
  return titles[type];
};

const ChatReservationDetailPage = ({
  reservationDetailType,
  onClose,
  isClosing,
}: ChatReservationDetailPageProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCancelReservation = () => {
    setIsDropdownOpen(false); // 드롭다운 닫기
    setIsCancelModalOpen(true); // 모달 열기
  };

  const handleModalClose = () => {
    setIsCancelModalOpen(false);
  };

  const handleConfirmCancel = () => {
    // 실제 예약 취소 로직 구현
    console.log('예약이 취소되었습니다.');
    setIsCancelModalOpen(false);
  };

  const handleReceiptButtonClick = () => {
    // 페이지 컨테이너의 최하단으로 스크롤
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // 스크롤 진행률 계산 (0 ~ 1)
      const scrollProgress = scrollTop / (scrollHeight - clientHeight);

      // 70% 이상 스크롤되면 버튼 숨김
      setIsButtonVisible(scrollProgress < 0.7);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const icons = [
    {
      src: IcMoreVertical,
      alt: '더보기',
      onClick: handleDropdownToggle,
    },
  ];

  return (
    <ChatReservationDetailPageContainer ref={containerRef}>
      <HeaderWrapper isClosing={isClosing}>
        <Header title="예약내역 상세" icons={icons} isBack={true} onBackClick={onClose} />
        {isDropdownOpen && (
          <DropDownMenu
            isVisible={isDropdownOpen}
            title="예약문서 편집"
            items={[
              {
                label: '예약 취소',
                onClick: handleCancelReservation,
                color: theme.colors.lightMode.semantic.error,
              },
            ]}
            onClose={() => setIsDropdownOpen(false)}
          />
        )}
      </HeaderWrapper>

      <ChatReservationDetailContentContainer>
        {/* 첫번째 박스 */}
        <ChatReservationDetailTypeContainer>
          {/* 예약 진행 단계를 표시하는 타이틀 컴포넌트 */}
          <ChatReservationTypeTitle currentStep={reservationDetailType} />

          <ChatReservationDetailTitle>
            {getReservationTitle(reservationDetailType)}
          </ChatReservationDetailTitle>

          {/* 예약 상세 컨텐츠 */}
          <ReservationDetailContent
            imageSrc={ImgMainbannerEx}
            imageAlt="미세키서울 F/W 룩북 / 무신사 인큐베이팅 프로그램"
            title="미세키서울 F/W 룩북 / 무신사 인큐베이팅 프로그램"
            type="패션"
            authorName="작가 이름"
          />
        </ChatReservationDetailTypeContainer>

        {/* 두번째 박스 */}
        <ChatReservationDetailInfoContainer>
          <ChatReservationDetailInfoTitle>
            <ChatReservationDetailInfoTitleIcon />
            <ChatReservationDetailInfoTitleText>{'예약 정보'}</ChatReservationDetailInfoTitleText>
          </ChatReservationDetailInfoTitle>

          {/* 날짜 ~ 요청까지의 정보를 표시하는 컴포넌트 */}
          <ReservationDetailInfoContent
            dateValue="2024년 12월 15일 (목)"
            timeValue="오전 10:00 ~ 오후 1:00"
            locationValue="라이트 스튜디오"
            locationSubValue="경기도 성남시 수정구 성남대로 1342"
            filterValues={['도회적인', '빈티지', '몽환적인']}
            requestValue="서로 즐겨 하는 포즈나 습관을 담고 싶어요. 기념일을 맞아 촬영합니다. 프러포즈를 앞두고 있어요! 촬영 중 반지를 건네는 순간을 자연스럽게 담아주시면 좋겠습니다. 둘 다 활동적인 걸 좋아해서 움직이는 장면을 많이 찍어주시면 좋겠어요."
          />

          {/* 패키지 및 옵션 설명 */}
          <ReservationDetailPackageContent
            PackageName="패키지 B"
            PackagePrice="800,000"
            PackageDetails={[
              '모먼트 패키지 1세트',
              '세밀 보정본 10장',
              '색보정본 20장',
              '분할 컷 2장',
            ]}
            PackageDetailMessage="장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본 1시간입니다."
            PackageOptionName="편집본 추가"
            PackageOptionQuantity="2"
            PackageOptionPrice="100,000"
            PackageQuantity="1"
            PackageOptionMessage="최대 5장까지 가능합니다. 추가된 편집본 장 수에 따라 최대 3일정도 추가로 소요될 수 있습니다."
          />
        </ChatReservationDetailInfoContainer>
      </ChatReservationDetailContentContainer>

      <ChatReservationDetailPaymentContentContainer>
        <ChatReservationDetailInfoTitle>
          <ChatReservationDetailInfoTitleIcon />
          <ChatReservationDetailInfoTitleText>{'결제 정보'}</ChatReservationDetailInfoTitleText>
        </ChatReservationDetailInfoTitle>

        {/* 결제 상품 정보 컴포넌트 */}
        <ReservationDetailPaymentContent
          PackageName="패키지 B"
          PaymentPrice="1,500,000"
          PackageOption={['시간추가 1시간(2)', '편집본 추가 2장(1)']}
        />

        <ChatReservationDetailPaymentContentDivider />

        {/* 전체 금액 */}
        <PaymentContentTotal PaymentPrice="1,500,000" PaymentCard="국민카드" PaymentType="일시불" />

        {reservationDetailType === 'receipt' && (
          <ChatReservationDetailReceiptButton>{'영수증 확인'}</ChatReservationDetailReceiptButton>
        )}
      </ChatReservationDetailPaymentContentContainer>
      {reservationDetailType !== 'receipt' && (
        <BottomTap
          checkedCount={0}
          hideCount={true}
          leftButtonText={reservationDetailType === 'payment' ? '예약 취소하기' : '거절하기'}
          rightButtonText={
            reservationDetailType === 'payment' ? '결제하기' : '수정 및 결제청구하기'
          }
          onLeftClick={() => {}}
          onRightClick={() => {}}
        />
      )}

      {/* 예약 취소 확인 모달 */}
      <Modal
        isVisible={isCancelModalOpen}
        checkBox={true}
        checkBoxText="확인했습니다."
        onClose={handleModalClose}
        title="예약을 취소할까요?"
        description="예약을 취소하면 24시간 동안은 새로운 예약이 불가합니다."
        leftButtonText="닫기"
        rightButtonText="예약 취소하기"
        onLeftClick={handleModalClose}
        onRightClick={handleConfirmCancel}
      />

      {/* receipt/payment 타입일 때 하단 고정 버튼 */}
      {(reservationDetailType === 'receipt' || reservationDetailType === 'payment') &&
        isButtonVisible && (
          <FixedReceiptButtonContainer
            onClick={handleReceiptButtonClick}
            reservationType={reservationDetailType}
          >
            <FixedReceiptButtonText>
              {reservationDetailType === 'receipt' ? '영수증 확인하기' : '결제금액 확인하기'}
            </FixedReceiptButtonText>
            <FixedReceiptButtonIcon>
              <img src={IcChevronDown} alt="" />
            </FixedReceiptButtonIcon>
          </FixedReceiptButtonContainer>
        )}
    </ChatReservationDetailPageContainer>
  );
};

const ChatReservationDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  height: 100vh;
  overflow-y: auto;
  margin: 0 auto;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
    env(safe-area-inset-left);
`;

const HeaderWrapper = styled.div<{ isClosing?: boolean }>`
  position: relative;
  flex-shrink: 0;
  visibility: ${({ isClosing }) => (isClosing ? 'hidden' : 'visible')};
`;

const ChatReservationDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ChatReservationDetailTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px 16px;
  gap: 24px;
`;

const ChatReservationDetailTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 24px;
`;

const ChatReservationDetailInfoTitle = styled.div`
  display: flex;
  gap: 8px;
`;

const ChatReservationDetailInfoTitleIcon = styled.div`
  display: flex;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.lightMode.text.text3};
  align-self: center;
`;

const ChatReservationDetailInfoTitleText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const ChatReservationDetailPaymentContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 32px 16px;
  gap: 24px;
`;

const ChatReservationDetailPaymentContentDivider = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider2};
`;

const ChatReservationDetailReceiptButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral200};
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

interface FixedReceiptButtonContainerProps {
  reservationType: 'receipt' | 'payment';
}

const FixedReceiptButtonContainer = styled.button<FixedReceiptButtonContainerProps>`
  position: fixed;
  bottom: ${({ reservationType }) => (reservationType === 'payment' ? '72px' : '16px')};
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg1};
  border: 1px solid ${({ theme }) => theme.colors.lightMode.neutral.neutral1000} !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  width: fit-content;
  z-index: 1000;
  gap: 8px;
`;

const FixedReceiptButtonText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const FixedReceiptButtonIcon = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
`;

export default ChatReservationDetailPage;
