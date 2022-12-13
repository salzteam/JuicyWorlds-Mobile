import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const getProfile = (token) => {
    const URL = `${BaseUrl}/users/${token}`;
    return axios.get(URL, {headers: {'x-access-token' : token}});
  };

export const editProfile = (body, token) => {
    const URL = `${BaseUrl}/users/profile/edit`;
    return axios.patch(URL, body, {headers: {'x-access-token' : token}});
  };