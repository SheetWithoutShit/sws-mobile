import { actionType } from "@redux/user/actions"

const initialState = {
    loggedIn: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_LOGGED_IN:
        return { ...state, loggedIn: action.loggedIn }
    }

    return state
}
