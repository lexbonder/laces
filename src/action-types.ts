import { Actions } from './types';

export const ADD_XP = 'ADD_XP';
export const REDUCE_XP = 'REDUCE_XP';

export const ADD_SKILL = 'ADD_SKILL';
export const EDIT_SKILL = 'EDIT_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';

export const isGenericAction = <T>(obj: any): obj is Actions<T> => {
    const castedObject = obj as Actions<T>;
    return castedObject.payload !== undefined && castedObject.type !== undefined;
};
