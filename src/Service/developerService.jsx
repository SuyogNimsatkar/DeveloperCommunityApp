import axios from "axios";

const url = 'http://localhost:8081/developers';

const getAllFeeds = () => {
    return axios.get(`${url}/allfeeds`);
    
}

const addFeed = data => {
    return axios.post(`${url}/addfeed`, data);
}

const addDetails = data => {
    return axios.post(`${url}/adddetails`, data);
}

const getDevById = devId => {
    return axios.get(`${url}/getdetails/${devId}`);
}

const updateDetails = (devId, data) => {
    return axios.put(`${url}/editdetails/${devId}`, data);
}

const addResponse = data => {
    return axios.post(`${url}/addresponse`, data);
}

const editResponse = (respId, data) => {
    return axios.put(`${url}/edit/${respId}`, data);
}

const getAllResponses = () => {
    return axios.get(`${url}/allresponses`);
}

export default {getAllFeeds, addFeed, addDetails, getDevById, updateDetails, addResponse, getAllResponses, editResponse};