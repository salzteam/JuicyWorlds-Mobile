import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const getProduct = (text) => {
    const URL = `${BaseUrl}/products?${text}`
    return axios.get(URL)
}

export const getFavorite = () => {
    const URL = `${BaseUrl}/products?transactions=popular`
    return axios.get(URL)
}

export const getPromo = () => {
    const URL = `${BaseUrl}/promo/`
    return axios.get(URL)
}