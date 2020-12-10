import { actionType } from "@redux/limits/actions"


const initialState = {
    limits: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionType.SET_LIMITS:
        return { ...state, limits: action.limits }
    }

    return state
}
