export const actionType = {
    SET_LIMITS: "SET_LIMITS",
    SET_CATEGORIES: "SET_CATEGORIES",
}

export const setLimits = (limits) => {
    return {
        type: actionType.SET_LIMITS,
        limits: limits,
    }
}

export const setCategories = (categories) => {
    return {
        type: actionType.SET_CATEGORIES,
        categories: categories,
    }
}
