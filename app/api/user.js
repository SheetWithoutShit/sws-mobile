import http from "@api/http"


const MONOBANK_TOKEN_PATH = "user/monobank"
const USER_PATH = "user"

export const updateMonobankToken = (token) => {
    return http.put(MONOBANK_TOKEN_PATH, { token })
}

export const getUser = () => {
    return http.get(USER_PATH)
}
