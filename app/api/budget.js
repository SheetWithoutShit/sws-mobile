import http from "@api/http"
import moment from "moment"

import { setUser } from "@redux/user/actions"
import { setMessage, setLoading } from "@redux/app/actions"


const BUDGET_PATH = "budget"

export const getBudget = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(BUDGET_PATH)
            const income = parseInt(body.data.income)
            const savings = parseInt(body.data.savings)

            const incomeAfterSavings = income - (income / 100.00) * savings
            const daysInMonth = moment().daysInMonth()
            const dailyBudget = incomeAfterSavings / daysInMonth

            dispatch(setUser({ income, savings, dailyBudget }))
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
