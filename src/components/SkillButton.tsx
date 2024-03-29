import Button from 'react-bootstrap/Button';
import { ISkillProps } from '../types';

function SkillButton({ name, level, openSkillModal }: ISkillProps) {
    return (
        <Button variant="dark" size="lg" onClick={() => openSkillModal(name, level)}>
            {name}
        </Button>
    );
}

export default SkillButton;
