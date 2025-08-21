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

interface ChatReservationDetailPageProps {
  reservationDetailType: 'request' | 'payment' | 'receipt';
  onClose?: () => void;
  isClosing?: boolean;
}

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
          <ChatReservationDetailType>
            <ChatReservationDetailTypeTitle isActive={reservationDetailType === 'request'}>
              {'1. 의뢰서 확인'}
            </ChatReservationDetailTypeTitle>
            <ChatReservationDetailTypeTitle isActive={reservationDetailType === 'payment'}>
              {'2. 결제청구서 확인'}
            </ChatReservationDetailTypeTitle>
            <ChatReservationDetailTypeTitle isActive={reservationDetailType === 'receipt'}>
              {'3. 예약 완료'}
            </ChatReservationDetailTypeTitle>
          </ChatReservationDetailType>

          <ChatReservationDetailTitle>
            {reservationDetailType === 'request' && '의뢰서 확인'}
            {reservationDetailType === 'payment' && '결제청구서 확인'}
            {reservationDetailType === 'receipt' && '예약 완료'}
          </ChatReservationDetailTitle>

          <ChatReservationDetailContent>
            {/* 이미지 */}
            <ChatReservationDetailContentImage>
              <img src={ImgMainbannerEx} alt="" />
            </ChatReservationDetailContentImage>

            <ChatReservationDetailContentText>
              <ChatReservationDetailContentTextTitle>
                {'미세키서울 F/W 룩북 / 무신사 인큐베이팅 프로그램'}
              </ChatReservationDetailContentTextTitle>

              <ChatReservationDetailContentSubText>
                <ChatReservationDetailContentTextType>
                  {'패션'}
                </ChatReservationDetailContentTextType>

                <ChatReservationDetailContentTextName>
                  {'작가 이름'}
                </ChatReservationDetailContentTextName>
              </ChatReservationDetailContentSubText>
            </ChatReservationDetailContentText>
          </ChatReservationDetailContent>
        </ChatReservationDetailTypeContainer>

        {/* 두번째 박스 */}
        <ChatReservationDetailInfoContainer>
          <ChatReservationDetailInfoTitle>
            <ChatReservationDetailInfoTitleIcon />
            <ChatReservationDetailInfoTitleText>{'예약 정보'}</ChatReservationDetailInfoTitleText>
          </ChatReservationDetailInfoTitle>

          <ChatReservationDetailInfoContentContainer>
            <ChatReservationDetailInfoContent>
              <ChatReservationDetailInfoDateContainer>
                <ChatReservationDetailInfoDateTitle>{'날짜'}</ChatReservationDetailInfoDateTitle>
                <ChatReservationDetailInfoDateText>
                  {'2024년 12월 15일 (목)'}
                </ChatReservationDetailInfoDateText>
              </ChatReservationDetailInfoDateContainer>

              <ChatReservationDetailInfoTimeContainer>
                <ChatReservationDetailInfoTimeTitle>{'시간'}</ChatReservationDetailInfoTimeTitle>
                <ChatReservationDetailInfoTimeText>
                  {'오전 10:00 ~ 오후 1:00'}
                </ChatReservationDetailInfoTimeText>
              </ChatReservationDetailInfoTimeContainer>

              <ChatReservationDetailInfoLocationContainer>
                <ChatReservationDetailInfoLocationTitle>
                  {'장소'}
                </ChatReservationDetailInfoLocationTitle>
                <ChatReservationDetailInfoLocationText>
                  <ChatReservationDetailInfoLocationTextTitle>
                    {'라이트 스튜디오'}
                  </ChatReservationDetailInfoLocationTextTitle>

                  <ChatReservationDetailInfoLocationTextSubText>
                    {'경기도 성남시 수정구 성남대로 1342'}
                  </ChatReservationDetailInfoLocationTextSubText>
                </ChatReservationDetailInfoLocationText>
              </ChatReservationDetailInfoLocationContainer>

              <ChatReservationDetailInfoFilterContainer>
                <ChatReservationDetailInfoFilterTitle>
                  {'필터'}
                </ChatReservationDetailInfoFilterTitle>
                <ChatReservationDetailInfoFilterContent>
                  <ChatReservationDetailInfoFilterContentTitle>
                    {'도회적인'}
                  </ChatReservationDetailInfoFilterContentTitle>
                  <ChatReservationDetailInfoFilterContentDivider>
                    {'/'}
                  </ChatReservationDetailInfoFilterContentDivider>
                  <ChatReservationDetailInfoFilterContentTitle>
                    {'빈티지'}
                  </ChatReservationDetailInfoFilterContentTitle>
                  <ChatReservationDetailInfoFilterContentDivider>
                    {'/'}
                  </ChatReservationDetailInfoFilterContentDivider>
                  <ChatReservationDetailInfoFilterContentTitle>
                    {'몽환적인'}
                  </ChatReservationDetailInfoFilterContentTitle>
                </ChatReservationDetailInfoFilterContent>
              </ChatReservationDetailInfoFilterContainer>
            </ChatReservationDetailInfoContent>

            <ChatReservationDetailInfoRequestContainer>
              <ChatReservationDetailInfoRequestTitle>
                {'요청'}
              </ChatReservationDetailInfoRequestTitle>

              <ChatReservationDetailInfoRequestContent>
                {
                  '서로 즐겨 하는 포즈나 습관을 담고 싶어요. 기념일을 맞아 촬영합니다. 프러포즈를 앞두고 있어요! 촬영 중 반지를 건네는 순간을 자연스럽게 담아주시면 좋겠습니다. 둘 다 활동적인 걸 좋아해서 움직이는 장면을 많이 찍어주시면 좋겠어요.'
                }
              </ChatReservationDetailInfoRequestContent>
            </ChatReservationDetailInfoRequestContainer>
          </ChatReservationDetailInfoContentContainer>

          {/* 패키지 설명 */}
          <ChatReservationDetailInfoPackageContainer>
            {/* 첫번째 패키지 설명 */}
            <ChatReservationDetailInfoPackageContent>
              <ChatReservationDetailInfoPackageContentTitle>
                <ChatReservationDetailInfoPackageContentName>
                  {'패키지 B'}
                </ChatReservationDetailInfoPackageContentName>
                <ChatReservationDetailInfoPackageContentPrice>
                  {'800,000원'}
                </ChatReservationDetailInfoPackageContentPrice>
              </ChatReservationDetailInfoPackageContentTitle>

              <ChatReservationDetailInfoPackageContentDetail>
                <ChatReservationDetailInfoPackageContentDetailText>
                  {'모먼트 패키지 1세트'}
                </ChatReservationDetailInfoPackageContentDetailText>
                <ChatReservationDetailInfoPackageContentDetailText>
                  {'세밀 보정본 10장'}
                </ChatReservationDetailInfoPackageContentDetailText>
                <ChatReservationDetailInfoPackageContentDetailText>
                  {'색보정본 10장'}
                </ChatReservationDetailInfoPackageContentDetailText>
                <ChatReservationDetailInfoPackageContentDetailText>
                  {'분할 컷 2장'}
                </ChatReservationDetailInfoPackageContentDetailText>
              </ChatReservationDetailInfoPackageContentDetail>

              <ChatReservationDetailInfoPackageContentDetailMessage>
                {'장소는 원하시는 장소 또는 바담 추천 제공드립니다. 기본은 1시간입니다.'}
              </ChatReservationDetailInfoPackageContentDetailMessage>
            </ChatReservationDetailInfoPackageContent>

            {/* 두번째 패키지 설명 */}
            <ChatReservationDetailInfoPackageContent>
              <ChatReservationDetailInfoPackageContentTitle>
                <ChatReservationDetailInfoPackageContentName>
                  {'편집본 추가'}
                </ChatReservationDetailInfoPackageContentName>
                <ChatReservationDetailInfoPackageContentQuantity>
                  {'2장'}
                </ChatReservationDetailInfoPackageContentQuantity>
                <ChatReservationDetailInfoPackageContentPrice>
                  {'100,000원'}
                </ChatReservationDetailInfoPackageContentPrice>
              </ChatReservationDetailInfoPackageContentTitle>

              <ChatReservationDetailInfoPackageQuantity>
                {'1장'}
              </ChatReservationDetailInfoPackageQuantity>

              <ChatReservationDetailInfoPackageContentDetailMessage>
                {
                  '최대 5장까지 가능합니다. 추가된 편집본 장 수에 따라 최대 3일정도 추가로 소요될 수 있습니다.'
                }
              </ChatReservationDetailInfoPackageContentDetailMessage>
            </ChatReservationDetailInfoPackageContent>
          </ChatReservationDetailInfoPackageContainer>
        </ChatReservationDetailInfoContainer>
      </ChatReservationDetailContentContainer>

      <ChatReservationDetailPaymentContentContainer>
        <ChatReservationDetailInfoTitle>
          <ChatReservationDetailInfoTitleIcon />
          <ChatReservationDetailInfoTitleText>{'결제 정보'}</ChatReservationDetailInfoTitleText>
        </ChatReservationDetailInfoTitle>

        <ChatReservationDetailPaymentContent>
          <ChatReservationDetailPaymentContentTitle>
            <ChatReservationDetailPaymentContentTitleText>
              {'서비스 가격'}
            </ChatReservationDetailPaymentContentTitleText>
            <ChatReservationDetailPaymentContentTitlePrice>
              {'1,500,000원'}
            </ChatReservationDetailPaymentContentTitlePrice>
          </ChatReservationDetailPaymentContentTitle>

          <ChatReservationDetailPaymentContentDetail>
            <ChatReservationDetailPaymentContentDetailTitle>
              <ChatReservationDetailPaymentContentDetailTitleText>
                {'기본선택'}
              </ChatReservationDetailPaymentContentDetailTitleText>
              <ChatReservationDetailPaymentContentDetailTitlePackageName>
                {'패키지 B'}
              </ChatReservationDetailPaymentContentDetailTitlePackageName>
            </ChatReservationDetailPaymentContentDetailTitle>

            <ChatReservationDetailPaymentContentDetailTitle>
              <ChatReservationDetailPaymentContentDetailTitleText>
                {'옵션'}
              </ChatReservationDetailPaymentContentDetailTitleText>
              <ChatReservationDetailPaymentContentDetailTitlePackageName>
                {'시간추가 1시간(2), 편집본 추가 2장(1)'}
              </ChatReservationDetailPaymentContentDetailTitlePackageName>
            </ChatReservationDetailPaymentContentDetailTitle>
          </ChatReservationDetailPaymentContentDetail>
        </ChatReservationDetailPaymentContent>

        <ChatReservationDetailPaymentContentDivider />

        {/* 전체 금액 */}
        <ChatReservationDetailPaymentContentTotal>
          <ChatReservationDetailPaymentContentTotalText>
            {'총 결제 금액'}
          </ChatReservationDetailPaymentContentTotalText>
          <ChatReservationDetailPaymentContentTotalPrice>
            {'1,500,000원'}
          </ChatReservationDetailPaymentContentTotalPrice>
          <ChatReservationDetailPaymentContentTotalCard>
            {'국민카드 / 일시불'}
          </ChatReservationDetailPaymentContentTotalCard>
        </ChatReservationDetailPaymentContentTotal>

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
  height: 100vh;
  overflow-y: auto;
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

const ChatReservationDetailType = styled.div`
  display: flex;
  gap: 8px;
`;

interface ChatReservationDetailTypeTitleProps {
  isActive: boolean;
}

const ChatReservationDetailTypeTitle = styled.div<ChatReservationDetailTypeTitleProps>`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.lightMode.brand.dark : theme.colors.lightMode.text.text5};
`;

const ChatReservationDetailTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailContent = styled.div`
  display: flex;
  width: 100%;
  height: 126px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bgColor};
  border-radius: 4px;
  gap: 13px;
`;

const ChatReservationDetailContentImage = styled.div`
  display: flex;
  width: 102px;
  height: 102px;
`;

const ChatReservationDetailContentText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatReservationDetailContentTextTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
`;

const ChatReservationDetailContentSubText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
`;

const ChatReservationDetailContentTextType = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const ChatReservationDetailContentTextName = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text2};
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

const ChatReservationDetailInfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ChatReservationDetailInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ChatReservationDetailInfoDateContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const ChatReservationDetailInfoDateTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: #7f7e7e;
`;

const ChatReservationDetailInfoDateText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
`;

const ChatReservationDetailInfoTimeContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const ChatReservationDetailInfoTimeTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: #7f7e7e;
`;

const ChatReservationDetailInfoTimeText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailInfoLocationContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const ChatReservationDetailInfoLocationTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: #7f7e7e;
`;

const ChatReservationDetailInfoLocationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChatReservationDetailInfoLocationTextTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailInfoLocationTextSubText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const ChatReservationDetailInfoFilterContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const ChatReservationDetailInfoFilterTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelM};
  color: #7f7e7e;
`;

const ChatReservationDetailInfoFilterContent = styled.div`
  display: flex;
  gap: 8px;
`;

const ChatReservationDetailInfoFilterContentTitle = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailInfoFilterContentDivider = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #c4c4c4;
`;

const ChatReservationDetailInfoRequestContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;

const ChatReservationDetailInfoRequestTitle = styled.div`
  display: flex;
  flex-shrink: 0;
  font: ${({ theme }) => theme.fonts.labelM};
  color: #7f7e7e;
`;

const ChatReservationDetailInfoRequestContent = styled.div`
  display: flex;
  width: 100%;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
`;

const ChatReservationDetailInfoPackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChatReservationDetailInfoPackageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bgColor};
  gap: 16px;
`;
const ChatReservationDetailInfoPackageContentTitle = styled.div`
  display: flex;
  gap: 24px;
`;

const ChatReservationDetailInfoPackageContentName = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailInfoPackageContentQuantity = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailInfoPackageContentPrice = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailInfoPackageQuantity = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.title3};
  color: #454545;
`;

const ChatReservationDetailInfoPackageContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ChatReservationDetailInfoPackageContentDetailText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #878686;
`;

const ChatReservationDetailInfoPackageContentDetailMessage = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #878686;
`;

const ChatReservationDetailPaymentContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 32px 16px;
  gap: 24px;
`;

const ChatReservationDetailPaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChatReservationDetailPaymentContentTitle = styled.div`
  display: flex;
  gap: 8px;
`;

const ChatReservationDetailPaymentContentTitleText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailPaymentContentTitlePrice = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailPaymentContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.lightMode.background.bg2};
`;

const ChatReservationDetailPaymentContentDetailTitle = styled.div`
  display: flex;
  gap: 12px;
`;

const ChatReservationDetailPaymentContentDetailTitleText = styled.div`
  display: flex;
  width: 49px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailPaymentContentDetailTitlePackageName = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #9d9d9d;
`;

const ChatReservationDetailPaymentContentDivider = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightMode.divider.divider2};
`;

const ChatReservationDetailPaymentContentTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChatReservationDetailPaymentContentTotalText = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelMB};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailPaymentContentTotalPrice = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.labelL};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
`;

const ChatReservationDetailPaymentContentTotalCard = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.body4};
  color: #878787;
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
