import { actionType } from "@redux/transactions/actions"


const initialState = {
    transactions: [],
    monthReport: [],
    dailyReport: [],
    categoriesTransactions: {},
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_TRANSACTIONS:
        return { ...state, transactions: action.transactions }
    case actionType.SET_MONTH_REPORT:
        return { ...state, monthReport: action.monthReport }
    case actionType.SET_DAILY_REPORT:
        return { ...state, dailyReport: action.dailyReport }
    case actionType.SET_CATEGORY_TRANSACTIONS:
        state.categoriesTransactions[action.category] = action.transactions
        return state
    }

    return state
}
