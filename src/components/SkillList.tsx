import { useContext, useEffect, useState } from 'react';
import { SkillContext } from '../store/skill-context';
import Skill from './Skill';
import { ISkill, ISkillListProps } from '../types';
import ListGroup from 'react-bootstrap/ListGroup';

const SkillList = ({ openSkillModal }: ISkillListProps) => {
    const { skills } = useContext(SkillContext);
    const [skillsByLevel, setSkillsByLevel] = useState<ISkill[][]>([]);

    useEffect(() => {
        const skillTree = skills.reduce((tree: ISkill[][], skill) => {
            if (!tree[skill.level - 1]) {
                tree[skill.level - 1] = [];
            }
            tree[skill.level - 1].push(skill);
            return tree;
        }, []);

        setSkillsByLevel(skillTree);
    }, [skills]);

    return (
        <ListGroup variant="flush">
            {skillsByLevel.map((level, index) => (
                <ListGroup.Item key={index}>
                    <p>Level: {index + 1}</p>
                    {level.map((skill) => (
                        <Skill key={skill.id} name={skill.name} level={skill.level} openSkillModal={openSkillModal} />
                    ))}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default SkillList;
