import { useContext, useState } from 'react';
import styled from 'styled-components';
import DownArrow from '../../assets/DownArrow.svg';
import BuyContext from '../../context/buyContext';

const Plan = () => {
  const { buyInfo } = useContext(BuyContext);
  const [isExpanded, setIsExpended] = useState(false);
  const [checked, setChecked] = useState(true);

  const expand = () => {
    setIsExpended(!isExpanded);
  };

  const selectPlan = (type) => {
    if (type === 'Semanal' && checked === false) {
      setChecked(!checked);
      buyInfo.product.plan = 'Semanal';
    }

    if (type === 'Mensal' && checked === true) {
      setChecked(!checked);
      buyInfo.product.plan = 'Mensal';
    }
  };

  return (
    <Container>
      <ClosedContainer isExpanded={isExpanded} >
        <p>Plano</p>
        <img src={DownArrow} onClick={() => expand()} />
      </ClosedContainer>
      <Options isExpanded={isExpanded}>
        <div>
          <input onClick={() => selectPlan('Semanal')} type="checkbox" checked={checked} readOnly />
          Semanal
        </div>
        <div>
          <input onClick={() => selectPlan('Mensal')} type="checkbox" checked={!checked} readOnly />
          Mensal
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
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;

export default Plan;