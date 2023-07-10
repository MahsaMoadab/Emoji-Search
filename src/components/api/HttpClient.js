import axios from "axios";
const baseURL = "https://emoji-api.com"


const getAxiosInstance = axios.create({
    baseURL: baseURL,
});


export{
    getAxiosInstance
}
