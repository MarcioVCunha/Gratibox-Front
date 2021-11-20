import styled from 'styled-components';
import Date from './date';
import Plan from './plan';
import Products from './products';

const Content = () => {
  return (
    <Container>
      <BigImage src='https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image03.jpg' />
      <ContainerForms>
        <Plan />
        <Date />
        <Products />
      </ContainerForms>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  width: 90vw;
  height: 60vh;
  border-radius: 40px;
  overflow: scroll;
`;

const ContainerForms = styled.div`
  width: 100%;
  border-radius: 0 0 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BigImage = styled.img`
  width: 100%;
  max-height: 60%;
  border-radius: 40px 40px 0 0;
`;

export default Content;