/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../services/service.sign-up';
import { useContext } from 'react';
import UserContext from '../../context/userContext';
import { registerSchema } from '../../validations/userValidation.js';
import { postSignIn } from '../../services/service.sing-in';

const Button = (props) => {
  const navigate = useNavigate();
  const { text, link } = props;
  const { name, email, password, passwordRepeat } = useContext(UserContext);

  const handleClick = async () => {
    if (text === 'Login') {
      const userInfo = {
        email,
        password
      };

      if (email !== '' && password !== '') {
        try {
          const promisse = await postSignIn(userInfo);
          localStorage.setItem('token', promisse.data);
          alert('Login realizado.');
          navigate('/homepage');
          return;
        } catch (error) {
          if (error.response.status === 404) {
            alert('Email ou senha incorretos.');
            return;
          } else {
            console.log(error);
            alert('Estamos com um problema interno no servidor, contate o suporte');
            return;
          }
        }
      } else {
        alert('Favor preencher os campos corretamente');
        return;
      }
    }

    if (text === 'Cadastrar') {
      const userInfo = {
        name,
        email,
        password,
        passwordRepeat
      };

      const validation = await registerSchema.validate(userInfo);

      if (validation.error === undefined) {
        try {
          const promisse = await postSignUp(userInfo);
          alert('Cadastro Criado');
          navigate('/sign-in');
          return;
        } catch {
          alert('Email já cadastrado');
          return;
        }
      } else {
        alert(`
          Parece que algo deu errado, preencha os campos corretamente.
          Cada campo deve ter pelo menos 3 caracteres.
        `);
        return;
      }
    }

    navigate(link);
  };

  return (
    <RoundButton onClick={() => handleClick()}>{text}</RoundButton>
  );
};

const RoundButton = styled.button`
  border: none;
  background-color: #8C97EA;
  border-radius: 6px;
  width: 60vw;
  height: 8vh;
  color: white;
  font-size: 22px;
  font-weight: 700;

  :active{
    opacity: 0.5;
  }
`;

export default Button;