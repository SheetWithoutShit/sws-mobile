import { combineReducers } from "redux"

import { reducer as userReducer } from "@redux/user/reducer"
import { reducer as appReducer } from "@redux/app/reducer"

const createRootReducer = () => combineReducers({
    user: userReducer,
    app: appReducer,
})

export default createRootReducer
