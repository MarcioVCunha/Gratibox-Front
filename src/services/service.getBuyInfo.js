import axios from 'axios';
import BASE_URL from './base-url';

const getBuyInfo = (config) => {
  return axios.get(`${BASE_URL}/buy-info`, config);
};

export default getBuyInfo;