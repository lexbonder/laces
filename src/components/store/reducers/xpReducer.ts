import { ADD_XP, REDUCE_XP } from '../actions/actionTypes';

export const initialState = {
    xp: 0,
};

export const xpReducer = (state = initialState, action: { type: string; amount: number }) => {
    switch (action.type) {
        case ADD_XP:
            return {
                ...state,
                xp: state.xp + action.amount,
            };
        case REDUCE_XP:
            return {
                ...state,
                xp: state.xp - action.amount >= 0 ? state.xp - action.amount : 0,
            };
        default:
            return state;
    }
};
