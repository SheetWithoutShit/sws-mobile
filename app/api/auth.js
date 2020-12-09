import http from "@api/http"

import store from "@app/store"
import { setLoggedIn } from "@redux/user/actions"
import { setMessage, setLoading } from "@redux/app/actions"
import * as SecureStore from "expo-secure-store"


const SIGN_UP_PATH = "auth/signup"
const SIGN_IN_PATH = "auth/signin"

export const signUp = async (email, password) => {
    store.dispatch(setLoading(true))

    try {
        const { data: body } = await http.post(SIGN_UP_PATH, { email, password })
        store.dispatch(setMessage({ text: body.message, level: "success" }))

        await signIn(email, password)
    } catch (error) {
        const { message } = error.response.data
        store.dispatch(setMessage({ text: message, level: "error" }))
    } finally {
        store.dispatch(setLoading(false))
    }
}

export const signIn = async (email, password) => {
    store.dispatch(setLoading(true))

    try {
        const { data: body } = await http.post(SIGN_IN_PATH, { email, password })
        await SecureStore.setItemAsync("auth", JSON.stringify(body.data))

        store.dispatch(setLoggedIn(true))
    } catch (error) {
        const { message } = error.response.data
        store.dispatch(setMessage({ text: message, level: "error" }))
    } finally {
        store.dispatch(setLoading(false))
    }
}
