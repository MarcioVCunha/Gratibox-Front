import { useContext, useState } from 'react';
import styled from 'styled-components';
import DownArrow from '../../assets/DownArrow.svg';
import BuyContext from '../../context/buyContext';

const Date = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [firstChecked, setFirstChecked] = useState(true);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [firstText, setFirstText] = useState('Dia 01');
  const [secondText, setSecondText] = useState('Dia 10');
  const [thirdText, setThirdText] = useState('Dia 20');
  const { buyInfo } = useContext(BuyContext);

  const expand = () => {
    setIsExpanded(!isExpanded);
    setFirstText(buyInfo.product.plan === 'Semanal' ? 'Segunda' : 'Dia 01');
    setSecondText(buyInfo.product.plan === 'Semanal' ? 'Quarta' : 'Dia 10');
    setThirdText(buyInfo.product.plan === 'Semanal' ? 'Sexta' : 'Dia 20');
  };

  const selectDate = (type) => {
    if (type === 'first' && !firstChecked) {
      setFirstChecked(true);
      setSecondChecked(false);
      setThirdChecked(false);

      buyInfo.delivery.date = 1;
    }

    if (type === 'second' && !secondChecked) {
      setFirstChecked(false);
      setSecondChecked(true);
      setThirdChecked(false);

      buyInfo.delivery.date = 2;
    }

    if (type === 'third' && !thirdChecked) {
      setFirstChecked(false);
      setSecondChecked(false);
      setThirdChecked(true);

      buyInfo.delivery.date = 3;
    }
  };

  return (
    <Container>
      <ClosedContainer isExpanded={isExpanded} >
        <p>Entrega</p>
        <img src={DownArrow} onClick={() => expand()} />
      </ClosedContainer>
      <Options isExpanded={isExpanded}>
        <div>
          <input onClick={() => selectDate('first')} type="checkbox" checked={firstChecked} readOnly />
          {firstText}
        </div>
        <div>
          <input onClick={() => selectDate('second')} type="checkbox" checked={secondChecked} readOnly />
          {secondText}
        </div>
        <div>
          <input onClick={() => selectDate('third')} type="checkbox" checked={thirdChecked} readOnly />
          {thirdText}
        </div>
      </Options>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  background-color: #e0d1ed;
  height: 30%;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
`;

const ClosedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;

  p{
    font-weight: 700;
    font-size: 18px;
    color: #4D65A8;;
  }

  img{
    width: 30px;
    transform: ${(props) => props.isExpanded ? 'rotateX(180deg)' : 'rotateX(0deg)'};
  }
`;

const Options = styled.div`
  display: ${(props) => props.isExpanded ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;

export default Date;