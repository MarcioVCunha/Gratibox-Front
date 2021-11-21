import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../context/userContext';
import Title from '../shared/title';
import createConfig from '../../services/service.create-config';
import getUserInfo from '../../services/service.user-info';
import { useNavigate } from 'react-router-dom';
import Phrase from '../shared/phrase';
import Content from './content';
import Button from './button';

const Plan = () => {
  const { name, setName } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const config = createConfig();
    const promisse = getUserInfo(config);
    promisse
      .then((res) => {
        setName(res.data.name);
      })
      .catch((error) => {
        alert('Seu token expirou, favor logar novamente');
        navigate('/');
      });
  }, []);

  return (
    <Page>
      <Title text={`Bom te ver por aqui, ${name}`} />
      <Phrase text='“Agradecer é arte de atrair coisas boas”' />
      <Content />
      <Button />
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

export default Plan;