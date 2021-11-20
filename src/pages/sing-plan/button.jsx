import { useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import BuyContext from '../../context/buyContext';

const Button = () => {
  const { buyInfo } = useContext(BuyContext);
  const navigate = useNavigate();

  const checkBuy = () => {
    const { tea, incense, organic } = buyInfo.product;

    if(!tea && !incense && !organic){
      alert('Favor preencher os produtos que quer receber.');
      return;
    }

    navigate('finalize');
  };

  return (
    <RoundButton onClick={checkBuy}>Próximo</RoundButton>
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