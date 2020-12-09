import { actionType } from "@redux/user/actions"

const initialState = {
    loggedIn: false,
    monobankEnabled: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_LOGGED_IN:
        return { ...state, loggedIn: action.loggedIn }
    case actionType.SET_MONOBANK_ENABLED:
        return { ...state, monobankEnabled: action.monobankEnabled }
    }

    return state
}
