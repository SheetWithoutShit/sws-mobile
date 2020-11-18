export const actionType = {
    SET_LOGGED_IN: "SET_LOGGED_IN",
}

export const setLoggedIn = (loggedIn) => {
    return {
        type: actionType.SET_LOGGED_IN,
        loggedIn: loggedIn,
    }
}
