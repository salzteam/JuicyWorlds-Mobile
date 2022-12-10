import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const getProfile = (token) => {
    const URL = `http://juicy-worlds.vercel.app/api/v1/users/${token}`;
    return axios.get(URL, {headers: {'x-access-token' : token}});
  };