export const actionType = {
    SET_LIMITS: "SET_LIMITS",
}

export const setLimits = (limits) => {
    return {
        type: actionType.SET_LIMITS,
        limits: limits,
    }
}
