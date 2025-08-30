import styled from '@emotion/styled';
import LoginHeader from '@widget/login/ui/LoginHeader';
import LoginMain from '@widget/login/ui/LoginMain';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginHeader />
      <LoginMain />
    </LoginPageContainer>
  );
};

export default LoginPage;

const LoginPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  background-color: black;
`;
