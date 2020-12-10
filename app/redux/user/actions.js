export const actionType = {
    SET_LOGGED_IN: "SET_LOGGED_IN",
    SET_USER: "SET_USER",
}

export const setLoggedIn = (loggedIn) => {
    return {
        type: actionType.SET_LOGGED_IN,
        loggedIn: loggedIn,
    }
}

export const setUser = (user) => {
    return {
        type: actionType.SET_USER,
        user,
    }
}
