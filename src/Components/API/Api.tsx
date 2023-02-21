import axios from "axios";

const Endpoint = "http://localhost:3400/api";

export const GetAll = async() =>{
    return await axios.get(`${Endpoint}/post/getposts`).then((res) => res.data)
}