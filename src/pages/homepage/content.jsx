import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../shared/button';

/* eslint-disable react/prop-types */
const Content = (props) => {
  const { isTherePlan, plan } = props;
  const [flip, setFlip] = useState(true);
  let flipValue = useRef();

  const switchFlip = () => {
    flipValue.current = !flipValue.current && setInterval(() => {
      setFlip(prevFlip => !prevFlip);
    }, 5000);
  };

  useEffect(() => {
    switchFlip();
  }, []);

  if (isTherePlan) {
    return (
      <p>Teste</p>
    );
  }

  return (
    <Container>
      <FrontPage flip={flip}>
        <img src={'https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image04.jpg'} alt='woman meditading with a lot of plants' />
        <p>
          Você recebe um box por semana.
          <br />
          Ideal para quem quer exercer a gratidão todos os dias.
        </p>
        <Button onClick={() => clearInterval(flipValue.current)} text='Assinar' link='/plans' />
      </FrontPage>
      <BackPage flip={flip}>
        <img src={'https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image02.jpg'} alt='woman meditading with in her bedroom' />
        <p>
          Você recebe um box por mês.
          <br />
          Ideal para quem está começando agora.
        </p>
        <Button onClick={() => clearInterval(flipValue.current)} text='Assinar' link='/plans' />
      </BackPage>
    </Container>
  );
};

const Container = styled.div`
  background-color: #e5cdb3;
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

  p{
    width: 70%;
    font-weight: 700;
    font-size: 18px;
    color: #4D65A8;
    margin-bottom: 1vh;
  }
`;

const FrontPage = styled.div`
  transition: transform 1s linear;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: ${(props) => props.flip ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BackPage = styled.div`
  transition: transform 1s linear;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: ${(props) => props.flip ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default Content;