import { useContext, useEffect, useState } from 'react';
import { SkillContext } from '../store/skill-context';
import Skill from './Skill';
import { ISkill, ISkillListProps } from '../types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    return skillsByLevel.map((level, index) => (
        <section key={index} className={`p-3 position-relative ${index % 2 === 0 ? 'bg-secondary' : ''}`}>
            <Row className="position-absolute">
                <p>Level: {index + 1}</p>
            </Row>
            <Row className="justify-content-center gap-3">
                {level.map((skill) => (
                    <Col key={skill.id} lg="3" className="text-center">
                        <Skill name={skill.name} level={skill.level} openSkillModal={openSkillModal} />
                    </Col>
                ))}
            </Row>
        </section>
    ));
};

export default SkillList;
