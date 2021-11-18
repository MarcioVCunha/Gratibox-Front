/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Button = (props) => {
  const { text } = props;

  return (
    <RoundButton>{text}</RoundButton>
  );
};

const RoundButton = styled.button`
  border: none;
  background-color: #8C97EA;
  border-radius: 6px;
  width: 60vw;
  height: 5vh;
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

export default Button;