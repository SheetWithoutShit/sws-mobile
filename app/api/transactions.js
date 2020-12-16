import moment from "moment"

import http from "@api/http"
import { setUser } from "@redux/user/actions"
import { setLoading, setMessage } from "@redux/app/actions"
import {
    setTransactions,
    setMonthReport,
    setDailyReport,
    setCategoryTransactions,
} from "@redux/transactions/actions"
import { DATETIME_FORMAT } from "@utils/time"

const TRANSACTIONS_PATH = "transactions"
const MONTH_REPORT_PATH = "transactions/report/month"
const DAILY_REPORT_PATH = "transactions/report/daily"


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

export const getCategoryTransactions = (category, startDate, endDate) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(
                TRANSACTIONS_PATH,
                { "category": category, "start_date": startDate, "end_date": endDate },
            )
            dispatch(setCategoryTransactions(category, body.data))
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

export const getDailyReport = (startDate, endDate) => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        try {
            const { data: body } = await http.get(
                DAILY_REPORT_PATH,
                { "start_date": startDate, "end_date": endDate },
            )
            const dailyReport = body.data.map(d => {
                return {
                    date: d.date,
                    amount: parseFloat(d.amount),
                }
            })
            dispatch(setDailyReport(dailyReport))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const getTodayReport = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))

        const startDate = moment()
            .startOf("day")
            .format(DATETIME_FORMAT)
        const endDate = moment().format(DATETIME_FORMAT)
        try {
            const { data: body } = await http.get(
                DAILY_REPORT_PATH,
                { "start_date": startDate, "end_date": endDate },
            )
            const reports = body.data.map(d => {
                return {
                    date: d.date,
                    amount: parseFloat(d.amount),
                }
            })
            const todaySpent = reports.length ? parseFloat(reports[0].amount) : 0.0
            dispatch(setUser({ todaySpent }))
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

