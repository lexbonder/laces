import Button from 'react-bootstrap/Button';
import { ISkillProps } from '../types';

function SkillButton({ skill, openSkillModal }: ISkillProps) {
    console.log(skill);
    return (
        <Button variant="dark" size="lg" onClick={() => openSkillModal(skill)}>
            {skill.name}
        </Button>
    );
}

export default SkillButton;
