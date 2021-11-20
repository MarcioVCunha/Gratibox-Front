import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../context/userContext';
import createConfing from '../../services/service.create-config';
import getUserInfo from '../../services/service.user-info';
import Phrase from '../shared/phrase';
import Title from '../shared/title';
import Content from './content.jsx';

const Homepage = () => {
  const { name, setName } = useContext(UserContext);
  const [isTherePlan, setIsTherePlan] = useState(false);
  const [plan, setPlan] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const config = createConfing();
    const promisse = getUserInfo(config);
    promisse
      .then((res) => {
        setName(res.data.name);
        setIsTherePlan(res.data.plan !== undefined ? true : false);
        if (isTherePlan) {
          setPlan(res.data.plan);
        }
      })
      .catch((error) => {
        alert('Seu token expirou, favor logar novamente');
        navigate('/');
      });
  }, []);

  return (
    <Page>
      <TopContainer>
        <Title text={`Bom te ver por aqui, ${name}`} />
        <Phrase text={isTherePlan ? '"Agradecer é a arte de atrair coisas boas"' : 'Você ainda não assinou um plano, que tal começar agora?'} />
      </TopContainer>
      <Content isTherePlan={isTherePlan} plan={plan} />
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
  padding: 5vh 5vw;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
`;


export default Homepage;