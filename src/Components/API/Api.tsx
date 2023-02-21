import axios from "axios";

const Endpoint = "http://localhost:3400/api";

export const GetAll = async() =>{
    return axios.get(`${Endpoint}`)
}