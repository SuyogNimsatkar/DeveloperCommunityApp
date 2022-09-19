import axios from "axios";

const url = 'http://localhost:8081/admin';

const getAllUser = () => {
    return axios.get(`${url}/alluserdetails`);
}

const blockUser = (userId) => {
    return axios.put(`${url}/blockuser/${userId}`);
}

const unblockUser = (userId) => {
    return axios.put(`${url}/unblockuser/${userId}`);
}

const deleteResponse = (respId) => {
    return axios.delete(`${url}/deleteresponse/${respId}`);
} 

const deleteFeed = (feedId) => {
    return axios.delete(`${url}/deletefeed/${feedId}`);
}  

export default {getAllUser, blockUser, unblockUser, deleteFeed, deleteResponse};