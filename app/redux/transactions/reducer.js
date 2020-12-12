import { actionType } from "@redux/transactions/actions"


const initialState = {
    transactions: [],
    monthReport: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_TRANSACTIONS:
        return { ...state, transactions: action.transactions }
    case actionType.SET_MONTH_REPORT:
        return { ...state, monthReport: action.monthReport }
    }

    return state
}
