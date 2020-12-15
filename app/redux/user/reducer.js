import { actionType } from "@redux/user/actions"

const initialState = {
    loggedIn: false,
    firstName: null,
    lastName: null,
    monobankEnabled: false,
    notificationsEnabled: false,
    telegramId: null,
    telegramInvitation: null,
    savings: null,
    income: null,
    dailyBudget: 0.0,
    todaySpent: 0.0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.LOGIN_USER:
        return { ...state, loggedIn: action.loggedIn }
    case actionType.LOGOUT_USER:
        return initialState
    case actionType.SET_USER:
        return { ...state, ...action.user }
    }

    return state
}
