import axios from "axios"
import { URL } from "../../config/api"

export const getPuk = () => {
    return axios.get(URL.INNER.Login)
}

export const postLogin = data => {
    return axios.post(URL.INNER.Login, data, {withCredentials: true})
}