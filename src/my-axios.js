import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});
instance.defaults.headers.common['Authorization'] = 'MY AUTH TOKEN';

// instance.interceptors...

export default instance;