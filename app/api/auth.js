import http from "@api/http"

import { loginUser } from "@redux/user/actions"
import { setMessage, setLoading } from "@redux/app/actions"
import * as SecureStore from "expo-secure-store"


const SIGN_UP_PATH = "auth/signup"
const SIGN_IN_PATH = "auth/signin"
const RESET_PASSWORD_PATH = "auth/reset_password"
const CHANGE_PASSWORD_PATH = "auth/change_password"
const CHANGE_EMAIL_PATH = "auth/change_email"

export const signUp = (email, password) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.post(SIGN_UP_PATH, { email, password })
            dispatch(signIn(email, password))
            dispatch(setMessage({ text: body.message, level: "success" }))
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

            dispatch(loginUser())
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

export const changePassword = (oldPassword, newPassword) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.put(
                CHANGE_PASSWORD_PATH,
                { "old_password": oldPassword, "new_password": newPassword },
            )
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

export const changeEmail = (email) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.post(CHANGE_EMAIL_PATH, { "new_email": email })
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
