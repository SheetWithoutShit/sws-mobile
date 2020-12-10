import { combineReducers } from "redux"

import { reducer as userReducer } from "@redux/user/reducer"
import { reducer as appReducer } from "@redux/app/reducer"
import { reducer as limitsReducer } from "@redux/limits/reducer"

const createRootReducer = () => combineReducers({
    user: userReducer,
    app: appReducer,
    limits: limitsReducer,
})

export default createRootReducer
