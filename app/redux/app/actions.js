export const actionType = {
    SET_LOADING: "SET_LOADING",
    SET_MESSAGE: "SET_MESSAGE",
}

export const setLoading = (isLoading) => {
    return {
        type: actionType.SET_LOADING,
        isLoading: isLoading,
    }
}

export const setMessage = (message) => {
    return {
        type: actionType.SET_MESSAGE,
        message: message,
    }
}
