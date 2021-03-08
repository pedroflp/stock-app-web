import axios from 'axios';

const api = axios.create({
  baseURL: 'https://estoque-backend.herokuapp.com/',
})

export default api;