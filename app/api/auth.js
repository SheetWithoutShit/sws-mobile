import http from "@api/http"

import { setLoggedIn } from "@redux/user/actions"
import { setMessage, setLoading } from "@redux/app/actions"
import * as SecureStore from "expo-secure-store"


const SIGN_UP_PATH = "auth/signup"
const SIGN_IN_PATH = "auth/signin"
const RESET_PASSWORD_PATH = "auth/reset_password"

export const signUp = (email, password) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.post(SIGN_UP_PATH, { email, password })
            dispatch(setMessage({ text: body.message, level: "success" }))

            dispatch(signIn(email, password))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const signIn = (email, password) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.post(SIGN_IN_PATH, { email, password })
            await SecureStore.setItemAsync("auth", JSON.stringify(body.data))

            dispatch(setLoggedIn(true))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const resetPassword = (email) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.post(RESET_PASSWORD_PATH, { email })
            dispatch(setMessage({ text: body.message, level: "success" }))

            return true
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))

            return false
        } finally {
            dispatch(setLoading(false))
        }
    }
}
