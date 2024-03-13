import { ReactNode, createContext, useReducer } from 'react';
import { ADD_XP, REDUCE_XP } from '../action-types';
import { IXPContext } from '../types';

export const XPContext = createContext<IXPContext>({
    xp: 0,
    addXP: () => {},
    reduceXP: () => {},
});

const xpReducer = (state: number, action: { type: string; payload: number }) => {
    switch (action.type) {
        case ADD_XP:
            return state + action.payload;
        case REDUCE_XP:
            return Math.max(0, state - action.payload);
        default:
            return state;
    }
};

const XPContextProvider = ({ children }: { children: ReactNode }) => {
    const [xp, dispatch] = useReducer(xpReducer, 50); // Test only: set to 50

    const addXP = (amount = 1) => {
        dispatch({
            type: ADD_XP,
            payload: amount,
        });
    };

    const reduceXP = (amount = 1) => {
        dispatch({
            type: REDUCE_XP,
            payload: amount,
        });
    };

    return <XPContext.Provider value={{ xp, addXP, reduceXP }}>{children}</XPContext.Provider>;
};

export default XPContextProvider;
