import TextInput from '../shared/textInput';
import Title from '../shared/title';
import Button from '../shared/button';
import BottomText from '../shared/bottomText';
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext';

const SignIn = () => {
  const { setEmail, setPassword } = useContext(UserContext);

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <Page>
      <Title text='Bem vindo ao Gratibox' />
      <ContainerInputs>
        <TextInput setFunction={setEmail} placeholder='Email' />
        <TextInput setFunction={setPassword} placeholder='Senha' />
      </ContainerInputs>
      <BottomDiv>
        <Button text='Login' />
        <BottomText link='/sign-up' text='Ainda não sou grato' />
      </BottomDiv>
    </Page>
  );
};

const Page = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 5vh 0;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignIn;