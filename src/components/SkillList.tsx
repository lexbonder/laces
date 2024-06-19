import { useContext, useEffect, useState } from 'react';
import { Skill, SkillContext, SkillTreeRoot } from '../store/skill-context';
import SkillButton from './SkillButton';
import { ISkillListProps } from '../types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillList = ({ openSkillModal }: ISkillListProps) => {
    const renderSkillTree = (skill: Skill) => {
        console.log(skill.name);
        skill.children.forEach((child) => renderSkillTree(child));
        return <SkillButton key={skill.id} skill={skill} openSkillModal={() => openSkillModal(skill)} />;
    };

    // useEffect(() => {
    //     const skillTree = skills.reduce((tree: ISkill[][], skill) => {
    //         if (!tree[skill.level - 1]) {
    //             tree[skill.level - 1] = [];
    //         }
    //         tree[skill.level - 1].push(skill);
    //         return tree;
    //     }, []);

    //     setSkillsByLevel(skillTree);
    // }, [skills]);

    // return skillsByLevel.map((level, index) => (
    return (
        <section className={`p-3`}>
            <Row className="border-bottom mb-2">{/*         <p className="h6">Level {index + 1}</p> */}</Row>
            <Row className="justify-content-center gap-3">
                {/* //             {level.map((skill) => ( */}
                <Col lg="2" md="3" className="text-center">
                    {renderSkillTree(SkillTreeRoot)}
                    {/* //                     <SkillButton name={skill.name} level={skill.level} openSkillModal={openSkillModal} /> */}
                </Col>
                {/* ))} */}
            </Row>
        </section>
    );
    // ));

    return <></>;
};

export default SkillList;
