import { Skill } from './store/skill-context';

export interface Actions<T> {
    readonly type: string;
    payload: T;
}

export interface IDie {
    value: number;
}

export interface IDiceResult {
    rolls: number[];
    total: number;
    pipsToMax: number;
}

export interface ISkillListProps {
    openSkillModal: (skill: Skill) => void;
}

export interface ISkillProps {
    skill: Skill;
    openSkillModal: (skill: Skill) => void;
}

export interface IDoSkillModalProps {
    activeSkill: Skill;
    show: boolean;
    hide: () => void;
    openNewSkillModal: () => void;
    resetActiveSkill: () => void;
}

export interface INewSkillModalProps {
    activeSkill: Skill?;
    show: boolean;
    hide: () => void;
    resetActiveSkill: () => void;
}

export interface IAddSkillButtonProps {
    showNewSkillModal: () => void;
}

export interface ISkill {
    id: string;
    name: string;
    level: number;
}

export interface ISkillContext {
    skills: Skill[];
    addSkill: (name: string, level: number) => void;
    editSkill: (id: string, name: string) => void;
    deleteSkill: (id: string) => void;
}

export interface IXPContext {
    xp: number;
    addXP: (number?) => void;
    reduceXP: (number?) => void;
}

export interface IXPModalProps {
    show: boolean;
    hide: () => void;
}

export interface IManageXPButtonProps {
    toggleXPModal: () => void;
}
