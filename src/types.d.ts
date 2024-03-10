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
    openSkillModal: (name: string, level: number) => void;
}

export interface ISkillProps {
    openSkillModal: (name: string, level: number) => void;
    name: string;
    level: number;
}

export interface IDoSkillModalProps {
    skillName: string;
    level: number;
    show: boolean;
    hide: () => void;
    openNewSkillModal: () => void;
    resetActiveSkill: () => void;
}

export interface INewSkillModalProps {
    show: boolean;
    prevLevel?: number;
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
    skills: ISkill[];
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
