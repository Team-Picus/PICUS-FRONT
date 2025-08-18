import styled from '@emotion/styled';
import IcPicusLogo from '@icon/ic-picus-logo-primary.svg';
import IcKakaoLogo from '@icon/ic-kakao-logo.svg';

const LoginMain = () => {
  return (
    <LoginMainContainer>
      <LoginTitleContainer>
        <LoginTitle>{'Photography,\nPersonally.'}</LoginTitle>
        <PicusLogo src={IcPicusLogo} alt="picus logo" />
      </LoginTitleContainer>
      <LoginButtonContainer>
        <LoginButton>
          <LoginButtonContent>
            <KaKaoLogo src={IcKakaoLogo} alt="kakao logo" />
            {'카카오로 로그인'}
          </LoginButtonContent>
        </LoginButton>
      </LoginButtonContainer>
    </LoginMainContainer>
  );
};

export default LoginMain;

const LoginMainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
  color: white;
`;

const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 384px;
  min-width: 375px;
  gap: 19px;
  padding: 0 32px;
`;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.title2};
  white-space: pre-line;
`;

const PicusLogo = styled.img`
  width: 220px;
  height: 105px;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 393px;
  padding: 0 16px;
`;

const LoginButton = styled.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  height: 45px;
  border-radius: 6px;
  background-color: #fee500;
  padding: 0 14px;
  align-items: center;
  justify-content: center;
`;

const LoginButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  font-family: 'AppleSDGothicNeo';
  font-size: 15px;
  font-weight: 600;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.85); /* 85% 투명도 적용 */
`;

const KaKaoLogo = styled.img`
  width: 18px;
  height: 18px;
`;
