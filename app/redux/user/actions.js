export const actionType = {
    LOGIN_USER: "LOGIN_USER",
    LOGOUT_USER: "LOGOUT_USER",
    SET_USER: "SET_USER",
}

export const loginUser = () => {
    return {
        type: actionType.LOGIN_USER,
        loggedIn: true,
    }
}

export const logoutUser = () => {
    return {
        type: actionType.LOGOUT_USER,
        loggedIn: false,
    }
}

export const setUser = (user) => {
    return {
        type: actionType.SET_USER,
        user,
    }
}
