import { useContext, useState } from 'react';
import styled from 'styled-components';
import DownArrow from '../../assets/DownArrow.svg';
import BuyContext from '../../context/buyContext';

const State = () => {
  const [state, setState] = useState('Estado');
  const [isExpanded, setIsExpanded] = useState(false);
  const list = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const { buyInfo } = useContext(BuyContext);

  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  const selectState = (state) => {
    expand();
    setState(state);
    buyInfo.delivery.state = state;
  };

  return (
    <ContainerWithExpandable>
      <Container isExpanded={isExpanded}>
        <p>{state}</p>
        <img src={DownArrow} onClick={() => expand()} />
      </Container>
      <ListStates isExpanded={isExpanded}>
        {list.map((stateInitials, key) => {
          return (
            <p key={key} onClick={() => selectState(stateInitials)}>{stateInitials}</p>
          );
        })}
      </ListStates>
    </ContainerWithExpandable>
  );
};

const ContainerWithExpandable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 30%;
  background-color: #e0d1ed;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 700;
    color: #4D65A8;
  }

  img {
    height: 18px;
    width: 15px;
    transform: ${(props) => props.isExpanded ? 'rotateX(180deg)' : 'rotateX(0deg)'};
  }
`;

const ListStates = styled.div`
  display: ${(props) => props.isExpanded ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  margin: 10px;

  p{
    margin: 5px;
    padding: 10px;
    text-align: center;
    border: 1px solid purple;
    color: #4D65A8;
  }
`;

export default State;