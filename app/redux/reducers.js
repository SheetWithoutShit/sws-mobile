import { combineReducers } from "redux"

import { reducer as userReducer } from "@redux/user/reducer"

const createRootReducer = () => combineReducers({
    user: userReducer,
})

export default createRootReducer
