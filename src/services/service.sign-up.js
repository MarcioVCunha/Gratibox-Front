import axios from 'axios';
import BASE_URL from './base-url';

const postSignUp = (userInfo) => {
  return axios.post(`${BASE_URL}/sign-up`, userInfo);
};

export { postSignUp };