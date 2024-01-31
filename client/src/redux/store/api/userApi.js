import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const loginUser = async (user) => {
  return await axios.post('/api/login', user);
};