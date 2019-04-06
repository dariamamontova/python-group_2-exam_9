import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/v1';
const PRODUCTS_URL = BASE_URL + '/products/';
const CATEGORIES_URL = BASE_URL + '/categories/';
const ORDERS_URL = BASE_URL + '/orders/';
const LOGIN_URL = '/login/';
const USERS_URL = '/users/';
const TOKEN_LOGIN_URL = '/token-login/';

const instance = axios.create({
    baseURL: BASE_URL
});

export {PRODUCTS_URL, CATEGORIES_URL, BASE_URL, LOGIN_URL, USERS_URL, TOKEN_LOGIN_URL}

export default instance;