import IcBack from '@icon/ic-arrow-back-up.svg';
import styled from '@emotion/styled';

const LoginHeader = () => {
  return (
    <HeaderContainer>
      <IconWrapper>
        <img src={IcBack} alt="뒤로가기" />
      </IconWrapper>
    </HeaderContainer>
  );
};

export default LoginHeader;

const HeaderContainer = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightMode.brand.primary};
  padding: 8px 8px 8px 4px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
