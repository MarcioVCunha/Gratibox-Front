/* eslint-disable react/prop-types */
import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../context/userContext';

const TextInput = (props) => {
  const { placeholder, setFunction } = props;

  return (
    <Input onChange={(e) => setFunction(e.target.value)} placeholder={placeholder} />
  );
};

const Input = styled.input`
  border: solid 1px #604848;
  border-radius: 10px;
  height: 8vh;
  margin: 5px 0;
  padding: 10px;
  font-size: 20px;
`;

export default TextInput;