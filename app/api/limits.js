import http from "@api/http"

import { setLoading, setMessage } from "@redux/app/actions"
import { setLimits } from "@redux/limits/actions"

const LIMITS_PATH = "limits"

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
