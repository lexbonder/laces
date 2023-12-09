import { ReactNode, createContext, useReducer } from 'react';
import { ADD_XP, REDUCE_XP } from '../action-types';

export const XPContext = createContext<XPContextProps>({
    xp: 0,
    addXP: () => {},
    reduceXP: () => {},
});

interface XPContextProps {
    xp: number;
    addXP: () => void;
    reduceXP: () => void;
}

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
    const [xp, dispatch] = useReducer(xpReducer, 0);

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
