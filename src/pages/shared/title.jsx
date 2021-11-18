/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Title = (props) => {
  const { text } = props;

  return (
    <Text>{text}</Text>
  );
};

const Text = styled.p`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
`;

export default Title;