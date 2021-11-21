import { useContext } from 'react';
import styled from 'styled-components';
import BuyContext from '../../context/buyContext';

const City = () => {
  const { buyInfo } = useContext(BuyContext);

  return (
    <Container>
      <input placeholder='Cidade' onChange={(e) => buyInfo.delivery.city = e.target.value}></input>
    </Container>
  );
};

const Container = styled.div`
  width: 55%;
  background-color: #e0d1ed;
  height: 30%;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 18px;
    color: #4D65A8;
    ::placeholder{
      opacity: 1;
    }
  }
`;

export default City;