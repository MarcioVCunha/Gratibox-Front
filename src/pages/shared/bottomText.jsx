/* eslint-disable react/prop-types */
import styled from 'styled-components';

const BottomText = (props) => {
  const { text } = props;

  return(
    <Text>{text}</Text>
  );
};

const Text = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

export default BottomText;