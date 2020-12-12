import http from "@api/http"

import { setLoading, setMessage } from "@redux/app/actions"
import { setTransactions, setMonthReport } from "@redux/transactions/actions"

const TRANSACTIONS_PATH = "transactions"
const MONTH_REPORT_PATH = "transactions/report/month"


export const getTransactions = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(TRANSACTIONS_PATH)
            dispatch(setTransactions(body.data))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const getMonthReport = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(MONTH_REPORT_PATH)
            dispatch(setMonthReport(body.data.categories))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

