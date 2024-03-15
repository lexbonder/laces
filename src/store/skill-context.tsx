import { ReactNode, createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { Actions, ISkill, ISkillContext } from '../types';
import { ADD_SKILL, DELETE_SKILL, EDIT_SKILL, isGenericAction } from '../action-types';
import { testData } from '../mockData/test-skills';

export const SkillContext = createContext<ISkillContext>({
    skills: [],
    addSkill: () => {},
    editSkill: () => {},
    deleteSkill: () => {},
});

const skillReducer = (
    state: ISkill[],
    action: Actions<ISkill> | Actions<{ id: string; name: string }> | Actions<{ id: string }>
) => {
    if (action.type === ADD_SKILL && isGenericAction<ISkill>(action)) {
        return [...state, action.payload];
    } else if (action.type === EDIT_SKILL && isGenericAction<{ id: string; name: string }>(action)) {
        return state.map((skill) => {
            if (skill.id === action.payload.id) {
                skill.name = action.payload.name;
            }
            return skill;
        });
    } else if (action.type === DELETE_SKILL && isGenericAction<{ id: string }>(action)) {
        return state.filter((skill) => skill.id !== action.payload.id);
    } else {
        return state;
    }
};

const SkillContextProvider = ({ children }: { children: ReactNode }) => {
    const [skills, dispatch] = useReducer(skillReducer, [
        {
            id: '0',
            name: 'Do Anything',
            level: 1,
        },
    ]);

    // Test data
    // const [skills, dispatch] = useReducer(skillReducer, testData);
    //

    const addSkill = (name: string, level: number) => {
        dispatch({
            type: ADD_SKILL,
            payload: {
                name,
                level,
                id: uuid(),
            },
        });
    };

    const editSkill = (id: string, name: string) => {
        dispatch({
            type: EDIT_SKILL,
            payload: {
                id,
                name,
            },
        });
    };

    const deleteSkill = (id: string) => {
        dispatch({
            type: DELETE_SKILL,
            payload: {
                id,
            },
        });
    };

    return (
        <SkillContext.Provider value={{ skills, addSkill, editSkill, deleteSkill }}>{children}</SkillContext.Provider>
    );
};

export default SkillContextProvider;
