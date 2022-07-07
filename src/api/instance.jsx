
import axios from "axios"
const instance = axios.create({
    // baseURL: "http://localhost:8000/api"
    baseURL: "https://nodejs-portpoilo.vercel.app/api"

})
export default instance;