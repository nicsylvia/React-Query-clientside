import axios from "axios";

interface PostData {
    title: string;
    description: string;
}

const Endpoint = "http://localhost:3400/api/post";

export const GetAll = async() =>{
    return await axios.get(`${Endpoint}/getposts`).then((res) => res.data)
}

export const CreatePost = async({title, description}: PostData) =>{
    return await axios.post(`${Endpoint}/createpost`).then((res) => res.data)
}