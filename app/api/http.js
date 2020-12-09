import axios from "axios"
import * as SecureStore from "expo-secure-store"


const API_HOST = process.env.API_HOST
const API_VERSION = "v1"

const getAPIUrl = (path) => `http://${API_HOST}/${API_VERSION}/${path}`
const getAccessToken = async () => {
    const auth = await SecureStore.getItemAsync("auth")
    if (auth) {
        const { access_token: accessToken } = JSON.parse(auth)
        return `Bearer ${accessToken}`
    }
}

const get = async (path, params) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: await getAccessToken() }
    return axios.get(url, { params, headers })
}

const post = async (path, body) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: await getAccessToken() }
    return axios.post(url, body, { headers })
}

const put = async (path, body) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: await getAccessToken() }
    return axios.put(url, body, { headers })
}

const del = async (path) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: await getAccessToken() }
    return axios.delete(url, { headers })
}

export default {
    get,
    post,
    put,
    delete: del,
}
