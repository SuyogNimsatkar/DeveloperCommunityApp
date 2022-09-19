import axios from "axios";

const url = 'http://localhost:8081';

const login = data => {
    return axios.post(`${url}/login`, data);
}

const register = data => {
    return axios.post(`${url}/register`, data);
}


export default {login, register};