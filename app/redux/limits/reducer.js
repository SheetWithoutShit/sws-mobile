import { actionType } from "@redux/limits/actions"


const initialState = {
    limits: [],
    categories: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_LIMITS:
        return { ...state, limits: action.limits }
    case actionType.SET_CATEGORIES:
        return { ...state, categories: action.categories }
    }

    return state
}
