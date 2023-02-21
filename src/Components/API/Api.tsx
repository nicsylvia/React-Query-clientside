import axios from "axios";

const Endpoint = "http://localhost:3400/api/post";

export const GetAll = async() =>{
    return await axios.get(`${Endpoint}/getposts`).then((res) => res.data)
}