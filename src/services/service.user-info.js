import axios from 'axios';
import BASE_URL from './base-url';

const getUserInfo = (config) => {
  return axios.get(`${BASE_URL}/get-user-info`, config);
};

export default getUserInfo;