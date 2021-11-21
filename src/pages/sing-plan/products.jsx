import { useContext, useState } from 'react';
import styled from 'styled-components';
import DownArrow from '../../assets/DownArrow.svg';
import BuyContext from '../../context/buyContext';

const Date = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const { buyInfo } = useContext(BuyContext);

  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  const selectDate = (type) => {
    if (type === 'first') {
      buyInfo.product.tea = !firstChecked;
      setFirstChecked(!firstChecked);
    }

    if (type === 'second') {
      buyInfo.product.incense = !secondChecked;
      setSecondChecked(!secondChecked);
    }

    if (type === 'third') {
      buyInfo.product.organic = !thirdChecked;
      setThirdChecked(!thirdChecked);
    }
  };

  return (
    <Container>
      <ClosedContainer isExpanded={isExpanded} >
        <p>Quero receber</p>
        <img src={DownArrow} onClick={() => expand()} />
      </ClosedContainer>
      <Options isExpanded={isExpanded}>
        <div>
          <input onClick={() => selectDate('first')} type="checkbox" checked={firstChecked} readOnly />
          {'Chás'}
        </div>
        <div>
          <input onClick={() => selectDate('second')} type="checkbox" checked={secondChecked} readOnly />
          {'Incensos'}
        </div>
        <div>
          <input onClick={() => selectDate('third')} type="checkbox" checked={thirdChecked} readOnly />
          {'Produtos organicos'}
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