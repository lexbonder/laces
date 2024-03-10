import Button from 'react-bootstrap/Button';
import { ISkillProps } from '../types';

function Skill({ name, level, openSkillModal }: ISkillProps) {
    return (
        <Button variant="dark" size="lg" onClick={() => openSkillModal(name, level)}>
            {name}: {level}
        </Button>
    );
}

export default Skill;
