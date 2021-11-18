/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BottomText = (props) => {
  const navigate = useNavigate();
  const { text, link } = props;

  return (
    <Text onClick={() => navigate(link)}>{text}</Text>
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