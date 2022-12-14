import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const history = (paginasi,token) => {
  const URL = `${BaseUrl}/transactions/history?${paginasi}`;
  return axios.get(URL, {headers:{"x-access-token":token}});
};

export const deleteHistory = (id,token) => {
  const URL = `${BaseUrl}/transactions/delete/${id}`;
  // const URL = `http://192.168.1.8:8080/api/v1/transactions/delete/${id}`;
  return axios.delete(URL, {headers:{"x-access-token":token}})
}