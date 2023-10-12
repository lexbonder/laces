import { ADD_XP, REDUCE_XP } from './actionTypes';

export const addXP = (amount: number) => ({
    type: ADD_XP,
    amount,
});
export const reduceXP = (amount: number) => ({
    type: REDUCE_XP,
    amount,
});
