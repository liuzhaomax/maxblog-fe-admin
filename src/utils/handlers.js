import axios from "axios"
import { URL } from "../config/api"

export const getPageData = path => {
    return axios.get(path)
}

export const deleteLogout = () => {
    return axios.delete(URL.INNER.Logout)
}