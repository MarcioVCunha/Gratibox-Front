import process from 'process';
import port from '../.env';

const { NODE_ENV } = process.env;

const BASE_URL = (NODE_ENV === 'production')
  ? 'https://gratibox.herokuapp.com/'
  : 'http://localhost:' + port;

export default BASE_URL;