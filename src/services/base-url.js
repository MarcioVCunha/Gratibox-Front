import process from 'process';

const { NODE_ENV } = process.env;

const BASE_URL = (NODE_ENV === 'production')
  ? 'https://tsuru-store.herokuapp.com'
  : 'http://localhost:4001';


export default BASE_URL;