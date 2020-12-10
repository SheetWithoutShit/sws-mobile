import { actionType } from "@redux/user/actions"

const initialState = {
    loggedIn: false,
    firstName: null,
    lastName: null,
    monobankEnabled: false,
    notificationsEnabled: false,
    telegramId: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_LOGGED_IN:
        return { ...state, loggedIn: action.loggedIn }
    case actionType.SET_USER:
        return { ...state, ...action.user }
    }

    return state
}
