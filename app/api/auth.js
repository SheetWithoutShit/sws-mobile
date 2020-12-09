import http from "@api/http"


const SIGN_UP_PATH = "auth/signup"
const SIGN_IN_PATH = "auth/signin"

export const signUp = (email, password) => {
    return http.post(SIGN_UP_PATH, { email, password })
}

export const signIn = (email, password) => {
    return http.post(SIGN_IN_PATH, { email, password })
}
