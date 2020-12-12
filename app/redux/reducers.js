import { combineReducers } from "redux"

import { reducer as userReducer } from "@redux/user/reducer"
import { reducer as appReducer } from "@redux/app/reducer"
import { reducer as limitsReducer } from "@redux/limits/reducer"
import { reducer as transactionsReducer } from "@redux/transactions/reducer"

const createRootReducer = () => combineReducers({
    user: userReducer,
    app: appReducer,
    limits: limitsReducer,
    transactions: transactionsReducer,
})

export default createRootReducer
