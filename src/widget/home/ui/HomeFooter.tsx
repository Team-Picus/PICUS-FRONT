import styled from '@emotion/styled';
import IcFooterLogo from '@icon/ic-footer-logo.svg';

const HomeFooter = () => {
  return (
    <HomeFooterContainer>
      <img src={IcFooterLogo} alt="" />
      <HomeFooterPolicySection>
        <span>이메일</span>
        <span>서비스 문의사항</span>
        <span>개인정보 처리방침</span>
        <span>사이트 이용 약관</span>
        <span>쿠키 정책</span>
      </HomeFooterPolicySection>
      <HomeFooterCopyrightSection>
        <span>Copyright 2025. PICUS. All right reserved.</span>
        <span>v.1.0.0</span>
      </HomeFooterCopyrightSection>
    </HomeFooterContainer>
  );
};

export default HomeFooter;

const HomeFooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkMode.background.bg1};
  display: flex;
  flex-direction: column;
  padding: 24px 12px 34px 12px;

  img {
    width: 222px;
    object-fit: cover;
  }
`;

const HomeFooterPolicySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 18px;
  margin-top: 48px;
  margin-bottom: 63px;

  span {
    flex: 0 0 auto;
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.lightMode.text.text2};
    text-decoration: underline;
    width: fit-content;
    cursor: pointer;
    white-space: nowrap;
  }

  @media (max-width: 440px) {
    padding-right: 30px;
    margin-top: 43px;
    margin-bottom: 24px;
  }
`;

const HomeFooterCopyrightSection = styled.div`
  font: ${({ theme }) => theme.fonts.body4};
  font-size: 13px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkMode.text.text5};
  gap: 20px;
`;
