import Axios from 'axios';

const PROD_URL = 'https://memory-app-back.herokuapp.com/';

const api = Axios.create({
  baseURL: PROD_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse((localStorage.getItem('user') || '{}'))
  },
});

export default api;
