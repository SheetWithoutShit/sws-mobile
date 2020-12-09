import http from "@api/http"

import store from "@app/store"
import { setMessage, setLoading } from "@redux/app/actions"
import { setMonobankEnabled } from "@redux/user/actions"

const MONOBANK_TOKEN_PATH = "user/monobank"
const USER_PATH = "user"

export const updateMonobankToken = async (token) => {
    store.dispatch(setLoading(true))

    try {
        const { data: body } = await http.put(MONOBANK_TOKEN_PATH, { token })

        store.dispatch(setMessage({ text: body.message, level: "success" }))
        store.dispatch(setMonobankEnabled(true))
    } catch (error) {
        const { message } = error.response.data
        store.dispatch(setMessage({ text: message, level: "error" }))
        store.dispatch(setMonobankEnabled(false))
    } finally {
        store.dispatch(setLoading(false))
    }
}

export const getUser = async () => {
    store.dispatch(setLoading(true))

    try {
        const { data: body } = await http.get(USER_PATH)
        const { monobank_enabled: monobankEnabled } = body.data

        store.dispatch(setMonobankEnabled(monobankEnabled))
    } catch (error) {
        const { message } = error.response.data
        store.dispatch(setMessage({ text: message, level: "error" }))
    } finally {
        store.dispatch(setLoading(false))
    }
}
