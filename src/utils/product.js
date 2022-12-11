import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const getFavorite = () => {
    const URL = `${BaseUrl}/products?transactions=popular&page=1&limit=12`
    return axios.get(URL)
}

export const getPromo = () => {
    const URL = `${BaseUrl}/promo/?page=1&limit=12`
    return axios.get(URL)
}