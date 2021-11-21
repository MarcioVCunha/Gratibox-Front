import axios from 'axios';
import BASE_URL from './base-url';

const postBuyInfo = (buyInfo, config) => {
  return axios.post(`${BASE_URL}/buy-info`, buyInfo, config);
};

export default postBuyInfo;