import http from "@api/http"

import { setMessage, setLoading } from "@redux/app/actions"
import { setUser, logoutUser } from "@redux/user/actions"
import * as SecureStore from "expo-secure-store"

const MONOBANK_TOKEN_PATH = "user/monobank"
const NOTIFICATIONS_PATH = "user/notifications"
const USER_PATH = "user"

export const updateMonobankToken = (token) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.put(MONOBANK_TOKEN_PATH, { token })

            dispatch(setMessage({ text: body.message, level: "success" }))
            dispatch(setUser({ monobankEnabled: true }))

            return true
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
            dispatch(setUser({ monobankEnabled: false }))

            return false
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

export const deleteUser = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.delete(USER_PATH)
            dispatch(setMessage({ text: body.message, level: "success" }))
            await SecureStore.deleteItemAsync("auth")

            dispatch(logoutUser())
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const updateNotifications = (enabled) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.put(NOTIFICATIONS_PATH, { enabled })

            dispatch(setMessage({ text: body.message, level: "success" }))
            dispatch(setUser({ notificationsEnabled: enabled }))

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
