import { useContext } from 'react';
import { SkillContext } from '../store/skill-context';

const SkillList = () => {
    const { skills } = useContext(SkillContext);
    return skills.length ? (
        skills.map((skill) => (
            <p>
                {skill.name}: {skill.level}
            </p>
        ))
    ) : (
        <h1>No new skills yet!</h1>
    );
};

export default SkillList;
