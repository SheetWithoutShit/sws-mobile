export const actionType = {
    SET_LOGGED_IN: "SET_LOGGED_IN",
    SET_MONOBANK_ENABLED: "SET_MONOBANK_ENABLED",
}

export const setLoggedIn = (loggedIn) => {
    return {
        type: actionType.SET_LOGGED_IN,
        loggedIn: loggedIn,
    }
}

export const setMonobankEnabled = (isEnabled) => {
    return {
        type: actionType.SET_MONOBANK_ENABLED,
        monobankEnabled: isEnabled,
    }
}
