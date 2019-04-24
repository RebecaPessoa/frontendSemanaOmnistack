import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-rebeca.herokuapp.com',
});

export default api;