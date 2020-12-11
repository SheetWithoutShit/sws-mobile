import http from "@api/http"

import { setLoading, setMessage } from "@redux/app/actions"
import { setLimits, setCategories } from "@redux/limits/actions"

const LIMITS_PATH = "limits"
const CATEGORIES_PATH = "limits/categories"


export const getCategories = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(CATEGORIES_PATH)
            dispatch(setCategories(body.data))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const getLimits = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(LIMITS_PATH)
            dispatch(setLimits(body.data))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const createLimit = (category, amount) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.post(LIMITS_PATH, { category, amount })
            dispatch(setMessage({ text: body.message, level: "success" }))
            dispatch(getLimits())

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

export const updateLimit = (limitId, amount) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        const path = `${LIMITS_PATH}/${limitId}`
        try {
            const { data: body } = await http.put(path, { amount })
            dispatch(setMessage({ text: body.message, level: "success" }))
            dispatch(getLimits())

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
