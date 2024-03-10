import { useContext } from 'react';
import { SkillContext } from '../store/skill-context';
import Skill from './Skill';
import { ISkillListProps } from '../types';

const SkillList = ({ openSkillModal }: ISkillListProps) => {
    const { skills } = useContext(SkillContext);
    return skills.length ? (
        skills.map((skill) => (
            <Skill key={skill.id} name={skill.name} level={skill.level} openSkillModal={openSkillModal} />
        ))
    ) : (
        <h1>No new skills yet!</h1>
    );
};

export default SkillList;
