import axios from 'axios';


const token = localStorage.getItem('token');
export default axios.create({
  baseURL: 'https://capcards-api.herokuapp.com',
  headers: {
    'x-access-token': `${token}`,
    Authorization: `Bearer ${token}`,
    'x-auth-token': `${token}`,
  },
});
