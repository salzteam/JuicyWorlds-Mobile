import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const login = body => {
  const URL = `${BaseUrl}/auth`;
  return axios.post(URL, body);
};

export const logout = token => {
  const URL = `${BaseUrl}/auth`;
  return axios.delete(URL, {headers: {'x-access-token' : token}});
}

export const register = body => {
  const URL = `${BaseUrl}/users/register`;
  return axios.post(URL, body);
}

export const forgot = body => {
  const URL = `${BaseUrl}/auth`;
  return axios.patch(URL, body);
}