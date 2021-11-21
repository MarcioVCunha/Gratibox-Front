import { useContext } from 'react';
import BuyContext from '../../context/buyContext';
import styled from 'styled-components';
import { zipCodeSchema } from '../../validations/zipCodeValidation';
import postBuyInfo from '../../services/service.send-buy-info';
import createConfig from '../../services/service.create-config';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const { buyInfo } = useContext(BuyContext);
  const navigate = useNavigate();
  const finalize = async () => {
    const zipCode = buyInfo.delivery.zipCode;
    const validation = await zipCodeSchema.validate({ zipCode });
    const config = createConfig();

    if (buyInfo.delivery.buyerName === '' || buyInfo.delivery.address === '' || validation.error !== undefined || buyInfo.delivery.city === '' || buyInfo.delivery.state === 'Estado') {
      alert('Favor preencher todos os dados corretamente');
      return;
    }

    buyInfo.delivery.city = buyInfo.delivery.city.toLowerCase();
    buyInfo.delivery.address = buyInfo.delivery.address.toLowerCase();

    try {
      const response = await postBuyInfo(buyInfo, config);
      if (response.status === 200) {
        alert('Inscrição feita');
        navigate('/homepage');
        return;
      }
    } catch (error) {
      alert('Algo deu errado, consulte o suporte');
      navigate('/');
      return;
    }
  };

  return (
    <RoundButton onClick={() => finalize()}>
      Finalizar
    </RoundButton>
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