import axios from 'axios';
import BASE_URL from './base-url';

const postSignIn = (userInfo) => {
  return axios.post(`${BASE_URL}/sign-in`, userInfo);
};

export { postSignIn };