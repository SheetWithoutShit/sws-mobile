import { actionType } from "@redux/app/actions"

const initialState = {
    isLoading: false,
    message: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_LOADING:
        return { ...state, isLoading: action.isLoading }
    case actionType.SET_MESSAGE:
        return { ...state, message: action.message }
    }

    return state
}
