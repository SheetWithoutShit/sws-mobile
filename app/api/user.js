import http from "@api/http"

import { setMessage, setLoading } from "@redux/app/actions"
import { setMonobankEnabled } from "@redux/user/actions"

const MONOBANK_TOKEN_PATH = "user/monobank"
const USER_PATH = "user"

export const updateMonobankToken = (token) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.put(MONOBANK_TOKEN_PATH, { token })

            dispatch(setMessage({ text: body.message, level: "success" }))
            dispatch(setMonobankEnabled(true))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
            dispatch(setMonobankEnabled(false))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const getUser = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(USER_PATH)
            const { monobank_enabled: monobankEnabled } = body.data

            dispatch(setMonobankEnabled(monobankEnabled))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}
