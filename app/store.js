import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import createRootReducer from "@redux/reducers"


const store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(thunk)),
)

export default store
