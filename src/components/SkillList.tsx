import { useContext, useEffect, useState } from 'react';
import { Skill, SkillContext } from '../store/skill-context';
import SkillButton from './SkillButton';
import { ISkillListProps } from '../types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillList = ({ openSkillModal }: ISkillListProps) => {
    const { skills } = useContext(SkillContext);
    const [skillsByLevel, setSkillsByLevel] = useState<Skill[][]>([]);

    useEffect(() => {
        const skillTree = skills.reduce((tree: Skill[][], skill) => {
            if (!tree[skill.level - 1]) {
                tree[skill.level - 1] = [];
            }
            tree[skill.level - 1].push(skill);
            return tree;
        }, []);

        setSkillsByLevel(skillTree);
    }, [skills]);

    return skillsByLevel.map((level, index) => (
        <section key={`row ${index + 1}`} className={`p-3`}>
            <Row className="border-bottom mb-2">
                {' '}
                <p className="h6">Level {index + 1}</p>{' '}
            </Row>
            <Row className="justify-content-around align-items-center gap-3">
                {level.map((skill) => (
                    <Col key={skill.id} lg="2" md="3" className="text-center">
                        <SkillButton skill={skill} openSkillModal={openSkillModal} />
                    </Col>
                ))}
            </Row>
        </section>
    ));
};

export default SkillList;
