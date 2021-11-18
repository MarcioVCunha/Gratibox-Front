/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Phrase = (props) => {
  const { text } = props;

  return (
    <Text>{text}</Text>
  );
};

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: white;
  text-align: center;
`;

export default Phrase;