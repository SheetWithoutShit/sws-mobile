import http from "@api/http"

import { setUser } from "@redux/user/actions"
import { setMessage, setLoading } from "@redux/app/actions"


const BUDGET_PATH = "budget"

export const getBudget = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(BUDGET_PATH)
            const { income, savings } = body.data
            dispatch(setUser({ income: parseInt(income), savings: parseInt(savings) }))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const updateBudget = (income, savings) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.put(BUDGET_PATH, { income, savings })
            dispatch(setMessage({ text: body.message, level: "success" }))
            dispatch(setUser({ income: parseInt(income), savings: parseInt(savings) }))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}
