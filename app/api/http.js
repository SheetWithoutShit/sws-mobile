import axios from "axios"

const API_HOST = process.env.API_HOST
const API_VERSION = "v1"

const getAccessToken = () => "for now it is test string"
const getAPIUrl = (path) => `http://${API_HOST}/${API_VERSION}/${path}`

const get = (path, params) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: getAccessToken() }
    return axios.get(url, { params, headers })
}

const post = (path, body) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: getAccessToken() }
    return axios.post(url, body, { headers })
}

const put = (path, body) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: getAccessToken() }
    return axios.put(url, body, { headers })
}

const del = (path) => {
    const url = getAPIUrl(path)
    const headers = { Authorization: getAccessToken() }
    return axios.delete(url, { headers })
}

export default {
    get,
    post,
    put,
    delete: del,
}
