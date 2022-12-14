import axios from "axios"
import { URL } from "../config/api"
import setAuthToken from "./setAuthToken"

export const getPageData = path => {
    setAuthToken(localStorage.getItem("TOKEN"))
    return axios.get(path)
}

export const deleteLogout = () => {
    return axios.delete(URL.INNER.Logout)
}