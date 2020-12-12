import http from "@api/http"

import { setLoading, setMessage } from "@redux/app/actions"
import { setTransactions } from "@redux/transactions/actions"

const TRANSACTIONS_PATH = "transactions"


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
