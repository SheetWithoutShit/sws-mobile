import axios from "axios"


const getAccessToken = () => "for now it is test string"

const get = (url, params) => {
    return axios.get(url, {
        params,
        headers: {
            Authorization: getAccessToken(),
        },
    })
}

const post = (url, params) => {
    return axios.post(url, params, {
        headers: {
            Authorization: getAccessToken(),
        },
    })
}


const put = (url, params) => {
    return axios.put(url, params, {
        headers: {
            Authorization: getAccessToken(),
        },
    })
}

const del = (url) => {
    return axios.delete(url, {
        headers: {
            Authorization: getAccessToken(),
        },
    })
}

export default {
    get,
    post,
    put,
    delete: del,
}
