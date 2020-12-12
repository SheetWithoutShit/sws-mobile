import { actionType } from "@redux/transactions/actions"


const initialState = {
    transactions: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_TRANSACTIONS:
        return { ...state, transactions: action.transactions }
    }

    return state
}
