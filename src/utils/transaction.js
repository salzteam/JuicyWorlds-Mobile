import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const history = (paginasi,token) => {
  const URL = `${BaseUrl}/transactions/history?${paginasi}`;
  return axios.get(URL, {headers:{"x-access-token":token}});
};