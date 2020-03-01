import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-app-c2840.firebaseio.com'
});

export default instance;