import { styled } from 'styled-components';
import Input from '../common/Input';

import { HiUser, HiMiniLockClosed } from "react-icons/hi2";

interface ILoginProps {
  top?: string;
}

function Login() {
  return (
    <Container>
      <Wrap>
        <StyledLogoBox>
          <Image src='../images/blue_bg.svg' alt='wait' />
        </StyledLogoBox>
        <StyledLoginBox>
          <StyledInputBox>
            <StyledIconBox>
              <HiUser />
            </StyledIconBox >
            <Input width='85%' height='94%' />
          </StyledInputBox>
          <StyledInputBox top='top'>
            <StyledIconBox>
              <HiMiniLockClosed />
            </StyledIconBox>
            <Input width='85%' height='94%' />
          </StyledInputBox>
          <StyledLoginButton>로그인</StyledLoginButton>
          <StyledMenuBox>
            <StyledMenuLink>Email 찾기</StyledMenuLink>
            <StyledMenuLink>비밀번호 찾기</StyledMenuLink>
          </StyledMenuBox>
          <StyledBlock />
          <StyledJoinButton>처음 방문하셨나요?</StyledJoinButton>
        </StyledLoginBox>
        <StyledBannerBox>
          <Image src='../images/dmu.png' alt='wait' />
        </StyledBannerBox>
      </Wrap>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrap = styled.div`
  width: 35%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid #D8D8D8;
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.22);
`

const StyledLogoBox = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLoginBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;
  border: 1px #D9D8D7;
`

const StyledInputBox = styled.div<ILoginProps>`
  width: 75%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${(props) => props.top === 'top' ? '0px' : 'solid 2px #D9D8D7'};
  border-bottom: ${(props) => props.top === 'top' ? '0px' : 'solid 2px #D9D8D7'};
  border-left: solid 2px #D9D8D7;
  border-right: solid 2px #D9D8D7;
`

const StyledIconBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  border-right: solid 1px #D9D8D7;
`

const StyledLoginButton = styled.div`
  width: 75.8%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #0064ff;
  cursor: pointer;
`

const StyledJoinButton = styled.div`
  width: 75.8%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #0064ff;
  cursor: pointer;
`

const StyledBlock = styled.div`
  width: 75%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-top: solid 1px #D9D8D7;
`

const StyledMenuBox = styled.div`
  width: 75%;
  height: 15%;
  display: flex;
  justify-content: space-around;
`

const StyledMenuLink = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:  #A4A4A4;
  font-size: 14px;
`

const StyledBannerBox = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`

const Image = styled.img`
  width: 30%;
  height: 65%;
`