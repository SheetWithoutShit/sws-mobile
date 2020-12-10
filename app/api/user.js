import http from "@api/http"

import { setMessage, setLoading } from "@redux/app/actions"
import { setUser } from "@redux/user/actions"

const MONOBANK_TOKEN_PATH = "user/monobank"
const USER_PATH = "user"

export const updateMonobankToken = (token) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.put(MONOBANK_TOKEN_PATH, { token })

            dispatch(setMessage({ text: body.message, level: "success" }))
            dispatch(setUser({ monobankEnabled: true }))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
            dispatch(setUser({ monobankEnabled: false }))
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
            const {
                monobank_enabled: monobankEnabled,
                notifications_enabled: notificationsEnabled,
                telegram_id: telegramId,
                first_name: firstName,
                last_name: lastName,
            } = body.data
            const user = {
                monobankEnabled,
                notificationsEnabled,
                telegramId,
                firstName,
                lastName,
            }
            dispatch(setUser(user))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}
