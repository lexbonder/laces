import { useContext, useEffect, useState } from 'react';
import { SkillContext } from '../store/skill-context';
import SkillButton from './SkillButton';
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
        <section key={index} className={`p-3`}>
            <Row className="border-bottom mb-2">
                <p className="h6">Level {index + 1}</p>
            </Row>
            <Row className="justify-content-center gap-3">
                {level.map((skill) => (
                    <Col key={skill.id} lg="2" md="3" className="text-center">
                        <SkillButton name={skill.name} level={skill.level} openSkillModal={openSkillModal} />
                    </Col>
                ))}
            </Row>
        </section>
    ));
};

export default SkillList;
