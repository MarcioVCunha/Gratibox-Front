import TextInput from '../shared/textInput';
import Title from '../shared/title';
import Button from '../shared/button';
import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../../context/userContext';

const SignUp = () => {
  const { setName, setEmail, setPassword, setPasswordRepeat } = useContext(UserContext);

  return (
    <Page>
      <Title text='Bem vindo ao Gratibox' />
      <ContainerInputs>
        <TextInput setFunction={setName} placeholder='Nome' />
        <TextInput setFunction={setEmail} placeholder='Email' />
        <TextInput setFunction={setPassword} placeholder='Senha' />
        <TextInput setFunction={setPasswordRepeat} placeholder='Confirmar Senha' />
      </ContainerInputs>
      <Button link='/' text='Cadastrar' />
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

export default SignUp;