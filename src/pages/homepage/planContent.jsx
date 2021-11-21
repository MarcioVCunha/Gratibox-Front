import styled from 'styled-components';
import createConfig from '../../services/service.create-config';
import getBuyInfo from '../../services/service.getBuyInfo';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PlanContent = () => {
  const config = createConfig();
  const navigate = useNavigate();
  let buyInfo;

  useEffect(() => {
    const promisse = getBuyInfo(config);

    promisse
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        alert('Parece que seu token expirou, favor logar novamente');
        navigate('/');
      });
  }, []);

  return (
    <PlanContainer>

    </PlanContainer>
  );
};

export default PlanContent;

const PlanContainer = styled.div`
  background-color: white;
  width: 80vw;
  height: 70vh;
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img{
    width: 90%;
    max-height: 50%;
    border-radius: 40px 40px 0 0;
  }
`;