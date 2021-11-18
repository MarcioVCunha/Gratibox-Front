import styled from 'styled-components';
import Phrase from '../shared/phrase';
import Title from '../shared/title';
import BottomText from '../shared/bottomText';
import Button from '../shared/button';

const FrontPage = () => {
  
  return (
    <>
      <Page>
        <TextDiv>
          <Title text='Bem vindo ao Gratibox' />
          <Phrase text='Receba em casa um box com chás, produtos organicos, incensos e muito mais...' />
        </TextDiv>
      </Page>
      <BottomContainer>
        <Button link='/sign-up' text='Quero começar' />
        <BottomText link='/sign-in' text='Já sou grato' />
      </BottomContainer>
    </>
  );
};

const Page = styled.main`
  width: 100vw;
  height: 80vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url('https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image05.webp?raw=true');
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
`;

const TextDiv = styled.div`
  width: 90%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  background-color: rgb(77, 101, 168);
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default FrontPage;